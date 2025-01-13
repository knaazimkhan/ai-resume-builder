import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Upload, Link, Cpu, FileText } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="h-12 w-12 text-primary" />,
      title: "Upload Your Resume",
      description: "Start by uploading your existing resume to our platform.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-polina-zimmerman-3746957.jpg-WxpSMsaYr5FNk5tReyKXLyzbzF6ytW.jpeg"
    },
    {
      icon: <Link className="h-12 w-12 text-secondary" />,
      title: "Paste Job Link",
      description: "Insert the LinkedIn URL of the job you're applying for.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-olly-3760072.jpg-F8NOoFJTw5Snp1dIFs3GwrYY411KW6.jpeg"
    },
    {
      icon: <Cpu className="h-12 w-12 text-accent" />,
      title: "AI Customization",
      description: "Our AI analyzes the job description and tailors your resume.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-tima-miroshnichenko-5439152.jpg-cyHbLenNYDjEMpuVzHRrUvJY70jGEo.jpeg"
    },
    {
      icon: <FileText className="h-12 w-12 text-primary" />,
      title: "Get Your Custom Resume",
      description: "Download your perfectly customized resume, ready to impress.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-fauxels-3184465.jpg-Ka4acoSbjRBCcJllP6779lh8Za2xf3.jpeg"
    }
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 md:px-6 lg:px-8 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover opacity-10"
                />
              </div>
              <CardHeader className="relative">
                <div className="mb-4 flex justify-center">{step.icon}</div>
                <CardTitle className="text-center">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="text-center">{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

