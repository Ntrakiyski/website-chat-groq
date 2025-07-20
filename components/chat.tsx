"use client";

import { useState } from "react";
import { modelID, defaultModel } from "@/ai/providers";
import { useScrollToBottom } from "@/lib/hooks/use-scroll-to-bottom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SuggestedPrompts } from "./suggested-prompts";
import { ArrowUp, Loader2, Plus } from "lucide-react";
import { Message } from "./message";
import { UIMessage } from "ai";
import { toast } from "sonner";
import { v4 as uuidv4 } from 'uuid';

interface ChatProps {
  context: string;
  welcomeMessage: string;
  suggestions: string; // Add suggestions prop
  onNewChat: () => void;
}

export default function Chat({ context, welcomeMessage, suggestions, onNewChat }: ChatProps) {
  const [messages, setMessages] = useState<UIMessage[]>([
    {
      id: "initial-ai-message",
      role: "assistant",
      content: welcomeMessage, // Add content property
      parts: [{ type: "text", text: welcomeMessage }],
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel] = useState<modelID>(defaultModel); // selectedModel is used but setSelectedModel isn't
  const [containerRef, endRef] = useScrollToBottom();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input || isLoading) return;

    const userMessage: UIMessage = {
      id: uuidv4(),
      role: "user",
      content: input, // Add content property
      parts: [{ type: "text", text: input }],
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          selectedModel, // Pass selectedModel
          context: context,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "API request failed");
      }

      const { response: aiText } = await response.json();

      const aiMessage: UIMessage = {
        id: uuidv4(),
        role: "assistant",
        content: aiText, // Add content property
        parts: [{ type: "text", text: aiText }],
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      toast.error(errorMessage);
      setMessages((prev) => prev.slice(0, prev.length - 1));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full relative"> {/* Added relative */}
      <header className="flex items-center justify-between p-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">AI Assistant</h1>
        <Button variant="ghost" size="icon" onClick={onNewChat}>
          <Plus className="w-6 h-6" />
        </Button>
      </header>

      <main ref={containerRef} className="flex-1 overflow-y-auto p-4 pb-[130px]"> {/* Adjusted pb for input bar and dock */}
        <div className="space-y-4">
          {messages.map((m, i) => (
            <Message 
              key={m.id} 
              message={m}
              isLatestMessage={i === messages.length - 1}
              isLoading={isLoading}
              status={isLoading ? "streaming" : "ready"}
            />
          ))}
          <SuggestedPrompts 
            suggestions={suggestions} // Pass pre-generated suggestions
            enabled={messages.length === 1 && !isLoading} // Only enable if it's the first message and not loading
            onSelect={async (prompt) => {
              if (isLoading) return;
              
              const userMessage: UIMessage = {
                id: uuidv4(),
                role: "user",
                content: prompt,
                parts: [{ type: "text", text: prompt }],
              };
              setMessages((prev) => [...prev, userMessage]);
              setIsLoading(true);

              try {
                const response = await fetch("/api/chat", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    messages: [...messages, userMessage],
                    selectedModel,
                    context: context,
                  }),
                });

                if (!response.ok) {
                  const errorData = await response.json();
                  throw new Error(errorData.error || "API request failed");
                }

                const { response: aiText } = await response.json();

                const aiMessage: UIMessage = {
                  id: uuidv4(),
                  role: "assistant",
                  content: aiText,
                  parts: [{ type: "text", text: aiText }],
                };
                setMessages((prev) => [...prev, aiMessage]);
            } catch (err) {
              const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
              toast.error(errorMessage);
                setMessages((prev) => prev.slice(0, prev.length - 1));
              } finally {
                setIsLoading(false);
              }
            }}
          />
          <div ref={endRef} />
        </div>
      </main>

      <footer className="absolute left-0 right-0 p-4 bg-background z-40 bottom-[50px]"> {/* Adjusted bottom positioning */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 relative">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            className="flex-1 rounded-full pr-12"
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading || !input} className="absolute right-2 top-1/2 -translate-y-1/2 size-10 rounded-full p-0 flex items-center justify-center">
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <ArrowUp className="w-5 h-5" />
            )}
          </Button>
        </form>
      </footer>
    </div>
  );
}
