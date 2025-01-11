import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "How does ResumeAI customize my resume?",
      answer: "ResumeAI uses advanced natural language processing to analyze both your resume and the job description. It then highlights your most relevant skills and experiences, adjusts the language to match the job requirements, and optimizes the overall structure for maximum impact."
    },
    {
      question: "Is my personal information safe?",
      answer: "Yes, we take data privacy very seriously. All your information is encrypted and securely stored. We do not share your personal data with any third parties. You can review our privacy policy for more details."
    },
    {
      question: "How many times can I customize my resume?",
      answer: "The number of customizations depends on your plan. Our Basic plan offers 5 customizations per month, while our Pro plan provides unlimited customizations. Check our pricing section for more details on each plan."
    },
    {
      question: "Can I use ResumeAI for different industries?",
      answer: "ResumeAI is designed to work across various industries. Our AI adapts to the specific requirements and terminology of each industry, ensuring your resume is tailored appropriately regardless of the field."
    },
    {
      question: "How long does it take to get my customized resume?",
      answer: "The customization process typically takes only a few seconds. Once you've uploaded your resume and provided the job link, our AI quickly analyzes and optimizes your resume, delivering the customized version almost instantly."
    }
  ]

  return (
    <section id="faq" className="py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

