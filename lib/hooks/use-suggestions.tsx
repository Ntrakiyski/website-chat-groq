"use client";

import { useLlmResponse } from "./use-llm-response";

interface UseSuggestionsProps {
  context: string | null; // The extracted PDF/website data
  enabled: boolean;
}

export function useSuggestions({ context, enabled }: UseSuggestionsProps) {
  const suggestionsPrompt = `Based on the following content, generate exactly 2 very short and concise questions a user might ask. Each question must be answerable directly and entirely from the provided content. Format each question as a short, clear question that can be used as a prompt. Return them as a bulleted list.

  Content:
  ---
  ${context}
  ---
  `;

  return useLlmResponse({
    prompt: suggestionsPrompt,
    context: null, // We provide context within the prompt
    enabled: enabled && context !== null,
  });
}
