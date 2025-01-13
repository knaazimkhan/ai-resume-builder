import ResumeList from "../ResumeList"
import { createClient } from '@/utils/supabase/client'

type Resume = {
    id: string
    file_name: string
    file_url: string
    created_at: string
    job_url?: string
    is_optimized?: boolean
}

const data: Resume[] = [
    {
        id: '1',
        file_name: 'resume1.pdf',
        file_url: 'https://example.com/resume1.pdf',
        created_at: '2024-01-01',
        job_url: 'https://example.com/job1',
        is_optimized: true
    },
    {
        id: '2',
        file_name: 'resume2.pdf',
        file_url: 'https://example.com/resume2.pdf',
        created_at: '2024-01-02',
        is_optimized: false
    },
    {
        id: '3',
        file_name: 'resume3.pdf',
        file_url: 'https://example.com/resume3.pdf',
        created_at: '2024-01-03',
        is_optimized: true
    }
]

export default async function MyResumesPage() {
    const supabase = createClient()

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
        <div>
            <h1 className="text-3xl font-bold mb-8">My Resumes</h1>
            <div className="grid gap-8">
                <ResumeList resumes={resumes || data} />
            </div>
        </div>
    )
}

