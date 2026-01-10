"use client"

import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"

interface NavigationProps {
  isDark: boolean
  onThemeToggle: () => void
}

export function Navigation({ isDark, onThemeToggle }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border" aria-label="Main navigation">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" aria-label="Sardar - Home">
          Sardar
        </a>
        <div className="flex items-center gap-6">
          <a
            href="#about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Navigate to About section"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Navigate to Projects section"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Navigate to Skills section"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Navigate to Contact section"
          >
            Contact
          </a>
          <Button 
            size="icon" 
            variant="ghost" 
            onClick={onThemeToggle} 
            className="rounded-full"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun className="size-4" aria-hidden="true" /> : <Moon className="size-4" aria-hidden="true" />}
          </Button>
        </div>
      </div>
    </nav>
  )
}
