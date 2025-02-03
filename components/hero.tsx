import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold">
          The Next Batch <br />
          are on <span className="text-orange-500">SALE!</span>
        </h1>
        <p className="text-gray-400">A new batch of cats are now available! Get them while you can...</p>
        <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
          MINT
        </Button>
      </div>

      <div className="relative">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_1-2-2025_1090_codecats.xyz-UzUHSk073ySfw5pVO93BueoeMn3LNr.jpeg"
          alt="Cat carrier illustration"
          width={500}
          height={500}
          className="w-full max-w-md mx-auto"
        />
      </div>
    </div>
  )
}

