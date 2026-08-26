import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

export const QualityCommitmentSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 animate-blob rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 14 }}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-white shadow-elegant"
          >
            <ShieldCheck className="h-8 w-8" />
          </motion.span>
          <span className="mt-6 block text-sm font-bold uppercase tracking-widest text-primary">
            Our Commitment
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Committed to Quality
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Every GlassMax product is manufactured with strict quality standards using premium borosilicate glass to ensure maximum durability, precision, and long-term performance. We are committed to delivering reliable laboratory glassware that professionals can trust.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
