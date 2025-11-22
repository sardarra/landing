"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Enfokado",
    description:
      "An innovative productivity tool that helps you stay focused and productive. Built with React and modern web technologies.",
    tech: ["React", "JavaScript", "Firebase"],
    featured: true,
    link: "https://enfokadoapp.web.app",
  },
  {
    title: "PassPath",
    description: "A mobile app that allows immigrants to study for the U.S. Citizenship test.",
    tech: ["React Native", "JavaScript", "Firebase"],
    link: "#",
  },
  {
    title: "Enfocalendar",
    description: "A calendar app that helps you stay organized and on top of your tasks.",
    tech: ["React", "JavaScript", "MongoDB", "Express", "Node.js"],
    link: "#",
  },
  {
    title: "MassPath",
    description: "A calorie counter designed for UMass Amherst students that allows them to track their calories and macros of foods available at UMass Dining Halls.",
    tech: ["React", "JavaScript", "Flask", "Python"],
    link: "#",
  }
]

export function Projects() {
  const featured = projects[0]
  const others = projects.slice(1)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>

        {/* Featured Project */}
        <div className="mb-12 p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 hover:border-primary/50 transition-all group cursor-pointer">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold mb-4">
                Featured
              </div>
              <h3 className="text-2xl font-bold mb-3">{featured.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{featured.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {featured.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-background/50 text-xs rounded-full text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <Button size="sm" variant="default">
                  <ExternalLink className="size-4 mr-2" />
                  View Project
                </Button>
                <Button size="sm" variant="outline">
                  <Github className="size-4 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {others.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-background border border-border rounded-lg hover:border-primary/50 transition-all group cursor-pointer"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-muted text-xs rounded text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="ghost" className="text-xs">
                  <ExternalLink className="size-3 mr-1" />
                  View
                </Button>
                <Button size="sm" variant="ghost" className="text-xs">
                  <Github className="size-3 mr-1" />
                  Code
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
