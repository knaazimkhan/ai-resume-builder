import { Card, CardContent } from "@/components/ui/card"

interface PageHeaderProps {
  title: string
  description: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <Card className="mb-8">
      <CardContent className="pt-6">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

