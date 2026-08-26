import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-react';
import { company, getWhatsAppUrl } from '@/data/company';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-[var(--color-secondary)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        {/* Company Info */}
        <div>
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/assets/logo.webp"
              alt="GlassMax logo"
              className="h-10 w-10 object-contain transition-transform group-hover:scale-105"
              width={40}
              height={40}
              loading="lazy"
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-2xl font-bold text-ink">
                Glass
                <span className="text-primary">Max</span>
              </span>
              <span className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                NV Scientific Glass Industries
              </span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Premium-quality scientific laboratory glassware manufactured with precision borosilicate glass for laboratories worldwide.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { Icon: Facebook, href: company.social.facebook, label: 'Facebook' },
              { Icon: Instagram, href: company.social.instagram, label: 'Instagram' },
              { Icon: Linkedin, href: company.social.linkedin, label: 'LinkedIn' },
              { Icon: Twitter, href: company.social.twitter, label: 'Twitter' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground/70 transition-all hover:scale-110 hover:border-primary hover:text-primary shadow-xs"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-ink">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/products" className="hover:text-primary transition-colors">
                Products
              </Link>
            </li>
            <li>
              <a href="/#about" className="hover:text-primary transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="/#reviews" className="hover:text-primary transition-colors">
                Reviews
              </a>
            </li>
            <li>
              <a href="/#contact" className="hover:text-primary transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-ink">
            Get in Touch
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={company.phoneHref} className="hover:text-primary transition-colors">
                {company.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-whatsapp)]" />
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                WhatsApp Chat
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={`mailto:${company.email}`} className="hover:text-primary transition-colors">
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{company.address}</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{company.hours}</span>
            </li>
          </ul>
        </div>

        {/* Working Hours & Quick CTA */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-ink">
            Working Hours
          </h4>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {company.hours}
          </p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--color-whatsapp)] px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            Chat Now
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
          © {currentYear} GlassMax™. All rights reserved. Premium Scientific Laboratory Glassware.
        </p>
      </div>
    </footer>
  );
};
