export default function WatchCreation() {
  return (
    <section className="text-center space-y-8">
      <h2 className="text-4xl font-bold">
        Watch <span className="text-orange-500">the Creation</span>
      </h2>
      <p className="text-sm text-gray-400">Check out the video | recreate this collection!</p>

      <div className="relative w-full max-w-2xl mx-auto aspect-video bg-black/50 rounded-xl overflow-hidden border border-white/10">
        {/* Embed your video here */}
      </div>

      <div className="flex items-center justify-center gap-4">
        <span className="text-sm text-gray-400">Uses:</span>
        <img src="/midjourney.png" alt="Midjourney AI Engine" className="h-8" />
        <img src="/python.png" alt="Python" className="h-8" />
      </div>
    </section>
  )
}

