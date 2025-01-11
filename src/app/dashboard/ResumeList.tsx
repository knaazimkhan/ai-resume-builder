import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

type Resume = {
  id: string
  file_name: string
  file_url: string
  created_at: string
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
            <a href={resume.file_url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              View Resume
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

