import { NextResponse } from "next/server";
import FirecrawlApp from "@mendable/firecrawl-js";
import { z } from "zod";

// Define the schema for the request body
const processDataSchema = z.object({
  url: z.string().url({ message: "Invalid URL format." }),
  depth: z
    .number()
    .min(1, { message: "Page limit must be at least 1." })
    .max(5, { message: "Page limit cannot exceed 5." }),
});

export async function POST(req: Request) {
  // 1. Validate API Key
  const apiKey = process.env.FIRECRAWL_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Firecrawl API key is not configured." },
      { status: 500 },
    );
  }

  try {
    // 2. Validate Request Body
    const body = await req.json();
    const validationResult = processDataSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: validationResult.error.flatten().fieldErrors },
        { status: 400 },
      );
    }
    const { url, depth } = validationResult.data;

    // 3. Initialize Firecrawl and Crawl
    const app = new FirecrawlApp({ apiKey });
    interface CrawlResult {
      markdown?: string;
      // Add other possible document fields if needed
    }

    const crawlResponse = await app.crawlUrl(url, {
      limit: depth,
      scrapeOptions: {
        formats: ["markdown"], // We only need the clean markdown content
      },
    });

    if (!('success' in crawlResponse) || !crawlResponse.success || !crawlResponse.data) {
      console.error("Firecrawl API Error:", crawlResponse);
      const errorMessage = ('error' in crawlResponse) ? 
        crawlResponse.error : "Failed to crawl the specified URL.";
      return NextResponse.json(
        { error: errorMessage },
        { status: 500 },
      );
    }

    // 4. Combine the markdown content from all crawled pages
    const combinedText = crawlResponse.data
      .map((item: CrawlResult) => item.markdown || '')
      .filter(Boolean)
      .join("\n\n---\n\n"); // Separate pages with a clear divider

    console.log("Combined Text from Firecrawl:", combinedText);

    // 5. Return the combined text
    return NextResponse.json({ context: combinedText });
  } catch (error) {
    console.error("Internal Server Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 },
    );
  }
}
