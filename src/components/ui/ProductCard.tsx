import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { Product } from '@/types';
import { company, getWhatsAppUrl } from '@/data/company';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  const whatsappMessage = `Hello GlassMax, I'm interested in the ${product.name}. Please share details and pricing.`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -8 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow hover:shadow-elegant"
    >
      <Link to={`/products/${product.slug}`} className="flex flex-1 flex-col">
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[var(--color-secondary)] to-accent/40">
          <span className="absolute left-3 top-3 z-10 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
            {product.category}
          </span>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-lg font-bold text-ink group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {product.short}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
            View Details
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
      <div className="grid grid-cols-2 gap-3 border-t border-border px-5 pb-5 pt-4">
        <a
          href={getWhatsAppUrl(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp hover:bg-whatsapp-hover px-4 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] shadow-sm"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <a
          href={company.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] shadow-sm"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
      </div>
    </motion.div>
  );
};
