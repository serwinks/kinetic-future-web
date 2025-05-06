
import * as React from "react"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  // Use a simpler theme approach without next-themes dependency
  const theme = "light" // We're setting a fixed light theme

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        className:
          "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        descriptionClassName: "group-[.toast]:text-muted-foreground",
      }}
      {...props}
    />
  )
}

export { Toaster }
