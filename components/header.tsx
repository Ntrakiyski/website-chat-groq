"use client";

import Link from "next/link";
import { GroqIcon } from "./icons";
import { FaqDrawer } from "./faq-drawer";
import { useState } from "react";
import { useAppContext } from "@/lib/context/context";
import { Button } from "./ui/button";

export const Header = () => {
  const { context, setContext } = useAppContext();
  const [isFaqDrawerOpen, setIsFaqDrawerOpen] = useState(false);

  const handleNewChat = () => {
    setContext(null);
  };

  const toggleFaqDrawer = () => {
    setIsFaqDrawerOpen(!isFaqDrawerOpen);
  };

  return (
<div className="w-full bg-white dark:bg-zinc-950 z-50">
      <div className="flex justify-between items-center p-4">
        <div className="flex flex-row items-center gap-2 shrink-0">
          <span className="flex flex-row items-center gap-2 home-links">
            <Link
              className="text-zinc-800 dark:text-zinc-100 -translate-y-[.5px]"
              href="/"
            >
              <svg
                data-testid="geist-icon"
                height={18}
                strokeLinejoin="round"
                viewBox="0 0 16 16"
                width={18}
                style={{ color: "currentcolor" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 1L16 15H0L8 1Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <div className="w-4 text-lg text-center text-zinc-300 dark:text-zinc-600">
              <svg
                data-testid="geist-icon"
                height={16}
                strokeLinejoin="round"
                viewBox="0 0 16 16"
                width={16}
                style={{ color: "currentcolor" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.01526 15.3939L4.3107 14.7046L10.3107 0.704556L10.6061 0.0151978L11.9849 0.606077L11.6894 1.29544L5.68942 15.2954L5.39398 15.9848L4.01526 15.3939Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="flex flex-row items-center gap-4">
              <Link className="flex flex-row items-end gap-2" href="/">
                <GroqIcon size={32} />
              </Link>
            </div>
          </span>
        </div>
        <div className="flex flex-row items-center gap-2 shrink-0">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleFaqDrawer}
            aria-label="Open FAQ drawer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>
          </Button>
          <FaqDrawer 
            context={context || ""} 
            isOpen={isFaqDrawerOpen} 
            onClose={() => setIsFaqDrawerOpen(false)} 
          />
          <Button onClick={handleNewChat} variant="outline">New Chat</Button>
        </div>
      </div>
    </div>
  );
};
