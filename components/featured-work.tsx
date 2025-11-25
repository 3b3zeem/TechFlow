import Link from "next/link"
import projects from "@/data/projects.json"

const FeaturedWork = () => {
  const featuredProjects = projects.slice(0, 3)

  return (
    <section className="py-20 md:py-32 border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl font-bold">Featured Works</h2>
          <Link href="/works" className="text-primary font-medium hover:underline">
            View All →
          </Link>
        </div>

        <div className="space-y-8">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/works/${project.id}`}
              className="block group border border-border rounded-2xl overflow-hidden hover:border-primary transition-colors"
            >
              <div className="md:grid md:grid-cols-3 gap-0 h-full">
                <div className="md:col-span-1 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-8 md:p-12">
                  <span className="text-6xl md:text-7xl">{project.image}</span>
                </div>
                <div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <p className="text-sm font-semibold text-primary mb-2">{project.category}</p>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{project.shortDescription}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-secondary">{project.impact}</p>
                    <p className="text-primary font-semibold group-hover:translate-x-2 transition-transform">
                      Explore →
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedWork
