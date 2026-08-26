import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 pt-24 text-center">
      <h1 className="font-display text-6xl font-extrabold text-primary">404</h1>
      <h2 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">
        Page Not Found
      </h2>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105"
      >
        <Home className="h-4 w-4" />
        Return to Homepage
      </Link>
    </div>
  );
};
