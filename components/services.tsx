const services = [
  {
    icon: "🏗️",
    title: "Product Engineering",
    description:
      "End-to-end development from concept to production, building scalable systems that solve real business problems.",
  },
  {
    icon: "🌐",
    title: "Web & Mobile Development",
    description: "Full-stack web applications and cross-platform mobile solutions with cutting-edge technologies.",
  },
  {
    icon: "🔒",
    title: "Security & Infrastructure",
    description: "Robust security architectures and cloud infrastructure for enterprise-grade reliability.",
  },
  {
    icon: "📊",
    title: "Data Systems",
    description: "Advanced data pipelines, analytics, and real-time processing for data-driven decisions.",
  },
]

export default function Services() {
  return (
    <section className="py-20 md:py-32 border-b border-border">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-16 text-center">What We Do</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="p-8 border border-border rounded-xl hover:border-primary transition-colors group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
