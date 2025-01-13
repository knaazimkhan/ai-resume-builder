import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-10" />
      <div className="container mx-auto text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Land Your Dream Job?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
          Start customizing your resume with AI precision and increase your chances of getting that interview.
        </p>
        <Button size="lg" variant="secondary" className="text-lg px-8">
          Get Started Now
        </Button>
      </div>
    </section>
  )
}

