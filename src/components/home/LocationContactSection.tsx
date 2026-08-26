import React from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Compass,
  Zap,
} from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { company, getWhatsAppUrl } from '@/data/company';

export const LocationContactSection: React.FC = () => {
  const contactCards = [
    {
      Icon: Phone,
      label: 'Phone',
      value: company.phone,
      href: company.phoneHref,
    },
    {
      Icon: Phone,
      label: 'Additional Numbers',
      value: company.altPhones.join(' · '),
      href: `tel:${company.altPhones[0].replace(/\s/g, '')}`,
    },
    {
      Icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Chat with us',
      href: getWhatsAppUrl(),
    },
    {
      Icon: Mail,
      label: 'Email',
      value: company.email,
      href: `mailto:${company.email}`,
    },
    {
      Icon: Mail,
      label: 'Secondary Email',
      value: company.altEmail,
      href: `mailto:${company.altEmail}`,
    },
    {
      Icon: MapPin,
      label: 'Office Address',
      value: company.address,
      href: company.mapLink,
    },
    {
      Icon: Clock,
      label: 'Working Hours',
      value: company.hours,
    },
  ];

  return (
    <>
      {/* Location / Map Section */}
      <section className="bg-[var(--color-secondary)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              Location
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
              Visit Our Location
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 overflow-hidden rounded-3xl border border-border shadow-elegant">
              <iframe
                title="GlassMax location"
                src={company.mapEmbed}
                className="h-[380px] w-full md:h-[440px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-6 text-center">
            <a
              href={company.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105"
            >
              <Compass className="h-4 w-4" />
              Get Directions
            </a>
          </Reveal>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact details list */}
            <Reveal>
              <span className="text-sm font-bold uppercase tracking-widest text-primary">
                Contact
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
                Get in Touch
              </h2>
              <p className="mt-4 flex items-center gap-2 text-muted-foreground">
                <Zap className="h-4 w-4 text-primary shrink-0" />
                Quick response guaranteed — we typically reply within a few hours.
              </p>

              <div className="mt-8 space-y-4">
                {contactCards.map(({ Icon, label, value, href }) => {
                  const cardInner = (
                    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                          {label}
                        </p>
                        <p className="mt-1 font-semibold text-ink">{value}</p>
                      </div>
                    </div>
                  );

                  return href ? (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      {cardInner}
                    </a>
                  ) : (
                    <div key={label}>{cardInner}</div>
                  );
                })}
              </div>
            </Reveal>

            {/* Quick Order / Enquiry Action Card */}
            <Reveal delay={0.12}>
              <div className="glass flex h-full flex-col justify-center rounded-3xl p-8 shadow-elegant md:p-10">
                <h3 className="font-display text-2xl font-bold text-ink">
                  Ready to order or enquire?
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Reach out through your preferred channel and our team will assist you with product selection, specifications, and bulk pricing.
                </p>

                <div className="mt-8 flex flex-col gap-3">
                  <a
                    href={company.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105"
                  >
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp hover:bg-whatsapp-hover px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:scale-105"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Chat
                  </a>
                  <a
                    href={`mailto:${company.email}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-105 hover:border-primary hover:text-primary"
                  >
                    <Mail className="h-4 w-4" />
                    Email Us
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};
