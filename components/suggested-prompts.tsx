"use client";

import { Button } from "./ui/button";

interface SuggestedPromptsProps {
  suggestions: string | null; // Now directly accepts suggestions
  enabled: boolean;
  onSelect: (prompt: string) => void;
}

export function SuggestedPrompts({ suggestions, enabled, onSelect }: SuggestedPromptsProps) {
  if (!suggestions || !enabled) return null;

  // Extract the bullet points from the suggestions
  const promptList = suggestions.split('\n')
    .map((line: string) => line.replace(/^-\s*/, '').trim())
    .filter((line: string) => line.length > 0);

  return (
    <div className="w-full space-y-2 mt-4">
      {promptList.map((prompt: string, index: number) => (
        <Button
          key={index}
          variant="outline"
          className="w-full text-left justify-start whitespace-normal h-auto py-2"
          onClick={() => onSelect(prompt)}
        >
          {prompt}
        </Button>
      ))}
    </div>
  );
}
