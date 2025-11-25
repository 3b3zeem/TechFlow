import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function About() {
  return (
    <>
      <Navbar />
      <section className="py-20 md:py-32">
        <div className="container-custom max-w-4xl">
          <div className="mb-20">
            <p className="text-primary font-semibold mb-4">About Us</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-12">
              Building Enterprise Solutions That <span className="text-primary">Drive Real Business Value</span>
            </h1>

            <div className="prose prose-invert max-w-none space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Professional Summary</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We lead a versatile, high-performance technical team that delivers end-to-end solutions across
                  multiple domains — including product engineering, web & mobile development, security, infrastructure,
                  and data systems. We build robust systems from scratch, enhance existing platforms, and deliver
                  technical solutions that create real business value.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Our Experience</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We've built various systems and full-scale platforms for both large and small companies, providing
                  high-quality work regardless of project size. We have also worked with major global platforms such as
                  Google (YouTube), Facebook, Twitter, Carrefour, Quora, and others — identifying and helping resolve
                  real-world issues through responsible and professional reporting.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">What We Do</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Product Engineering",
                      description: "End-to-end product development from concept to deployment",
                    },
                    {
                      title: "Web & Mobile Development",
                      description: "Responsive, scalable applications across all platforms",
                    },
                    {
                      title: "Security",
                      description: "Enterprise-grade security architecture and implementation",
                    },
                    {
                      title: "Infrastructure",
                      description: "Cloud solutions and DevOps for maximum reliability",
                    },
                    {
                      title: "Data Systems",
                      description: "Large-scale data processing and analytics platforms",
                    },
                    {
                      title: "System Enhancement",
                      description: "Optimizing and scaling existing platforms",
                    },
                  ].map((service, idx) => (
                    <div key={idx} className="p-6 border border-border rounded-xl">
                      <h3 className="font-bold mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Proven track record with Fortune 500 companies and global platforms</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Expert team with deep expertise across all technology domains</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Responsible security practices and real-world problem solving</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Scalable solutions that grow with your business</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Commitment to quality regardless of project size</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
