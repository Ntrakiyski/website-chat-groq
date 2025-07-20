"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1", // Smaller font, semi-bold, added margin-bottom
        className
      )}
      {...props}
    />
  )
}

export { Label }
