import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { heroSlides } from '@/data/hero';
import { getWhatsAppUrl } from '@/data/company';

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background Slides */}
      <AnimatePresence mode="sync">
        <motion.img
          key={currentSlide}
          src={heroSlides[currentSlide].image}
          alt={heroSlides[currentSlide].alt}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.4 },
            scale: { duration: 6, ease: 'linear' },
          }}
          className="absolute inset-0 h-full w-full object-cover"
          width={1792}
          height={1024}
        />
      </AnimatePresence>

      {/* Dark & Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/65 to-ink/45" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_40%,transparent,oklch(0.18_0.04_258/0.4))]" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur shadow-sm"
        >
          Premium Borosilicate Laboratory Glassware
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl drop-shadow-md"
        >
          Precision Glassware for Modern Laboratories
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg drop-shadow-sm"
        >
          GlassMax provides premium-quality laboratory glassware designed for research laboratories, educational institutions, pharmaceutical companies, industrial testing laboratories, and scientific organizations. Our products are manufactured with precision to ensure durability, chemical resistance, and reliable performance for professional laboratory applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34 }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-all hover:scale-105 hover:shadow-glow"
          >
            View Products
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-whatsapp hover:bg-whatsapp-hover px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* Slide Indicators */}
        <div className="mt-12 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-10 bg-primary' : 'w-5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
