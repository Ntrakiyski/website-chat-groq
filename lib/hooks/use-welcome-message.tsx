"use client";

import { useLlmResponse } from "./use-llm-response";

interface UseWelcomeMessageProps {
  context: string | null; // The refined context
  enabled: boolean;
}

export function useWelcomeMessage({ context, enabled }: UseWelcomeMessageProps) {
  const welcomePrompt = `Based on the following content, create a short, friendly, and welcoming message (2-3 sentences). Greet the user and briefly mention the main topic of the content. End by asking how you can help, ensuring the question is on a new line with a bit of space before it.

  Content:
  ---
  ${context}
  ---
  `;

  return useLlmResponse({
    prompt: welcomePrompt,
    context: null, // We are providing the context within the prompt itself
    enabled: enabled && context !== null,
  });
}
