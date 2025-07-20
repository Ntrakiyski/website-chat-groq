"use client";

import type { Message as TMessage, UIMessage } from "ai";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import { SparklesIcon, Loader2 } from "lucide-react";

export function Message({
  message,
  isLatestMessage,
  isLoading,
  status
}: {
  message: UIMessage | TMessage;
  isLatestMessage: boolean;
  isLoading: boolean;
  status: "error" | "submitted" | "streaming" | "ready";
}) {
  const isUser = message.role === "user";
  const messageText = (message.parts || []).map(part => {
    if (part.type === 'text') {
      return part.text;
    }
    return ''; // Handle other part types if necessary
  }).join('');

  return (
    <div
      className={cn(
        "w-full flex",
        isUser ? "justify-end" : "justify-start",
        isLatestMessage && "animate-pulse"
      )}
    >
      <div className="flex gap-2 items-start w-full">
        {/* AI Icon */}
        {!isUser && (
          <div className={cn(
            "size-8 flex items-center justify-center shrink-0 rounded-full",
            isLoading ? "bg-primary" : "bg-muted"
          )}>
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <SparklesIcon size={14} />
            )}
          </div>
        )}

        {/* Message Bubble */}
        <div
          className={cn(
            "px-4 py-2 rounded-lg prose prose-sm flex-1",
            isUser
              ? "bg-primary text-primary-foreground ml-auto"
              : "bg-muted text-muted-foreground",
            status === "error" && "border border-destructive"
          )}
        >
          <ReactMarkdown>{messageText}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
