import Image from "next/image"
import { Progress } from "@/components/ui/progress"

const milestones = [
  { phase: "10%", description: "Initial launch complete", progress: 100 },
  { phase: "25%", description: "Community growth phase", progress: 80 },
  { phase: "50%", description: "Feature expansion", progress: 45 },
  { phase: "75%", description: "Partnership announcements", progress: 20 },
  { phase: "100%", description: "Final milestone", progress: 0 },
]

export default function Roadmap() {
  return (
    <section className="space-y-12">
      <h2 className="text-4xl font-bold text-center">Road Map</h2>
      <p className="text-center text-sm text-gray-400">Here's the plan</p>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          {milestones.map((milestone) => (
            <div key={milestone.phase} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{milestone.phase}</span>
                <span className="text-gray-400">{milestone.description}</span>
              </div>
              <Progress value={milestone.progress} className="h-2" />
            </div>
          ))}
        </div>

        <div className="relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_1-2-2025_1090_codecats.xyz-UzUHSk073ySfw5pVO93BueoeMn3LNr.jpeg"
            alt="Roadmap illustration"
            width={400}
            height={400}
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  )
}

