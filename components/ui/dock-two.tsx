import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
interface DockProps {
  className?: string
  items: {
    icon: LucideIcon
    label: string
    onClick: () => void // Changed href to onClick
  }[]
  activeLabel: string // Changed activePath to activeLabel
}

interface DockIconButtonProps {
  icon: LucideIcon
  label: string
  onClick: () => void // Changed href to onClick
  isActive: boolean // Add isActive prop
  className?: string
}

const DockIconButton = React.forwardRef<HTMLButtonElement, DockIconButtonProps>(
  ({ icon: Icon, label, onClick, isActive, className }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={cn(
          "flex flex-row items-center justify-center gap-1 px-2 py-1 rounded-lg", // Changed to flex-row, adjusted padding and gap
          "transition-colors duration-200",
          isActive ? "text-primary" : "text-muted-foreground", // Active/inactive text color
          className
        )}
      >
        <Icon className={cn("w-5 h-5", isActive ? "fill-primary" : "")} /> {/* Smaller icon */}
        <span className={cn("text-xs", isActive ? "font-semibold" : "")}> {/* Removed mt-1 */}
          {label}
        </span>
      </motion.button>
    )
  }
)
DockIconButton.displayName = "DockIconButton"

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  ({ items, className, activeLabel }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "absolute bottom-0 left-0 right-0 z-50",
          "flex items-center justify-around py-4 px-2", // Adjusted padding to py-4
          "bg-background border-t border-border shadow-lg",
          "rounded-t-xl",
          className
        )}
      >
        {items.map((item) => (
          <DockIconButton
            key={item.label}
            {...item}
            isActive={activeLabel === item.label}
          />
        ))}
      </motion.div>
    )
  }
)
Dock.displayName = "Dock"

export { Dock }
