import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body || typeof body !== 'object' || !('file' in body)) {
      return NextResponse.json(
        { error: "Invalid request body" }, 
        { status: 400 }
      );
    }
    const { file } = body as { file: string };

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const n8nWebhookUrl = "https://n8n.worfklow.org/webhook/bb7354f4-f426-47e7-b3dd-94896c3397df";

    const n8nResponse = await fetch(n8nWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ file }),
    });

    if (!n8nResponse.ok) {
      const errorText = await n8nResponse.text();
      throw new Error(`n8n webhook error: ${n8nResponse.status} - ${errorText}`);
    }

    const webhookData = await n8nResponse.json();
    
    // Extract the pdf_context from the nested response structure
    interface WebhookResponse {
      response?: Array<{
        pdf_context?: string;
      }>;
    }

    // Type guard for webhook response
    const isWebhookResponse = (data: unknown): data is WebhookResponse[] => {
      return Array.isArray(data) && 
        data[0]?.response && 
        Array.isArray(data[0].response);
    };

    if (!isWebhookResponse(webhookData)) {
      throw new Error("Invalid webhook response format");
    }

    const pdfContext = webhookData[0]?.response?.[1]?.pdf_context || "";
    
    return NextResponse.json({ 
      context: pdfContext,
      fullResponse: webhookData // Include full response for debugging
    });
  } catch (error: unknown) {
    console.error("Error processing PDF:", error);
    const message = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
