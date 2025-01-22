import { LucideIcon } from 'lucide-react'

export interface Users {
  FirstName: string
  LastName: string
  Phone: string
  Email: string
}

export interface TextEditorButton {
  name: string
  icon: LucideIcon
  exeCcommandAction?: string
}
