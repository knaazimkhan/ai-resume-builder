import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="py-4 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          ResumeAI
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="#features" className="text-muted-foreground hover:text-primary">Features</Link>
          <Link href="#how-it-works" className="text-muted-foreground hover:text-primary">How It Works</Link>
          <Link href="#pricing" className="text-muted-foreground hover:text-primary">Pricing</Link>
          <Link href="#testimonials" className="text-muted-foreground hover:text-primary">Testimonials</Link>
          <Link href="#blog" className="text-muted-foreground hover:text-primary">Blog</Link>
        </nav>
        <Button>Get Started</Button>
      </div>
    </header>
  )
}

