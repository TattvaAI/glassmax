export interface IndustryItem {
  name: string;
  icon: string;
  desc?: string;
}

export const industries: IndustryItem[] = [
  { name: 'Research Laboratories', icon: 'FlaskConical' },
  { name: 'Educational Institutions', icon: 'GraduationCap' },
  { name: 'Universities', icon: 'School' },
  { name: 'Pharmaceutical Companies', icon: 'Pill' },
  { name: 'Chemical Industries', icon: 'Atom' },
  { name: 'Food Testing Laboratories', icon: 'Utensils' },
  { name: 'Quality Control Labs', icon: 'CheckCircle2' },
  { name: 'Healthcare Laboratories', icon: 'HeartPulse' },
  { name: 'Industrial R&D Centers', icon: 'Factory' },
  { name: 'Government Laboratories', icon: 'Building2' },
];
