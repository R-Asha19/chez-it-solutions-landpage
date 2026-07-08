import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import { blogPosts } from "../data/content.js";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="text-2xl font-bold text-navy-900">Post not found</h1>
        <p className="mt-2 text-sm text-navy-900/55">
          The article you're looking for doesn't exist or may have been moved.
        </p>
        <Link to="/blog" className="btn-primary mt-6 inline-flex">
          Back to Blog
        </Link>
      </section>
    );
  }

  return (
    <>
      <PageHero eyebrow={post.category} title={post.title} />
      <section className="mx-auto max-w-2xl px-6 py-16">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-indigo hover:underline"
        >
          <ArrowLeft size={14} /> Back to Blog
        </Link>
        <p className="mt-6 text-xs text-navy-900/40">
          {formatDate(post.date)} · {post.readTime}
        </p>
        <p className="mt-4 text-base font-medium leading-relaxed text-navy-900/80">
          {post.excerpt}
        </p>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-navy-900/60">
          <p>
            This is placeholder editorial content for the "{post.title}" article. Replace this
            section with the full write-up — our team's real analysis, examples, and
            recommendations for {post.category.toLowerCase()}.
          </p>
          <p>
            Want this turned into a real CMS-backed article your team can publish without
            touching code? We can wire this page up to a MongoDB-backed posts collection with an
            admin editor next.
          </p>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
