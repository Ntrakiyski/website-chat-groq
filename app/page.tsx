"use client";

import { useState, useEffect } from "react";
import { useAppContext } from "@/lib/context/context";
import Chat from "@/components/chat";
import { DataSourceForm } from "@/components/data-source-form";
import { useLlmResponse } from "@/lib/hooks/use-llm-response";
import { useWelcomeMessage } from "@/lib/hooks/use-welcome-message";
import { useSuggestions } from "@/lib/hooks/use-suggestions"; // Import useSuggestions
// import { Loader2 } from "lucide-react";
// import { AppLayout } from "@/components/app-layout";
import { DockDemo } from "@/components/dock-demo";

export default function Page() {
  const [rawContext, setRawContext] = useState<string | null>(null);
  const [refinedContext, setRefinedContext] = useState<string | null>(null);
  const [welcomeMessage, setWelcomeMessage] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<string | null>(null); // New state for suggestions

  const { response: llmResponse, isLoading: llmLoading } = useLlmResponse({
    prompt:
      "Summarize and structure the following content into readable markdown. Identify the main topics and key points.",
    context: rawContext,
    enabled: rawContext !== null && refinedContext === null,
  });

  const { response: generatedWelcomeMessage, isLoading: welcomeLoading } =
    useWelcomeMessage({
      context: refinedContext,
      enabled: refinedContext !== null && welcomeMessage === null,
    });

  const { response: generatedSuggestions, isLoading: suggestionsLoading } =
    useSuggestions({
      context: refinedContext,
      enabled: refinedContext !== null && suggestions === null,
    });

  const { setContext } = useAppContext();

  useEffect(() => {
    if (llmResponse && !llmLoading && refinedContext === null) {
      setRefinedContext(llmResponse);
      setContext(llmResponse);
    }
  }, [llmResponse, llmLoading, refinedContext, setContext]);

  useEffect(() => {
    if (
      generatedWelcomeMessage &&
      !welcomeLoading &&
      welcomeMessage === null
    ) {
      setWelcomeMessage(generatedWelcomeMessage);
    }
  }, [generatedWelcomeMessage, welcomeLoading, welcomeMessage]);

  useEffect(() => {
    if (
      generatedSuggestions &&
      !suggestionsLoading &&
      suggestions === null
    ) {
      setSuggestions(generatedSuggestions);
    }
  }, [generatedSuggestions, suggestionsLoading, suggestions]);

  const handleNewChat = () => {
    setRawContext(null);
    setRefinedContext(null);
    setWelcomeMessage(null);
    setSuggestions(null); // Reset suggestions on new chat
  };

  const showLoadingScreen =
    rawContext !== null && (!refinedContext || !welcomeMessage || !suggestions); // Include suggestions in loading check

  if (rawContext === null || showLoadingScreen) {
    return (
      <main className="flex-1 relative h-full"> {/* Added h-full */}
        <DataSourceForm
          onContextLoaded={setRawContext}
          isLoading={showLoadingScreen} // Pass combined loading state
        />
      </main>
    );
  }

  return (
    <>
      {/* Ensure all data is loaded before passing to Chat */}
      {refinedContext && welcomeMessage && suggestions && (
        <Chat
          context={refinedContext}
          welcomeMessage={welcomeMessage}
          suggestions={suggestions} // Pass suggestions to Chat
          onNewChat={handleNewChat}
        />
      )}
      <DockDemo onNewChat={handleNewChat} faqContext={refinedContext} />
    </>
  );
}
