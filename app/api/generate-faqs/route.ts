import { NextRequest, NextResponse } from "next/server";
import { model, defaultModel } from "@/ai/providers";
import { generateText } from "ai";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body || typeof body !== 'object' || !('context' in body)) {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }
    const { context } = body as { context: string };

    if (!context) {
      return NextResponse.json({ error: "No context provided" }, { status: 400 });
    }

    const faqPrompt = `Based on the following content, generate 5-10 relevant FAQs in JSON format with "question" and "answer" fields. 
    Make the questions specific and the answers concise but informative.

    Content:
    ---
    ${context}
    ---

    Return ONLY the JSON array, nothing else. Example:
    [{"question": "...", "answer": "..."}]
    `;

    const result = await generateText({
      model: model.languageModel(defaultModel),
      system: "You are an FAQ generator that creates helpful questions and answers from provided content.",
      prompt: faqPrompt,
    });

    try {
      // Validate the response is valid JSON
      const faqs = JSON.parse(result.text);
      if (!Array.isArray(faqs)) {
        throw new Error("Invalid FAQ format - expected array");
      }
      return NextResponse.json({ faqs });
    } catch (parseError) {
      console.error("Failed to parse FAQ response:", parseError);
      return NextResponse.json(
        { error: "Failed to generate valid FAQs" }, 
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error generating FAQs:", error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to generate FAQs';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
