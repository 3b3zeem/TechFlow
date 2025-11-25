import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import teamMembers from "@/data/team.json"

export default function Team() {
  return (
    <>
      <Navbar />
      <section className="py-20 md:py-32">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Team</h1>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
            Meet the talented engineers and architects behind our enterprise solutions.
          </p>

          <div className="space-y-16">
            {teamMembers.map((member) => (
              <div key={member.id} className="border-b border-border pb-16 last:border-b-0">
                <div className="grid md:grid-cols-3 gap-12">
                  <div>
                    <div className="text-8xl mb-6">{member.avatar}</div>
                    <h2 className="text-3xl font-bold mb-2">{member.name}</h2>
                    <p className="text-lg text-primary font-semibold mb-6">{member.role}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {member.expertise.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                    {member.portfolioLink && (
                      <a
                        href={member.portfolioLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        View Portfolio →
                      </a>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">{member.bio}</p>
                    <h3 className="font-bold text-lg mb-4">Key Achievements</h3>
                    <ul className="space-y-3 mb-8">
                      {member.experience.map((exp, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-primary font-bold flex-shrink-0">✓</span>
                          <span className="text-muted-foreground">{exp}</span>
                        </li>
                      ))}
                    </ul>
                    <h3 className="font-bold text-lg mb-4">Project Track Record</h3>
                    <ul className="space-y-2">
                      {member.track.map((track, i) => (
                        <li key={i} className="flex gap-3 text-muted-foreground">
                          <span className="text-primary flex-shrink-0">•</span>
                          <span>{track}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
