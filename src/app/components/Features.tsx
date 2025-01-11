import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Zap, Target, Clock, ThumbsUp } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "AI-Powered Customization",
      description: "Our advanced AI tailors your resume to match job requirements perfectly."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Job-Specific Optimization",
      description: "Automatically highlight relevant skills and experiences for each application."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Time-Saving Efficiency",
      description: "Create a customized resume in seconds, not hours."
    },
    {
      icon: <ThumbsUp className="h-8 w-8 text-primary" />,
      title: "Increased Interview Chances",
      description: "Stand out to recruiters with a perfectly tailored resume."
    }
  ]

  return (
    <section id="features" className="py-20 px-4 md:px-6 lg:px-8 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose ResumeAI?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

