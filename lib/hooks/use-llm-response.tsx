"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";

interface UseLlmResponseProps {
  prompt: string;
  context?: string | null;
  enabled?: boolean; // To control when the hook runs
}

interface LlmResponse {
  response: string | null;
  isLoading: boolean;
  error: string | null;
}

export function useLlmResponse({ prompt, context, enabled = true }: UseLlmResponseProps): LlmResponse {
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled || !prompt) {
      setResponse(null);
      setIsLoading(false);
      setError(null);
      return;
    }

    const fetchLlmResponse = async () => {
      setIsLoading(true);
      setError(null);
      setResponse(null);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: [{ role: "user", content: prompt }],
            context: context,
            selectedModel: "kimi-k2", // Using a valid model from providers.ts
          }),
        });

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error || "Failed to get LLM response.");
        }

        const data = await res.json();
        setResponse(data.response);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to get LLM response';
        setError(errorMessage);
        toast.error(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLlmResponse();
  }, [prompt, context, enabled]);

  return { response, isLoading, error };
}
