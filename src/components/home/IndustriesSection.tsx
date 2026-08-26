import React from 'react';
import { motion } from 'framer-motion';
import {
  FlaskConical,
  GraduationCap,
  School,
  Pill,
  Atom,
  Utensils,
  CheckCircle2,
  HeartPulse,
  Factory,
  Building2,
} from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

const industryIcons: Record<string, React.ElementType> = {
  'Research Laboratories': FlaskConical,
  'Educational Institutions': GraduationCap,
  'Universities': School,
  'Pharmaceutical Companies': Pill,
  'Chemical Industries': Atom,
  'Food Testing Laboratories': Utensils,
  'Quality Control Labs': CheckCircle2,
  'Healthcare Laboratories': HeartPulse,
  'Industrial R&D Centers': Factory,
  'Government Laboratories': Building2,
};

const industries = [
  'Research Laboratories',
  'Educational Institutions',
  'Universities',
  'Pharmaceutical Companies',
  'Chemical Industries',
  'Food Testing Laboratories',
  'Quality Control Labs',
  'Healthcare Laboratories',
  'Industrial R&D Centers',
  'Government Laboratories',
];

export const IndustriesSection: React.FC = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">
            Industries
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Industries We Serve
          </h2>
          <p className="mt-4 text-muted-foreground">
            Reliable glassware solutions trusted across every scientific sector.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((item, idx) => {
            const Icon = industryIcons[item] || FlaskConical;
            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (idx % 5) * 0.06 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-center shadow-soft transition-shadow hover:shadow-elegant"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-ink">{item}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
