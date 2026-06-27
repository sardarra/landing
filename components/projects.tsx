"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { describe } from "node:test"

const projects = [
  {
    title: "Shukra",
    description: "Free agentic AI accounting tool designed for solo entrepreneurs and small businesses, that parses plain English transactions, stores them, and generates financial documents.",
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Claude API"],
    featured: true,
    link: "https://shukra.vercel.app",
    github: "https://github.com/sardarra/shukra",

  },
  {
    title: "Enfokado",
    description:
      "An innovative productivity tool that helps you stay focused and productive. Built with React and modern web technologies.",
    tech: ["React", "JavaScript", "Firebase"],
  
    link: "https://enfokado.vercel.app",
    github: "https://github.com/sardarra/Enfokado",
  },
  {
    title: "PassPath",
    description: "A mobile app that allows immigrants to study for the U.S. Citizenship test.",
    tech: ["React Native", "JavaScript", "Firebase"],
    link: "https://youtu.be/5vGamu0xJ24",
    github: "https://github.com/sardarra/citizen",
  },
  {
    title: "Enfocalendar",
    description: "A calendar app that helps you stay organized and on top of your tasks.",
    tech: ["React", "JavaScript", "MongoDB", "Express", "Node.js"],
    link: "https://www.enfocalendar.com",
    github: "https://github.com/sardarra/Enfocalendar",
  },
  {
    title: "MassPath",
    description: "A calorie counter designed for UMass Amherst students that allows them to track their calories and macros of foods available at UMass Dining Halls.",
    tech: ["React", "JavaScript", "Flask", "Python"],
    link: "https://github.com/chauvihue/mass_path",
    github: "https://github.com/chauvihue/mass_path",
    
  }
]

export function Projects() {
  const featured = projects[0]
  const others = projects.slice(1)

  useEffect(() => {
    const projectStructuredData = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: projects.map((project, index) => ({
        "@type": "SoftwareApplication",
        position: index + 1,
        name: project.title,
        description: project.description,
        applicationCategory: "WebApplication",
        operatingSystem: "Web Browser",
        url: project.link,
        codeRepository: project.github,
        programmingLanguage: project.tech,
      })),
    }

    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.text = JSON.stringify(projectStructuredData)
    script.id = "projects-structured-data"
    
    // Remove existing script if present
    const existingScript = document.getElementById("projects-structured-data")
    if (existingScript) {
      existingScript.remove()
    }
    
    document.head.appendChild(script)

    return () => {
      const scriptToRemove = document.getElementById("projects-structured-data")
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [])

  return (
    <section id="projects" className="py-24 px-6" aria-labelledby="projects-heading">
      <div className="max-w-5xl mx-auto">
        <h2 id="projects-heading" className="text-4xl font-bold mb-12">Projects</h2>

        {/* Featured Project */}
        <article className="mb-12 p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 hover:border-primary/50 transition-all group cursor-pointer">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold mb-4" aria-label="Featured project">
                Featured
              </div>
              <h3 className="text-2xl font-bold mb-3">{featured.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{featured.description}</p>
              <div className="flex flex-wrap gap-2 mb-6" aria-label="Technologies used">
                {featured.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-background/50 text-xs rounded-full text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <Button 
                  size="sm" 
                  variant="default" 
                  onClick={() => {
                    window.location.href = featured.link
                  }}
                  aria-label={`View ${featured.title} project`}
                >
                  <ExternalLink className="size-4 mr-2" aria-hidden="true" />
                  View Project
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => {
                    window.location.href = featured.github
                  }}
                  aria-label={`View ${featured.title} source code on GitHub`}
                >
                  <Github className="size-4 mr-2" aria-hidden="true" />
                  Code
                </Button>
              </div>
            </div>
          </div>
        </article>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {others.map((project, index) => (
            <article
              key={index}
              className="p-6 bg-background border border-border rounded-lg hover:border-primary/50 transition-all group cursor-pointer"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6" aria-label="Technologies used">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-muted text-xs rounded text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="text-xs" 
                  onClick={() => {
                    window.location.href = project.link
                  }}
                  aria-label={`View ${project.title} project`}
                >
                  <ExternalLink className="size-3 mr-1" aria-hidden="true" />
                  View
                </Button>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="text-xs" 
                  onClick={() => {
                    window.location.href = project.github
                  }}
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <Github className="size-3 mr-1" aria-hidden="true" />
                  Code
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
