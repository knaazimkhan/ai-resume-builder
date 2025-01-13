import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

type Resume = {
  id: string
  file_name: string
  file_url: string
  created_at: string
  job_url?: string
  is_optimized?: boolean
}

type ResumeListProps = {
  resumes: Resume[]
}

export default function ResumeList({ resumes }: ResumeListProps) {
  return (
    <div className="space-y-4">
      {resumes.map((resume) => (
        <Card key={resume.id}>
          <CardHeader>
            <CardTitle>{resume.file_name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Uploaded on: {new Date(resume.created_at).toLocaleDateString()}</p>
            {resume.job_url && (
              <p className="mt-2">
                <span className="text-sm text-muted-foreground">Job URL: </span>
                <a href={resume.job_url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  View Job Post
                </a>
              </p>
            )}
            <div className="mt-4 flex items-center justify-between">
              <a href={resume.file_url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                View Resume
              </a>
              {resume.is_optimized && (
                <span className="text-sm text-primary">AI Optimized</span>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

