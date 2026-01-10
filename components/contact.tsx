"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6" aria-labelledby="contact-heading">
      <div className="max-w-5xl mx-auto text-center">
        <h2 id="contact-heading" className="text-4xl font-bold mb-6">Let's Connect</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">

          {/* TODO: Add booking functionality */}

        </div>

        <div className="flex justify-center gap-6 mb-12">
          <a
            href="https://github.com/sardarra"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-background border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all"
            aria-label="Visit Sardar's GitHub profile"
          >
            <Github className="size-5 text-muted-foreground hover:text-primary" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/sardar-rahman-16b564336/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-background border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all"
            aria-label="Visit Sardar's LinkedIn profile"
          >
            <Linkedin className="size-5 text-muted-foreground hover:text-primary" aria-hidden="true" />
          </a>
          <a
            href="mailto:ssrahman@umass.edu"
            className="p-3 bg-background border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all"
            aria-label="Send email to Sardar"
          >
            <Mail className="size-5 text-muted-foreground hover:text-primary" aria-hidden="true" />
          </a>
        </div>

        <div className="pt-12 border-t border-border">
          <p className="text-sm text-muted-foreground">© 2025 Sardar. Built with React, Next.js, and Tailwind CSS.</p>
        </div>
      </div>
    </section>
  )
}
