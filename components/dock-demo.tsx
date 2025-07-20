"use client";

import { Dock } from "@/components/ui/dock-two"
import {
  MessageSquare, // For FAQs
  Plus // For New Chat
} from "lucide-react"
import { usePathname, useRouter } from "next/navigation"; // Import usePathname and useRouter
import { FaqDrawer } from "./faq-drawer"; // Import FaqDrawer
import { useState } from "react"; // Import useState

interface DockDemoProps {
  onNewChat: () => void; // Add onNewChat prop
  faqContext: string | null; // Add faqContext prop
}

function DockDemo({ onNewChat, faqContext }: DockDemoProps) {
  const pathname = usePathname(); // Get current pathname
  const router = useRouter(); // Get router
  const [isFaqDrawerOpen, setIsFaqDrawerOpen] = useState(false); // State for FAQ drawer

  const items = [
    {
      icon: Plus,
      label: "New Chat",
      onClick: () => {
        onNewChat(); // Call onNewChat function
        router.push("/"); // Navigate to home
      }
    },
    {
      icon: MessageSquare,
      label: "FAQs",
      onClick: () => setIsFaqDrawerOpen(true) // Open FAQ drawer
    },
  ]

  return (
    <>
      <Dock items={items} activeLabel={pathname === "/" ? "New Chat" : "FAQs"} /> {/* Pass activeLabel */}
      <FaqDrawer isOpen={isFaqDrawerOpen} onClose={() => setIsFaqDrawerOpen(false)} context={faqContext} /> {/* Pass context */}
    </>
  )
}

export { DockDemo }
