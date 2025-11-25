"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import teamData from "@/data/team.json"

export default function TeamPreview() {
  const [members, setMembers] = useState<typeof teamData>([])

  useEffect(() => {
    setMembers(teamData)
  }, [])

  return (
    <section className="py-20 md:py-32 border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl font-bold">Our Team</h2>
          <Link href="/team" className="text-primary font-medium hover:underline">
            Meet Full Team →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {members.slice(0, 3).map((member) => (
            <div
              key={member.id}
              className="border border-border rounded-xl p-8 hover:border-primary transition-colors group"
            >
              <div className="text-6xl mb-4">{member.avatar}</div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-sm text-primary font-semibold mb-4">{member.role}</p>
              <p className="text-sm text-muted-foreground mb-6">{member.bio}</p>
              <div className="flex gap-2 flex-wrap mb-6">
                {member.expertise.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                    {skill}
                  </span>
                ))}
              </div>
              <Link
                href="/team"
                className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
