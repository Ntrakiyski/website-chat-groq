"use client";

import { useState, useEffect, FormEvent } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Buffer } from 'buffer';

function LoadingScreen({ isPdf = false }: { isPdf?: boolean }) {
  const pdfLoadingTexts = [
    "Decoding PDF file...",
    "Analyzing document structure...",
    "Parsing page by page...",
    "Extracting text content...",
    "Recognizing tables and lists...",
    "Identifying headers and footers...",
    "Processing images with OCR...",
    "Reconstructing text from columns...",
    "Interpreting document hierarchy...",
    "Reading file metadata...",
    "Mapping out document sections...",
    "Indexing key terms and phrases...",
    "Cross-referencing cited sources...",
    "Compiling a structured summary...",
    "Finalizing knowledge from the document..."
  ];

  const websiteLoadingTexts = [
    "Connecting to the provided URL...",
    "Fetching initial HTML...",
    "Executing JavaScript for dynamic content...",
    "Parsing the DOM structure...",
    "Identifying the main content area...",
    "Stripping away ads and navigation...",
    "Extracting clean text...",
    "Reading page metadata (title, description)...",
    "Analyzing link structure...",
    "Crawling relevant sub-pages...",
    "Aggregating content from multiple pages...",
    "Extracting structured data (e.g., FAQs)...",
    "De-duplicating information...",
    "Building a site-wide knowledge map...",
    "Finalizing knowledge from the website..."
  ];

  const loadingTexts = isPdf ? pdfLoadingTexts : websiteLoadingTexts;
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % loadingTexts.length);
    }, 2000); // Change text every 1 second

    return () => clearInterval(interval); // Cleanup on unmount
  }, [loadingTexts.length]);

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 dark:border-gray-100"></div>
        <p className="mt-4 text-gray-700 dark:text-gray-300">{loadingTexts[currentTextIndex]}</p>
      </div>
    </div>
  );
}

interface DataSourceFormProps {
  onContextLoaded: (context: string) => void;
  isLoading: boolean; // New prop for combined loading state
}

export function DataSourceForm({ onContextLoaded, isLoading }: DataSourceFormProps) {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [url, setUrl] = useState<string>("");
  const [depth, setDepth] = useState<number>(1);
  const [error, setError] = useState<string>("");
  const [isProcessingPdf, setIsProcessingPdf] = useState<boolean>(false); // Internal state for PDF processing
  const [isProcessingUrl, setIsProcessingUrl] = useState<boolean>(false); // Internal state for URL processing
  const [activeTab, setActiveTab] = useState<"url" | "pdf">("url");

  useEffect(() => {
    // Reset form fields and errors when switching tabs
    setError("");
    if (activeTab === "url") {
      setPdfFile(null);
    } else {
      setUrl("");
      setDepth(1);
    }
  }, [activeTab]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (activeTab === "pdf") {
      setIsProcessingPdf(true);
    } else {
      setIsProcessingUrl(true);
    }

    let apiEndpoint = "";
    let requestBody: { url: string; depth: number } | { file: string } = { url: '', depth: 1 };

    if (activeTab === "url") {
      if (!url) {
        setError("URL cannot be empty.");
        setIsProcessingUrl(false);
        return;
      }
      apiEndpoint = "/api/process-data";
      requestBody = { url, depth: Math.min(5, Math.max(1, depth)) };
    } else if (activeTab === "pdf") {
      if (!pdfFile) {
        setError("Please select a PDF file.");
        setIsProcessingPdf(false);
        return;
      }

      apiEndpoint = "/api/process-pdf";

      try {
        const reader = new FileReader();
        reader.readAsArrayBuffer(pdfFile);
        await new Promise<void>((resolve, reject) => {
          reader.onload = () => {
            const arrayBuffer = reader.result as ArrayBuffer;
            const base64String = Buffer.from(arrayBuffer).toString("base64");
      requestBody = { file: base64String } as { file: string };
            resolve();
          };
          reader.onerror = (error: unknown) => {
            if (error instanceof Error) {
              reject(error);
            } else {
              reject(new Error('Unknown file read error'));
            }
          };
        });
      } catch (fileReadError: unknown) {
        const message = fileReadError instanceof Error ? 
          `Failed to read file: ${fileReadError.message}` : 
          'Failed to read file: Unknown error occurred';
        setError(message);
        setIsProcessingPdf(false);
        return;
      }
    }

    // Process API call
    (async () => {
      try {
        const response = await fetch(apiEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to process data source.");
        }

        const data = await response.json();
        if (data.context) {
          onContextLoaded(data.context);
        } else {
          throw new Error("No context found in PDF response");
        }
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'An unknown error occurred';
        setError(message);
        toast.error(message);
      } finally {
        setIsProcessingPdf(false); // Reset internal PDF loading
        setIsProcessingUrl(false); // Reset internal URL loading
      }
    })();
  };

  // Show loading screen if internal processing for current tab or external combined loading is active
  if ((isProcessingPdf && activeTab === "pdf") || (isProcessingUrl && activeTab === "url") || isLoading) {
    return <LoadingScreen isPdf={activeTab === "pdf"} />;
  }

  return (
    <div className="flex flex-col p-4 pb-20">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Provide a Data Source
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6 flex-1 relative h-full pb-20"> {/* Added h-full */}
        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as "url" | "pdf")}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="url">Website URL</TabsTrigger>
            <TabsTrigger value="pdf">PDF Upload</TabsTrigger>
          </TabsList>
          <TabsContent value="url" className="space-y-4 pt-4">
            <div>
              <Label
                htmlFor="url"
                className="text-gray-700 dark:text-gray-300"
              >
                Website URL
              </Label>
              <Input
                id="url"
                type="url"
                placeholder="https://example.com"
                value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  disabled={isProcessingUrl}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <Label
                  htmlFor="depth"
                  className="text-gray-700 dark:text-gray-300"
                >
                  Crawl Depth (1-5 pages)
                </Label>
                <Input
                  id="depth"
                  type="number"
                  min="1"
                  max="5"
                  value={depth}
                  onChange={(e) =>
                    setDepth(
                      Math.min(5, Math.max(1, parseInt(e.target.value, 10) || 1))
                    )
                  }
                  disabled={isProcessingUrl}
                  className="mt-1 block w-full"
                />
              </div>
            </TabsContent>
            <TabsContent value="pdf" className="pt-4">
              <div>
                <Label
                  htmlFor="pdfFile"
                  className="text-gray-700 dark:text-gray-300"
                >
                  Upload PDF
                </Label>
                <Input
                  id="pdfFile"
                  type="file"
                  accept=".pdf"
                  onChange={(e) =>
                    setPdfFile(e.target.files ? e.target.files[0] : null)
                  }
                  disabled={isProcessingPdf}
                  className="mt-1 block w-full"
                />
              </div>
            </TabsContent>
          </Tabs>
          
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-40">
          <Button type="submit" className="w-full" disabled={isProcessingPdf || isProcessingUrl}>
            {activeTab === "url" ? "Load Data Source" : "Upload PDF"}
          </Button>
        </div>
      </form>
    </div>
  );
}
