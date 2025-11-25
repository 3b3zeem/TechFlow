import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { notFound } from "next/navigation"
import projects from "@/data/projects.json"

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = projects.find((p) => p.id === Number.parseInt(id))

  if (!project) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <Link href="/works" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            ← Back to Works
          </Link>

          <div className="mb-12">
            <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">{project.shortDescription}</p>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl aspect-video flex items-center justify-center mb-16 border border-border">
            <span className="text-9xl">{project.image}</span>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16 py-8 border-y border-border">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{metric.value}</p>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{project.challenge}</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Our Solution</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{project.solution}</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{project.fullDescription}</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border border-border rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-2 bg-primary/10 text-primary text-sm rounded-lg font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.deployment}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-border rounded-xl p-6 hover:border-primary transition-colors group"
              >
                <p className="text-sm text-muted-foreground mb-2">View Deployment</p>
                <p className="font-bold text-primary group-hover:underline">Live Project →</p>
              </a>

              <div className="border border-border rounded-xl p-6">
                <p className="text-sm text-muted-foreground mb-1">Year Completed</p>
                <p className="text-2xl font-bold">{project.year}</p>
              </div>
            </div>
          </div>

          {project.clientTestimonial && (
            <div className="border-t border-border pt-16">
              <h2 className="text-3xl font-bold mb-8">Client Testimonial</h2>
              <div className="max-w-2xl">
                <p className="text-lg md:text-xl font-medium mb-6 text-muted-foreground leading-relaxed italic">
                  "{project.clientTestimonial.quote}"
                </p>
                <div>
                  <p className="font-bold text-lg">{project.clientTestimonial.client}</p>
                  <p className="text-sm text-muted-foreground">{project.clientTestimonial.role}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 md:py-32 border-t border-border">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 md:p-16 text-center text-primary-foreground">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how we can build scalable solutions that drive real business impact for your organization.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary-foreground text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
