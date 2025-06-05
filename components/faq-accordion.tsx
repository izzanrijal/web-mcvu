"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is MCVU?",
    answer:
      "MCVU stands for Makassar Cardiovascular Update. It is a major scientific event organized by the South Sulawesi Branch of the Association of Indonesian Cardiologists (PERKI Cabang Makassar). It includes symposia and workshops aimed at sharing experiences and updating knowledge on cardiovascular diseases.",
  },
  {
    question: "What is the theme for MCVU XXIII 2025?",
    answer:
      "The theme for the 2025 event is \"Emerging Paradigms in Acute Cardiovascular Care: Lifelines in Motion, Excellence in Every Beat\".",
  },
  {
    question: "When will MCVU XXIII 2025 take place?",
    answer:
      "The event is scheduled for July 10-13, 2025. Workshops will be held on Thursday, July 10th, and Friday, July 11th, while the Symposium will take place on Saturday, July 12th, and Sunday, July 13th.",
  },
  {
    question: "Where will the event be held?",
    answer:
      "The main venue for the symposium is the Claro Hotel in Makassar. Workshops will be held at the Claro Hotel and/or the Cardiac Center in Makassar.",
  },
  {
    question: "Who should attend MCVU?",
    answer:
      "The event is intended for cardiologists, general practitioners, nurses, researchers, medical students, and other specialists from all over Indonesia who are interested in cardiovascular healthcare. We expect around 500-800 participants for the symposium and 100-200 for the workshops.",
  },
  {
    question: "What are the main objectives of MCVU?",
    answer:
      "The key objectives are to provide Continuing Medical Education, share experiences and update knowledge, increase the skills of healthcare professionals in managing heart and blood vessel diseases, disseminate information to the public, and serve as a communication hub for medical professionals, especially in Eastern Indonesia.",
  },
  {
    question: "How much does it cost to register?",
    answer:
      "Registration fees vary based on your professional category (Specialist, General Practitioner, Resident, Nurse, Medical Student) and whether you register before or after May 11, 2025. There are separate fees for workshops. For a detailed breakdown, please see the registration table.",
  },
  {
    question: "How can I pay for registration?",
    answer:
      "Payments can be made via bank transfer to the following account:\nBank: Bank Mandiri\nAccount Number: 117-00-1146558-0\nAccount Name: PP PERKI - CABANG MAKASSAR",
  },
  {
    question: "Where can I find more information or contact the organizers?",
    answer:
      "For more details, you can visit the official website at www.perkimakassar.org or the specific event page at perkimakassar.org/mcvu2025. You can also contact the committee via phone/WhatsApp at +082190615 922 or follow the Instagram account @mcvu_2025.",
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
