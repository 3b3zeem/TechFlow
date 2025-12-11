"use client"

import type React from "react"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", company: "", message: "" })
  }

  return (
    <>
      <Navbar />
      <section className="py-20 md:py-32">
        <div className="container-custom max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Let's Work Together</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Tell us about your project and let's discuss how we can help transform your business.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Full Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:border-primary focus:outline-none transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:border-primary focus:outline-none transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Company/Organization</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:border-primary focus:outline-none transition-colors"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                required
                rows={6}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:border-primary focus:outline-none transition-colors resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:moustafadabahh@gmail.com" className="text-primary hover:underline">
                moustafadabahh@gmail.com
              </a>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <a href="tel:+201099560690" className="text-primary hover:underline">
                +20 109 956 0690
              </a>
            </div>
            {/* <div>
              <h3 className="font-semibold mb-2">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-primary hover:underline">
                  LinkedIn
                </a>
                <a href="#" className="text-primary hover:underline">
                  Twitter
                </a>
                <a href="#" className="text-primary hover:underline">
                  GitHub
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
