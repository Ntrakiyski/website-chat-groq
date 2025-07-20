"use client";

import { Button } from "./ui/button";
import { HelpCircle } from "lucide-react";

interface FaqButtonProps {
  onClick: () => void;
}

export function FaqButton({ onClick }: FaqButtonProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onClick}
      aria-label="Generate FAQs"
    >
      <HelpCircle className="h-5 w-5" />
    </Button>
  );
}
