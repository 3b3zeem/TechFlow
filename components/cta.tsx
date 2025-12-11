import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 md:py-32 border-b border-border" id="contact">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 md:p-16 text-center text-primary-foreground">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how we can build scalable solutions that drive real
            business impact for your organization.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-foreground text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Schedule Consultation
          </Link>
          <div className="mt-8 flex flex-col md:flex-row gap-6 justify-center text-sm md:text-base opacity-90">
            <a
              href="mailto:moustafadabahh@gmail.com"
              className="hover:underline flex items-center justify-center gap-2"
            >
              moustafadabahh@gmail.com
            </a>
            <a
              href="tel:+201099560690"
              className="hover:underline flex items-center justify-center gap-2"
            >
              +20 109 956 0690
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
