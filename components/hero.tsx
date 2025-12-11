"use client";

export default function Hero() {
  return (
    <section className="py-20 md:py-32 border-b border-border">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Enterprise-Scale <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We lead a versatile, high-performance technical team delivering
              end-to-end solutions across product engineering, web & mobile
              development, security, infrastructure, and data systems.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-primary cursor-pointer"
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-6 rounded-xl border border-border bg-gradient-to-br from-primary/5 to-accent/5">
              <p className="text-sm text-muted-foreground mb-2">
                Global Platforms
              </p>
              <p className="text-xl font-bold">
                Google, Facebook, Twitter, Carrefour, Quora
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-xl border border-border bg-gradient-to-br from-primary/5 to-accent/5">
                <p className="text-3xl font-bold text-primary mb-1">50+</p>
                <p className="text-sm text-muted-foreground">
                  Projects Delivered
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-gradient-to-br from-primary/5 to-accent/5">
                <p className="text-3xl font-bold text-primary mb-1">100%</p>
                <p className="text-sm text-muted-foreground">Quality Focused</p>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-border bg-gradient-to-br from-accent/10 to-primary/5">
              <p className="text-sm font-semibold text-primary mb-2">
                Our Expertise
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Web Dev",
                  "Mobile Apps",
                  "Security",
                  "Infrastructure",
                  "Data Systems",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1 bg-primary/10 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
