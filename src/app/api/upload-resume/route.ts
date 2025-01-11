import { NextResponse } from 'next/server'
import { getServerSession } from "next-auth/next"
import { PrismaClient } from '@prisma/client'
import { writeFile } from 'fs/promises'
import path from 'path'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  const session = await getServerSession()

  if (!session || !session.user) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  const formData = await request.formData()
  const file = formData.get('file') as File

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
  }

  const buffer = Buffer.from(await file.arrayBuffer())
  const filename = Date.now() + '_' + file.name.replace(/\s/g, '_')
  const filepath = path.join(process.cwd(), 'public/uploads', filename)

  try {
    await writeFile(filepath, buffer)
    console.log('File saved to', filepath)

    const resume = await prisma.resume.create({
      data: {
        userId: session.user.id,
        fileName: file.name,
        fileUrl: `/uploads/${filename}`,
      }
    })

    return NextResponse.json({ message: 'File uploaded successfully', resume }, { status: 201 })
  } catch (error) {
    console.error('Error saving file:', error)
    return NextResponse.json({ error: 'Error uploading file' }, { status: 500 })
  }
}

