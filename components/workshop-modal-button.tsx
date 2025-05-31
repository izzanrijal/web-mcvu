"use client"

import { ChevronRight } from "lucide-react"

interface WorkshopModalButtonProps {
  onOpenModal: () => void;
}

export default function WorkshopModalButton({ onOpenModal }: WorkshopModalButtonProps) {
  return (
    <button
      onClick={onOpenModal}
      className="inline-flex items-center text-accent-teal font-mono uppercase font-bold hover:underline"
      data-workshop-modal-button // This attribute might still be useful for testing or other scripts
    >
      EXPLORE ALL WORKSHOPS
      <ChevronRight className="h-4 w-4 ml-1" />
    </button>
  )
}
