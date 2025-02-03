import Link from "next/link"
import { Twitter, Facebook } from "lucide-react"

export default function Header() {
  return (
    <header className="border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tighter">
          {"<CODECATS />"}
        </Link>

        <div className="flex gap-4">
          <Link href="https://twitter.com" className="hover:text-orange-500 transition-colors">
            <Twitter className="w-5 h-5" />
          </Link>
          <Link href="https://facebook.com" className="hover:text-orange-500 transition-colors">
            <Facebook className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </header>
  )
}

