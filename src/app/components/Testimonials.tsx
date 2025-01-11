import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      content: "ResumeAI helped me land my dream job at a top tech company. The customized resume highlighted my skills perfectly!",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    {
      name: "Michael Chen",
      role: "Marketing Specialist",
      content: "I was skeptical at first, but the results speak for themselves. I got more interviews in one week than I did in a month before using ResumeAI.",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    {
      name: "Emily Rodriguez",
      role: "Data Analyst",
      content: "The AI-powered customization is impressive. It saved me hours of tweaking my resume for each application. Highly recommended!",
      avatar: "/placeholder.svg?height=40&width=40"
    }
  ]

  return (
    <section id="testimonials" className="py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

