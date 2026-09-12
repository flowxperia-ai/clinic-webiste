import {
  HeartPulse,
  Brain,
  Bone,
  Ribbon,
  Stethoscope,
  HeartHandshake,
  Baby,
  Sparkles,
  ScanLine,
  Siren,
  Scissors,
  Activity,
  Leaf,
  Pill,
  BedDouble,
} from 'lucide-react'

export const iconMap = {
  HeartPulse,
  Brain,
  Bone,
  Ribbon,
  Stethoscope,
  HeartHandshake,
  Baby,
  Sparkles,
  ScanLine,
  Siren,
  Scissors,
  Activity,
  Leaf,
  Pill,
  BedDouble,
}

export function getIcon(name) {
  return iconMap[name] || Stethoscope
}
