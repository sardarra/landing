"use client"

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Computer Science student at UMass Amherst with a deep passion for artificial intelligence, modern
              web development, and building tools that make a difference.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My interests span machine learning, robotics, and full-stack development. 
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond coding, I enjoy mentoring other developers, exploring new technologies, and contributing to
              open-source projects that push the boundaries of what's possible.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-all">
              <div className="text-sm font-semibold text-primary mb-2">React Developer</div>
              <p className="text-sm text-muted-foreground">Building modern, interactive interfaces</p>
            </div>
            <div className="p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-all">
              <div className="text-sm font-semibold text-primary mb-2">AI Enthusiast</div>
              <p className="text-sm text-muted-foreground">Exploring ML and deep learning</p>
            </div>
            <div className="p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-all">
              <div className="text-sm font-semibold text-primary mb-2">Full-Stack Dev</div>
              <p className="text-sm text-muted-foreground">End-to-end application development</p>
            </div>
            <div className="p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-all">
              <div className="text-sm font-semibold text-primary mb-2">Mentor & Creator</div>
              <p className="text-sm text-muted-foreground">Sharing knowledge and building tools</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
