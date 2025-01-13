'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { useDropzone } from 'react-dropzone'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Upload, File, Link, X } from 'lucide-react'
import { PageHeader } from '@/app/dashboard/PageHeader'
import { createClient } from '@/utils/supabase/client'

const formSchema = z.object({
  jobUrl: z.string().url({ message: "Please enter a valid URL" }),
})

type FormData = z.infer<typeof formSchema>

export default function DashboardPage() {
  const [file, setFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange'
  })

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
    },
    maxFiles: 1,
  })

  const removeFile = () => {
    setFile(null)
  }

  const onSubmit = async (data: FormData) => {
    if (!file) return

    setIsLoading(true)
    try {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/login')
        return
      }

      // Upload original resume
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `${user.id}/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('resumes')
        .upload(filePath, file)

      if (uploadError) throw uploadError

      const { data: { publicUrl } } = supabase.storage
        .from('resumes')
        .getPublicUrl(filePath)

      if (!publicUrl) throw new Error('Error getting public URL')

      // Create resume record with job URL
      const { error: dbError } = await supabase
        .from('resumes')
        .insert({
          user_id: user.id,
          file_name: file.name,
          file_url: publicUrl,
          job_url: data.jobUrl,
          is_optimized: true
        })

      if (dbError) throw dbError

      router.push('/dashboard/my-resumes')
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <PageHeader 
        title="Create Optimized Resume" 
        description="Upload your resume and provide a job link to get an AI-optimized version tailored for the position."
      />
      <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6">
          <CardTitle className="text-2xl">Let AI Enhance Your Resume</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="resume" className="text-lg font-semibold">Upload Your Resume (PDF)</Label>
              <div 
                {...getRootProps()} 
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                  isDragActive ? 'border-green-500 bg-green-50' : file ? 'border-green-500' : 'border-gray-300 hover:border-purple-500'
                }`}
              >
                <input {...getInputProps()} />
                {file ? (
                  <div className="flex items-center justify-center space-x-2">
                    <File className="text-green-500" />
                    <span>{file.name}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        removeFile()
                      }}
                    >
                      <X className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                ) : (
                  <div>
                    <Upload className="mx-auto text-gray-400 mb-2" size={32} />
                    <p className="text-gray-600">Drag & drop your resume here, or click to select file</p>
                  </div>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="jobUrl" className="text-lg font-semibold">LinkedIn Job URL</Label>
              <div className="flex items-center space-x-2">
                <Link className="text-purple-500" size={20} />
                <Input 
                  id="jobUrl" 
                  type="url" 
                  placeholder="https://www.linkedin.com/jobs/view/..."
                  {...register('jobUrl')}
                  className="flex-grow"
                />
              </div>
              {errors.jobUrl && (
                <p className="text-red-500 text-sm mt-1">{errors.jobUrl.message}</p>
              )}
            </div>
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg text-lg font-semibold transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading || !isValid || !file}
            >
              {isLoading ? 'Creating...' : 'Create Optimized Resume'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

