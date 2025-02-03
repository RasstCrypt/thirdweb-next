"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function UpdatesForm() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Signing up:", email)
  }

  return (
    <section className="text-center space-y-8">
      <h2 className="text-2xl font-bold">UPDATES</h2>
      <p className="text-gray-400">Don't miss out on NFT News!</p>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2">
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/5 border-white/10"
        />
        <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
          Sign Up
        </Button>
      </form>
    </section>
  )
}

