import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function HabibMallCase() {
  return (
    <>
      <Navbar />
      <section className="py-20 md:py-32">
        <div className="container-custom max-w-4xl">
          <div className="mb-12">
            <p className="text-primary font-semibold mb-4">Case Study</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Habib Mall E-Commerce Platform</h1>
            <div className="flex gap-8 text-lg">
              <div>
                <p className="text-muted-foreground mb-1">Category</p>
                <p className="font-semibold">Enterprise E-Commerce</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Year</p>
                <p className="font-semibold">2024</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Impact</p>
                <p className="font-semibold text-primary">+300% Sales</p>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl aspect-video flex items-center justify-center">
            <div className="text-center p-8">
              <h3 className="text-2xl font-bold mb-4">E-Commerce Platform</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-black/20 rounded-lg">
                  <p className="text-sm font-semibold text-primary mb-1">Products</p>
                  <p className="text-2xl font-bold">1000+</p>
                </div>
                <div className="p-4 bg-black/20 rounded-lg">
                  <p className="text-sm font-semibold text-primary mb-1">Shops</p>
                  <p className="text-2xl font-bold">50+</p>
                </div>
                <div className="p-4 bg-black/20 rounded-lg">
                  <p className="text-sm font-semibold text-primary mb-1">Real-time</p>
                  <p className="text-2xl font-bold">Always On</p>
                </div>
              </div>
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Habib Mall relied heavily on direct communication and traditional in-store shopping, leading to:
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>• Significant time wasted on customer communication</li>
                <li>• Customers unable to access product information online</li>
                <li>• Lost sales opportunities from customers unable to visit</li>
                <li>• No visibility into sales analytics or customer behavior</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Our Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We built a complete e-commerce platform featuring:
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>• 50+ shops integrated as categories</li>
                <li>• Real-time inventory management</li>
                <li>• Multi-payment options (cash, card, online)</li>
                <li>• Comprehensive admin dashboard with analytics</li>
                <li>• Mobile-first responsive design</li>
                <li>• Advanced filtering and search capabilities</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">The Results</h2>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="p-6 border border-primary rounded-lg text-center">
                  <p className="text-3xl font-bold text-primary mb-2">+300%</p>
                  <p className="text-muted-foreground">Sales Growth</p>
                </div>
                <div className="p-6 border border-primary rounded-lg text-center">
                  <p className="text-3xl font-bold text-primary mb-2">50+</p>
                  <p className="text-muted-foreground">Shops Integrated</p>
                </div>
                <div className="p-6 border border-primary rounded-lg text-center">
                  <p className="text-3xl font-bold text-primary mb-2">99.9%</p>
                  <p className="text-muted-foreground">Uptime</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS", "Docker"].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
