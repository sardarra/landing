"use client"

import { Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  return (
    <Button size="icon" variant="ghost" className="rounded-full">
      <Sun className="size-4" />
    </Button>
  )
}
