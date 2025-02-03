"use client"

import { ThirdwebProvider } from "@thirdweb-dev/react"
import { Ethereum } from "@thirdweb-dev/chains"
import Header from "@/components/header"
import Hero from "@/components/hero"
import VideoSection from "@/components/video-section"
import WatchCreation from "@/components/watch-creation"
import Roadmap from "@/components/roadmap"
import Team from "@/components/team"
import UpdatesForm from "@/components/updates-form"

// This is the chainId your dApp will work on.
const activeChain = Ethereum

export default function Home() {
  return (
    <ThirdwebProvider activeChain={activeChain} clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}>
      <main className="min-h-screen bg-[#050c24] text-white relative overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-orange-500/30 to-red-500/30 blur-xl" />
        <div className="absolute bottom-40 left-20 w-40 h-40 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 blur-xl" />

        <Header />

        <div className="container mx-auto px-4 space-y-24 py-12">
          <Hero />
          <VideoSection />
          <WatchCreation />
          <Roadmap />
          <Team />
          <UpdatesForm />
        </div>

        <footer className="py-6 text-center text-sm text-gray-400">©2025 CodeCats</footer>
      </main>
    </ThirdwebProvider>
  )
}

