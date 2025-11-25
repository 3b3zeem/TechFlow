import projects from "@/data/projects.json"

export default function Testimonial() {
  // Get the first project with testimonial
  const projectWithTestimonial = projects.find((p) => p.clientTestimonial)

  if (!projectWithTestimonial?.clientTestimonial) {
    return null
  }

  const { quote, client, role } = projectWithTestimonial.clientTestimonial

  return (
    <section className="py-20 md:py-32 border-b border-border">
      <div className="container-custom">
        <div className="max-w-2xl">
          <p className="text-lg md:text-2xl font-medium mb-8 text-muted-foreground leading-relaxed">"{quote}"</p>
          <div>
            <p className="font-bold text-lg">{client}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
