"use client";

// import { useAppContext } from "@/lib/context/context";
import { MobileShell } from "@/components/mobile-shell";
import { Toaster } from "@/components/ui/sonner";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <MobileShell>
      <div className="flex flex-col h-full relative overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
        <Toaster position="top-right" /> {/* Set toaster position */}
      </div>
    </MobileShell>
  );
}
