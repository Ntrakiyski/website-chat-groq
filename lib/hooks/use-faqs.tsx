"use client";

import { useLlmResponse } from "./use-llm-response";

interface UseFaqsProps {
  context: string | null;
  enabled: boolean;
}

export function useFaqs({ context, enabled }: UseFaqsProps) {
  const faqPrompt = `Based on the following content, generate 5-10 relevant FAQs in JSON format with "question" and "answer" fields. 
  Make the questions specific and the answers concise but informative.

  Content:
  ---
  ${context}
  ---

  Return ONLY the JSON array, nothing else. Example:
  [{"question": "...", "answer": "..."}]
  `;

  return useLlmResponse({
    prompt: faqPrompt,
    context: null,
    enabled: enabled && context !== null,
  });
}
