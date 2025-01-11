import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BlogSection() {
  const blogPosts = [
    {
      title: "5 Tips for a Standout Resume",
      description: "Learn how to make your resume shine with these expert tips.",
      date: "May 15, 2023"
    },
    {
      title: "The Future of Job Applications: AI and Automation",
      description: "Discover how AI is revolutionizing the job application process.",
      date: "June 2, 2023"
    },
    {
      title: "Mastering the Art of the Cover Letter",
      description: "Craft compelling cover letters that complement your AI-optimized resume.",
      date: "June 20, 2023"
    }
  ]

  return (
    <section id="blog" className="py-20 px-4 md:px-6 lg:px-8 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {blogPosts.map((post, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.description}</p>
                <Link href="#" className="text-primary hover:underline">Read more</Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button variant="outline">View All Posts</Button>
        </div>
      </div>
    </section>
  )
}

