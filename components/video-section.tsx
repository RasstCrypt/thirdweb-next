import { Play } from "lucide-react"

export default function VideoSection() {
  return (
    <section className="text-center space-y-12">
      <div className="relative w-full max-w-4xl mx-auto aspect-video bg-black/50 rounded-xl overflow-hidden border border-white/10">
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
            <Play className="w-8 h-8 text-white" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-4xl font-bold">10,000 Generated NFTs</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Each with unique attributes and properties. Each NFT has been generated from over 400 unique layers. All of
          the cats are waiting to be unlocked and let out of their carrier. Be one to join our community to be notified
          when new groups of cats are dropped.
        </p>
      </div>
    </section>
  )
}

