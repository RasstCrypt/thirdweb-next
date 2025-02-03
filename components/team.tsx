const team = [
  {
    name: "Tom Per",
    role: "Program Manager",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_1-2-2025_1090_codecats.xyz-UzUHSk073ySfw5pVO93BueoeMn3LNr.jpeg",
  },
  {
    name: "Ivey",
    role: "Creative Director",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_1-2-2025_1090_codecats.xyz-UzUHSk073ySfw5pVO93BueoeMn3LNr.jpeg",
  },
  {
    name: "Leo",
    role: "Marketing Director",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_1-2-2025_1090_codecats.xyz-UzUHSk073ySfw5pVO93BueoeMn3LNr.jpeg",
  },
]

export default function Team() {
  return (
    <section className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold">Our Team</h2>
        <p className="text-gray-400">Meet the brains behind this Collection</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member) => (
          <div key={member.name} className="text-center space-y-4">
            <div className="aspect-square relative rounded-xl overflow-hidden">
              <img src={member.avatar || "/placeholder.svg"} alt={member.name} className="object-cover w-full h-full" />
            </div>
            <div>
              <h3 className="font-bold text-xl">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

