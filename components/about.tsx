"use client"

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-card/50" aria-labelledby="about-heading">
      <div className="max-w-5xl mx-auto">
        <h2 id="about-heading" className="text-4xl font-bold mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a CS student at UMass Amherst, where I'm part of the Honors College. My focus is full-stack development and applied AI — I like working across the whole stack, from designing schemas and REST APIs to building polished React interfaces.
            <br />
            <br />
I've shipped projects at hackathons, taught programming to kids, and spent a lot of time thinking about how software can be genuinely useful. Outside of code, I'm involved with SASE, HackUMass, and UMass Robotics.
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
