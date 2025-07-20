import { model, modelID } from "@/ai/providers";
import { generateText, UIMessage } from "ai";
import { NextResponse } from "next/server";

export const maxDuration = 30;

export async function POST(req: Request) {
  const {
    messages,
    selectedModel,
    context,
  }: {
    messages: UIMessage[];
    selectedModel: modelID;
    context?: string;
  } = await req.json();

  let systemPrompt = "You are a helpful assistant.";

  if (context) {
    systemPrompt = `You are a customer support AI assistant for a product or service described in the context below.
    Your personality is helpful, friendly, and professional.
    Your primary goal is to answer user questions based ONLY on the provided context.

    Follow these rules strictly:
    1.  Provide short, concise, and to-the-point answers. Do not be verbose.
    2.  Always end your response with a relevant, open-ended question to encourage conversation.
    3.  If the answer is not in the context, you MUST respond with: "I'm sorry, I don't have that information. Is there another way I can help you?" Do not make up answers.
    4.  Do not mention that you are an AI or that you are referencing a "context". Speak as if you are a knowledgeable support agent.

    Here is the context:
    ---
    ${context}
    ---
    `;
  }

  try {
    const result = await generateText({
      model: model.languageModel(selectedModel),
      system: systemPrompt,
      messages,
    });

    return NextResponse.json({ response: result.text });
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes("Rate limit")) {
        return NextResponse.json(
          { error: "Rate limit exceeded. Please try again later." },
          { status: 429 },
        );
      }
    }
    console.error(error);
    return NextResponse.json(
      { error: "An error occurred." },
      { status: 500 },
    );
  }
}