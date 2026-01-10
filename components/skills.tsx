"use client"

import { Code2, Palette, Pencil } from "lucide-react"

const skillCategories = [
  {
    name: "Frontend",
    icon: Code2,
    skills: ["React", "JavaScript","HTML", "CSS"],
  },
  {
    name: "Backend",
    icon: Palette,
    skills: ["Python", "Node.js", "Express.js", "Flask", "MongoDB"],
  },
  {
    name: "Design",
    icon: Pencil,
    skills: ["UI/UX Design", "Figma", "Testing and Debugging", "Design Systems", "Rest APIs"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-card/50" aria-labelledby="skills-heading">
      <div className="max-w-5xl mx-auto">
        <h2 id="skills-heading" className="text-4xl font-bold mb-12">Skills & Technologies</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="size-5 text-primary" />
                  <h3 className="text-lg font-bold">{category.name}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div key={skill} className="text-sm text-muted-foreground">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
