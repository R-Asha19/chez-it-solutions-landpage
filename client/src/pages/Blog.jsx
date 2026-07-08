import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import { blogPosts } from "../data/content.js";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" });

const Blog = () => (
  <>
    <PageHero
      eyebrow="Blog"
      title="Insights on AI-Powered Growth Marketing"
      subtitle="Practical, no-fluff notes from our team on what's actually moving the needle for our clients."
    />

    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="group flex flex-col rounded-2xl border border-navy-900/8 p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="w-fit rounded-full bg-brand-indigo/10 px-3 py-1 text-[11px] font-semibold text-brand-indigo">
              {post.category}
            </span>
            <h3 className="mt-4 text-base font-semibold text-navy-900 group-hover:text-brand-indigo">
              {post.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-900/55">{post.excerpt}</p>
            <div className="mt-4 flex items-center justify-between text-xs text-navy-900/40">
              <span>
                {formatDate(post.date)} · {post.readTime}
              </span>
              <ArrowRight size={14} className="transition group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  </>
);

export default Blog;
