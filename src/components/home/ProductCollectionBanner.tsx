import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

export const ProductCollectionBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-glow py-20 md:py-28 text-white">
      {/* Radial overlay and glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_80%_20%,oklch(1_0_0/0.18),transparent)]" />
      <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 animate-blob rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="text-sm font-bold uppercase tracking-widest text-white/80">
            Product Range
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Explore Our Product Collection
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            Browse our complete collection of scientific laboratory glassware manufactured with precision and designed for laboratories across research, education, pharmaceutical, and industrial sectors.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-soft transition-transform hover:scale-105"
            >
              View Complete Product Catalogue
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="/assets/GlassMax-Product-Catalogue-2026-27.pdf"
              download="GlassMax-Product-Catalogue-2026-27.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:scale-105 hover:bg-white/20"
            >
              <Download className="h-4 w-4" />
              Download Product Catalogue
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
