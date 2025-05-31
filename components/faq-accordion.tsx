"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Who should attend MCVU XXIII 2025?",
    answer:
      "MCVU XXIII 2025 is designed for medical professionals, researchers, educators, and students across all specialties. It's particularly valuable for physicians, surgeons, specialists, residents, medical students, healthcare administrators, and researchers interested in the latest advances in medical science and practice.",
  },
  {
    question: "What is Makassar Cardiovascular Update (MCVU XXIII 2025)?",
    answer:
      "MCVU XXIII 2025 is Indonesia's premier medical symposium and workshop event, bringing together healthcare professionals, researchers, and experts to advance medical knowledge through collaboration and innovation. The event features a comprehensive symposium with keynote presentations and panel discussions, alongside specialized workshops offering hands-on training.",
  },
  {
    question: "Where in Makassar will the event take place?",
    answer:
      "MCVU XXIII 2025 will be held at the Claro Hotel, Makassar. Further details about the venue will be provided closer to the event date.",
  },
  {
    question: "Where should I stay for the event?",
    answer:
      "We recommend staying at the Claro Hotel, Makassar, the event venue. Information on alternative nearby accommodations and any special rates will be available on the Travel page of our website. We recommend booking early.",
  },
  {
    question: "What is included in the full conference pass?",
    answer:
      "The full conference pass includes access to all symposium sessions, keynote presentations, panel discussions, the exhibition area, networking events, lunch and refreshments during the event, and a certificate of attendance. Workshops require separate registration and payment.",
  },
]

export default function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-b border-mocha-medium/20">
          <AccordionTrigger className="text-left font-semibold text-mocha-dark hover:text-accent-teal transition-colors py-4">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-dark pb-4">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
