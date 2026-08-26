import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Sparkles,
  Cog,
  Eye,
  Maximize2,
  Award,
  Users,
  Package,
  Headphones,
  BadgePercent,
} from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

const featureIcons: Record<string, React.ElementType> = {
  'Premium Borosilicate Glass': ShieldCheck,
  'High Chemical Resistance': Sparkles,
  'Precision Manufacturing': Cog,
  'Excellent Transparency': Eye,
  'Leak-Proof Joints': Maximize2,
  'Laboratory Grade Quality': Award,
  'Trusted by Professionals': Users,
  'Secure Packaging': Package,
  'Fast Customer Support': Headphones,
  'Affordable Pricing': BadgePercent,
};

const features = [
  { title: 'Premium Borosilicate Glass' },
  { title: 'High Chemical Resistance' },
  { title: 'Precision Manufacturing' },
  { title: 'Excellent Transparency' },
  { title: 'Leak-Proof Joints' },
  { title: 'Laboratory Grade Quality' },
  { title: 'Trusted by Professionals' },
  { title: 'Secure Packaging' },
  { title: 'Fast Customer Support' },
  { title: 'Affordable Pricing' },
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="bg-[var(--color-secondary)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">
            Why GlassMax
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Why Choose GlassMax
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every detail engineered for performance, safety, and long-term reliability.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {features.map((item, idx) => {
            const Icon = featureIcons[item.title] || ShieldCheck;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (idx % 5) * 0.06 }}
                whileHover={{ y: -8 }}
                className="group flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-soft transition-shadow hover:shadow-elegant"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-white shadow-soft transition-transform group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-ink">{item.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
