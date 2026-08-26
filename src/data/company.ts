import { CompanyInfo } from '@/types';

export const company: CompanyInfo = {
  name: 'GlassMax',
  tagline: 'Precision Glassware for Modern Laboratories',
  phone: '+91 89507 20078',
  phoneHref: 'tel:+918950720078',
  altPhones: ['+91 94168 05314', '+91 98023 06018'],
  whatsapp: '918950720078',
  email: 'nvscientific@rediffmail.com',
  altEmail: 'scientificnv@gmail.com',
  address: '12-D, Pooja Vihar, Ambala Cantt, Haryana 133001, India',
  hours: 'Monday – Saturday: 9:30 AM – 5:30 PM',
  mapCoords: '30.329317,76.877556',
  mapLink: 'https://maps.google.com/?q=30.329317,76.877556',
  mapEmbed: 'https://www.google.com/maps?q=30.329317,76.877556&z=15&output=embed',
  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
    twitter: '#',
  },
};

export function getWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(
    message || 'Hello GlassMax, I would like to enquire about your laboratory glassware.'
  );
  return `https://wa.me/${company.whatsapp}?text=${text}`;
}
