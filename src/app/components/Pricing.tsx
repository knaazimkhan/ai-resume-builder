import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Check } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$9.99",
      features: [
        "5 resume customizations per month",
        "Basic AI optimization",
        "24/7 customer support"
      ]
    },
    {
      name: "Pro",
      price: "$19.99",
      features: [
        "Unlimited resume customizations",
        "Advanced AI optimization",
        "Priority customer support",
        "Cover letter customization"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "All Pro features",
        "Dedicated account manager",
        "Custom AI model training",
        "API access"
      ]
    }
  ]

  return (
    <section id="pricing" className="py-20 px-4 md:px-6 lg:px-8 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={index === 1 ? "border-primary" : ""}>
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold mb-4">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">{index === 2 ? "Contact Sales" : "Get Started"}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

