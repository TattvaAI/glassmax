import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { company, getWhatsAppUrl } from '@/data/company';

interface NavItem {
  label: string;
  to: string;
  hash?: string;
}

const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/', hash: 'about' },
  { label: 'Products', to: '/products' },
  { label: 'Reviews', to: '/', hash: 'reviews' },
  { label: 'Contact', to: '/', hash: 'contact' },
];

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, item: NavItem) => {
    setMobileMenuOpen(false);
    if (item.hash) {
      e.preventDefault();
      if (location.pathname !== '/') {
        navigate(`/#${item.hash}`);
      } else {
        const el = document.getElementById(item.hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const isScrolledOrNotHome = scrolled || !isHome;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolledOrNotHome
          ? 'glass shadow-soft border-b border-border/60'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="/assets/logo.webp"
            alt="GlassMax logo"
            className="h-9 w-9 object-contain md:h-11 md:w-11 transition-transform group-hover:scale-105"
            width={44}
            height={44}
          />
          <span className="flex flex-col leading-none">
            <span
              className={`font-display text-xl font-extrabold tracking-tight md:text-2xl transition-colors ${
                isScrolledOrNotHome
                  ? 'text-ink'
                  : 'text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]'
              }`}
            >
              Glass
              <span className={isScrolledOrNotHome ? 'text-primary' : 'text-sky-300'}>
                Max
              </span>
            </span>
            <span
              className={`mt-0.5 text-[9px] font-bold uppercase tracking-[0.18em] md:text-[11px] transition-colors ${
                isScrolledOrNotHome
                  ? 'text-muted-foreground'
                  : 'text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]'
              }`}
            >
              NV Scientific Glass Industries
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.hash ? `/#${item.hash}` : item.to}
              onClick={(e) => handleNavClick(e, item)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-colors hover:bg-accent/60 hover:text-primary ${
                isScrolledOrNotHome
                  ? 'text-ink'
                  : 'text-white drop-shadow-[0_1px_5px_rgba(0,0,0,0.5)]'
              }`}
            >
              {item.label}
            </Link>
          ))}

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-whatsapp hover:bg-whatsapp-hover px-4 py-2 text-sm font-semibold text-white shadow-soft transition-all hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`inline-flex items-center justify-center rounded-lg p-2 md:hidden transition-colors ${
            isScrolledOrNotHome ? 'text-foreground' : 'text-white'
          }`}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden glass border-t border-border/60 md:hidden shadow-lg"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.hash ? `/#${item.hash}` : item.to}
                  onClick={(e) => handleNavClick(e, item)}
                  className="rounded-lg px-4 py-3 text-base font-semibold text-foreground/90 hover:bg-accent/60 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp hover:bg-whatsapp-hover px-4 py-3 text-base font-semibold text-white shadow-sm transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
