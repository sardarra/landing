"use client"

import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"

interface NavigationProps {
  isDark: boolean
  onThemeToggle: () => void
}

export function Navigation({ isDark, onThemeToggle }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Sardar
        </a>
        <div className="flex items-center gap-6">
          <a
            href="#about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>
          <Button size="icon" variant="ghost" onClick={onThemeToggle} className="rounded-full">
            {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>
        </div>
      </div>
    </nav>
  )
}
