import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Award } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { statsData } from '@/data/stats';

export const AboutStatsSection: React.FC = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-background py-20 md:py-28">
      {/* Background Glow Blobs */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 animate-blob rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 animate-blob rounded-full bg-primary-glow/10 blur-3xl" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              About Us
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
              N.V. Scientific Glass Industries
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Established in 1976 in Ambala, Haryana, N.V. Scientific Glass Industries has nearly 50 years of expertise in the manufacturing of high-quality laboratory and scientific glassware. Over the decades, we have built a strong reputation for delivering precision-engineered glassware that meets the diverse requirements of chemical industries, educational institutions, research laboratories, environmental organizations, and industrial testing facilities.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We specialize in manufacturing premium-quality laboratory and scientific glassware using high-grade borosilicate glass. Our products are trusted by chemical industries, colleges, universities, environmental laboratories, research and development organizations, and other scientific institutions across the country.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our company is recognized for its exceptional workmanship, uncompromising quality standards, competitive pricing, and prompt customer service. Every product is manufactured with precision to ensure reliability and accuracy. Our state-of-the-art manufacturing facility is equipped with advanced machinery, modern equipment, and stringent quality control systems.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              As part of our continued growth and commitment to innovation, we are proud to introduce our new brand,{' '}
              <span className="font-semibold text-ink">GlassMax</span>, which represents our dedication to superior quality, precision craftsmanship, and excellence in laboratory glassware manufacturing. N.V. Scientific Glass Industries remains committed to delivering world-class scientific glassware solutions with the highest standards of quality, reliability, and customer satisfaction.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { Icon: ShieldCheck, title: 'Borosilicate 3.3' },
              { Icon: Sparkles, title: 'Chemical Resistant' },
              { Icon: Award, title: 'Lab-Grade Quality' },
            ].map(({ Icon, title }) => (
              <div
                key={title}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-soft"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-ink">{title}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Stats Grid */}
        <Reveal delay={0.15}>
          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {statsData.map((stat, idx) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -6 }}
                className={`glass rounded-2xl p-7 text-center shadow-soft ${
                  idx % 2 === 1 ? 'sm:mt-8' : ''
                }`}
              >
                <div className="font-display text-4xl font-extrabold text-gradient">
                  <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
