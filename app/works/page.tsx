import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import projects from "@/data/projects.json"

export default function Works() {
  return (
    <>
      <Navbar />
      <section className="py-20 md:py-32">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Works</h1>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
            A collection of enterprise-scale projects we've delivered for leading companies worldwide.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((work) => (
              <Link
                key={work.id}
                href={`/works/${work.id}`}
                className="border border-border rounded-xl overflow-hidden hover:border-primary transition-colors group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 aspect-video flex items-center justify-center">
                  <span className="text-7xl">{work.image}</span>
                </div>
                <div className="p-8">
                  <p className="text-sm text-primary font-semibold mb-2">{work.category}</p>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{work.title}</h3>
                  <p className="text-muted-foreground mb-4">{work.shortDescription}</p>
                  <p className="text-sm font-semibold text-secondary">{work.impact}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
