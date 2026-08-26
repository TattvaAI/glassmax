import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MessageSquarePlus, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { WriteReviewModal } from '@/components/ui/WriteReviewModal';
import { initialReviews } from '@/data/reviews';
import { Review } from '@/types';

export const TestimonialsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(reviews.length / cardsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const handleAddReview = (newReview: Review) => {
    setReviews((prev) => [newReview, ...prev]);
    setCurrentPage(0);
  };

  const visibleReviews = reviews.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  );

  return (
    <section id="reviews" className="bg-[var(--color-secondary)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">
            Testimonials
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Customer Reviews
          </h2>
          <p className="mt-4 text-muted-foreground">
            Trusted by laboratories, institutions, and professionals across India.
          </p>
        </Reveal>

        {/* Carousel Container */}
        <div className="relative mt-14">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visibleReviews.map((review, idx) => (
                <motion.div
                  key={`${review.name}-${idx}-${currentPage}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex flex-col justify-between rounded-3xl border border-border bg-card p-7 shadow-soft"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex text-amber-400">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-400" />
                        ))}
                      </div>
                      <Quote className="h-6 w-6 text-primary/20" />
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                      "{review.text}"
                    </p>
                  </div>
                  <div className="mt-6 border-t border-border pt-4">
                    <p className="font-display font-bold text-ink">{review.name}</p>
                    {review.location && (
                      <p className="text-xs text-muted-foreground">{review.location}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  aria-label={`Go to review page ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentPage ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
                }
                aria-label="Previous reviews"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary shadow-xs"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => setCurrentPage((prev) => (prev + 1) % totalPages)}
                aria-label="Next reviews"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary shadow-xs"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <button
                onClick={() => setIsModalOpen(true)}
                className="ml-2 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105"
              >
                <MessageSquarePlus className="h-4 w-4" />
                Write a Review
              </button>
            </div>
          </div>
        </div>
      </div>

      <WriteReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddReview={handleAddReview}
      />
    </section>
  );
};
