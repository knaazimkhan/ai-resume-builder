import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import * as z from 'zod'

const resumeSchema = z.object({
  file_name: z.string(),
  file_url: z.string().url(),
  job_url: z.string().url(),
})

export async function POST(req: Request) {
  const supabase = await createClient()
  
  try {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    const validatedData = resumeSchema.parse(body)

    const { error: dbError } = await supabase
      .from('resumes')
      .insert({
        user_id: user.id,
        file_name: validatedData.file_name,
        file_url: validatedData.file_url,
        job_url: validatedData.job_url,
        is_optimized: true
      })

    if (dbError) throw dbError

    return NextResponse.json({ message: 'Resume created successfully' }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

