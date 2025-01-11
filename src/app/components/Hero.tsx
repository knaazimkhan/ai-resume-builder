import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 text-center">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Tailor Your Resume with AI Precision
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Upload your resume, paste a job link, and get a customized resume in seconds. Stand out from the crowd with AI-powered personalization.
        </p>
        <Button size="lg" className="text-lg px-8">
          Try It Now <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}

