"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="py-20 md:py-32 bg-muted/30" id="experience">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Professional Summary
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg dark:prose-invert max-w-none text-center"
          >
            <p className="text-xl leading-relaxed text-muted-foreground mb-8">
              I lead a versatile, high-performance technical team that delivers
              end-to-end solutions across multiple domains — including product
              engineering, web & mobile development, security, infrastructure,
              and data systems. We build robust systems from scratch, enhance
              existing platforms, and deliver technical solutions that create
              real business value.
            </p>
            <p className="text-xl leading-relaxed text-muted-foreground">
              In addition to that, we’ve built various systems and full-scale
              platforms for both large and small companies, providing
              high-quality work regardless of project size. We have also worked
              with major global platforms such as Google (YouTube), Facebook,
              Twitter, Carrefour, Quora, and others — identifying and helping
              resolve real-world issues through responsible and professional
              reporting.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
