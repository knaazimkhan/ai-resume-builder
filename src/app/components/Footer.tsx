import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-8 px-4 md:px-6 lg:px-8 bg-muted">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link href="/" className="text-xl font-bold">
            ResumeAI
          </Link>
        </div>
        <nav className="flex flex-wrap justify-center space-x-4">
          <Link href="#features" className="text-muted-foreground hover:text-primary">Features</Link>
          <Link href="#how-it-works" className="text-muted-foreground hover:text-primary">How It Works</Link>
          <Link href="#pricing" className="text-muted-foreground hover:text-primary">Pricing</Link>
          <Link href="#testimonials" className="text-muted-foreground hover:text-primary">Testimonials</Link>
          <Link href="#blog" className="text-muted-foreground hover:text-primary">Blog</Link>
          <Link href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</Link>
          <Link href="#" className="text-muted-foreground hover:text-primary">Terms of Service</Link>
          <Link href="#" className="text-muted-foreground hover:text-primary">Contact</Link>
        </nav>
        <div className="mt-4 md:mt-0 text-sm text-muted-foreground">
          © {new Date().getFullYear()} ResumeAI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

