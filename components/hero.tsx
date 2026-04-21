"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden" aria-labelledby="hero-heading">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
        <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Hi, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Sardar Rahman 👋</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-light text-muted-foreground mb-6">
          I build full-stack applications with code
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
        Computer Science student at UMass Amherst (Honors, 4.0 GPA) with a minor in Business. I care about clean architecture, meaningful UX, and building things that actually ship — from productivity tools to AI-powered web apps.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            className="px-8"
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }}
            aria-label="Scroll to projects section"
          >
            View My Projects
          </Button>
        </div>

        <div className="animate-bounce" aria-hidden="true">
          <ArrowDown className="size-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
