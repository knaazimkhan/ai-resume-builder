'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function LiveDemo() {
  const [resume, setResume] = useState('')
  const [jobLink, setJobLink] = useState('')
  const [customizedResume, setCustomizedResume] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate AI processing
    setTimeout(() => {
      setCustomizedResume(`This is a customized version of your resume, tailored for the job at ${jobLink}. 
      
Your original resume:
${resume}

Has been optimized to highlight relevant skills and experiences for this specific job opportunity.`)
    }, 2000)
  }

  return (
    <section id="live-demo" className="py-20 px-4 md:px-6 lg:px-8 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Try It Now</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Input</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="resume" className="block text-sm font-medium mb-1">Your Resume</label>
                  <Textarea 
                    id="resume" 
                    value={resume} 
                    onChange={(e) => setResume(e.target.value)}
                    placeholder="Paste your resume here"
                    className="h-40"
                  />
                </div>
                <div>
                  <label htmlFor="jobLink" className="block text-sm font-medium mb-1">Job Link</label>
                  <Input 
                    id="jobLink" 
                    type="url" 
                    value={jobLink} 
                    onChange={(e) => setJobLink(e.target.value)}
                    placeholder="https://www.linkedin.com/jobs/view/..."
                  />
                </div>
                <Button type="submit">Customize Resume</Button>
              </form>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Output</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea 
                value={customizedResume} 
                readOnly 
                placeholder="Your customized resume will appear here"
                className="h-full min-h-[300px]"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

