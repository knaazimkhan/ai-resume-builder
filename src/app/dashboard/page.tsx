import ResumeUploader from "./ResumeUploader"
import ResumeList from "./ResumeList"
import { createClient } from "@/utils/supabase/server"

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: resumes, error } = await supabase
    .from('resumes')
    .select('*')
    .eq('user_id', user?.id)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching resumes:', error.message)
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Your Dashboard</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Upload New Resume</h2>
          <ResumeUploader />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Resumes</h2>
          <ResumeList resumes={resumes || []} />
        </div>
      </div>
    </div>
  )
}

