import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, ZoomIn, MessageCircle, Phone } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { ProductCard } from '@/components/ui/ProductCard';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { company, getWhatsAppUrl } from '@/data/company';

export const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? getProductBySlug(productId) : undefined;
  const relatedProducts = productId ? getRelatedProducts(productId, 3) : [];

  const [isHovered, setIsHovered] = useState(false);
  const [zoomCoords, setZoomCoords] = useState({ x: 50, y: 50 });
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 pt-24 text-center">
        <h1 className="font-display text-3xl font-bold text-ink">Product not found</h1>
        <p className="mt-3 text-muted-foreground">
          The product you're looking for doesn't exist.
        </p>
        <Link
          to="/products"
          className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = imageContainerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setZoomCoords({ x, y });
    }
  };

  const whatsappMessage = `Hello GlassMax, I'm interested in the ${product.name}. Please share details and pricing.`;
  const imageViews = [product.image, product.image, product.image];

  return (
    <div>
      {/* Product Detail Top Section */}
      <div className="bg-gradient-to-b from-[var(--color-secondary)] to-background pt-24 md:pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="mt-6 grid gap-10 pb-16 lg:grid-cols-2">
            {/* Left Column: Interactive Image Viewer */}
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <div
                  ref={imageContainerRef}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onMouseMove={handleMouseMove}
                  className="group relative aspect-square cursor-zoom-in overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-[var(--color-secondary)] shadow-elegant"
                >
                  <img
                    src={imageViews[activeImageIndex]}
                    alt={product.name}
                    className="h-full w-full object-contain p-10 transition-opacity duration-200"
                    style={{ opacity: isHovered ? 0 : 1 }}
                  />
                  <div
                    className="absolute inset-0 bg-no-repeat pointer-events-none"
                    style={{
                      backgroundImage: `url(${imageViews[activeImageIndex]})`,
                      backgroundSize: '200%',
                      backgroundPosition: `${zoomCoords.x}% ${zoomCoords.y}%`,
                      opacity: isHovered ? 1 : 0,
                      transition: 'opacity 0.2s',
                    }}
                  />
                  <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-card/80 px-3 py-1.5 text-xs font-semibold text-foreground backdrop-blur shadow-xs">
                    <ZoomIn className="h-3.5 w-3.5" />
                    Hover to zoom
                  </span>
                </div>

                {/* Thumbnails */}
                <div className="mt-4 flex gap-3">
                  {imageViews.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      aria-label={`View angle ${idx + 1}`}
                      className={`h-20 w-20 overflow-hidden rounded-xl border bg-card p-2 transition-all ${
                        activeImageIndex === idx
                          ? 'border-primary ring-2 ring-primary/30'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} view ${idx + 1}`}
                        className="h-full w-full object-contain"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Right Column: Details & Specs */}
            <Reveal delay={0.1}>
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {product.category}
              </span>
              <h1 className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl">
                {product.name}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={getWhatsAppUrl(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-whatsapp hover:bg-whatsapp-hover px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:scale-105"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Enquiry
                </a>
                <a
                  href={company.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </div>

              {/* Key Features */}
              <div className="mt-8">
                <h2 className="font-display text-lg font-bold text-ink">Key Features</h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {product.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2.5 text-sm text-foreground/90"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Specifications */}
              <div className="mt-8">
                <h2 className="font-display text-lg font-bold text-ink">
                  Technical Specifications
                </h2>
                <div className="mt-4 overflow-hidden rounded-2xl border border-border">
                  {product.specs.map((spec, idx) => (
                    <div
                      key={spec.label}
                      className={`flex justify-between gap-4 px-5 py-3.5 text-sm ${
                        idx % 2 === 0 ? 'bg-card' : 'bg-[var(--color-secondary)]'
                      }`}
                    >
                      <span className="font-medium text-muted-foreground">
                        {spec.label}
                      </span>
                      <span className="text-right font-semibold text-ink">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="mt-8">
                <h2 className="font-display text-lg font-bold text-ink">Applications</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <span
                      key={app}
                      className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/85 shadow-xs"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Suitable Industries */}
              <div className="mt-8">
                <h2 className="font-display text-lg font-bold text-ink">
                  Suitable Industries
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.industries.map((ind) => (
                    <span
                      key={ind}
                      className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="bg-[var(--color-secondary)] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              Related Products
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((p, idx) => (
                <ProductCard key={p.slug} product={p} index={idx} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
