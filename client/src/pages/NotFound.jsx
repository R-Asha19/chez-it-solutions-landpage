import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <section className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-6 text-center">
    <p className="text-sm font-semibold text-brand-indigo">404</p>
    <h1 className="mt-2 text-2xl font-bold text-navy-900">Page not found</h1>
    <p className="mt-2 text-sm text-navy-900/55">
      The page you're looking for doesn't exist or has moved.
    </p>
    <Link to="/" className="btn-primary mt-6 inline-flex">
      Back to Home
    </Link>
  </section>
);

export default NotFound;
