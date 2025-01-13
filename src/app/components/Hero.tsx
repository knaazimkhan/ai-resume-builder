import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Tailor Your Resume with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E640DB] to-[#1FD9FE]">
              AI Precision
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Upload your resume, paste a job link, and get a customized resume in seconds. Stand out from the crowd with AI-powered personalization.
          </p>
          <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90">
            Try It Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-goumbik-590016.jpg-RZYhixDXxPtgEBdzpp7TSlPl4sfngw.jpeg"
            alt="AI Resume Analysis"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

