'use client'

import { usePathname } from 'next/navigation'
import { FileText, Plus } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar"
import Image from 'next/image'
import { UserNav } from "./UserNav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader className="border-b px-4 py-2">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/career-lens-7PExGpxWTAC3f3K9Tv0ycL2rJ44B2U.png" 
              alt="CareerLens Logo" 
              width={140} 
              height={30}
              className="h-8 w-auto"
            />
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={pathname === '/dashboard'}
                >
                  <a href="/dashboard">
                    <Plus className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={pathname === '/dashboard/my-resumes'}
                >
                  <a href="/dashboard/my-resumes">
                    <FileText className="mr-2 h-4 w-4" />
                    <span>My Resumes</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <div className="flex min-h-screen flex-col">
            <header className="border-b">
              <div className="flex h-16 items-center px-4 gap-4">
                <SidebarTrigger />
                <div className="flex-1" />
                <UserNav />
              </div>
            </header>
            <main className="flex-1 p-6">
              {children}
            </main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

