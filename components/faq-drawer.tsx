"use client";

import { Button } from "./ui/button";
// import { HelpCircle } from "lucide-react";
import { useFaqs } from "@/lib/hooks/use-faqs";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "./ui/drawer"; // Removed DrawerTrigger

interface FaqDrawerProps {
  context: string | null; // Allow context to be null
  isOpen: boolean; // Added isOpen prop
  onClose: () => void; // Added onClose prop
}

export function FaqDrawer({ context, isOpen, onClose }: FaqDrawerProps) { // Destructure new props
  const { response, isLoading } = useFaqs({
    context,
    enabled: isOpen, // Use isOpen for enabled
  });

  interface FAQ {
    question: string;
    answer: string;
  }

  let faqs: FAQ[] = [];
  try {
    faqs = response ? JSON.parse(response) : [];
  } catch (err) {
    console.error("Failed to parse FAQs:", err);
  }

  return (
    <Drawer open={isOpen} onOpenChange={onClose}> {/* Use isOpen and onClose */}
      {/* Removed DrawerTrigger */}
      <DrawerContent className="max-h-[80vh]">
        <DrawerHeader>
          <DrawerTitle>Generated FAQs</DrawerTitle>
        </DrawerHeader>
        
        <div className="overflow-y-auto px-4 space-y-4">
          {isLoading ? (
            <div>Generating FAQs...</div>
          ) : (
            faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <h3 className="font-medium">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))
          )}
        </div>

        <div className="p-4">
          <DrawerClose asChild>
            <Button variant="outline" className="w-full">
              Close
            </Button>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
