import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-12 w-full min-w-0 rounded-lg border-none", // Increased height, rounded-lg, removed border
        "bg-gray-100 dark:bg-gray-700", // Light gray background
        "px-4 py-2 text-base", // Increased padding
        "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
        "transition-[color,box-shadow] outline-none",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background", // Focus ring with primary color
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
