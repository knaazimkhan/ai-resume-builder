import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Upload, Link, Cpu, FileText } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="h-12 w-12 text-primary" />,
      title: "Upload Your Resume",
      description: "Start by uploading your existing resume to our platform."
    },
    {
      icon: <Link className="h-12 w-12 text-primary" />,
      title: "Paste Job Link",
      description: "Insert the LinkedIn URL of the job you're applying for."
    },
    {
      icon: <Cpu className="h-12 w-12 text-primary" />,
      title: "AI Customization",
      description: "Our AI analyzes the job description and tailors your resume."
    },
    {
      icon: <FileText className="h-12 w-12 text-primary" />,
      title: "Get Your Custom Resume",
      description: "Download your perfectly customized resume, ready to impress."
    }
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="mb-4 flex justify-center">{step.icon}</div>
                <CardTitle className="text-center">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

