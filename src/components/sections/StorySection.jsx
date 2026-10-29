import { Link } from "@tanstack/react-router";

export default function StorySection() {
  return (
    <section className="mx-auto grid max-w-5xl gap-6 px-4 py-24 md:grid-cols-2 md:gap-16">
      <h2 className="font-display text-4xl leading-tight sm:text-5xl">Our Story, Served with Passion.</h2>
      <div>
        <p className="text-lg leading-relaxed opacity-80">We cook with the seasons, sourcing from growers we know by name. Our kitchen favours restraint and care, letting exceptional ingredients speak. And every guest is welcomed as though they were at our own table.</p>
        <Link to="/about" className="mt-6 inline-block border-b border-cream-fg/40 pb-1 text-sm hover:border-gold hover:text-gold focus-ring">Read Our Story</Link>
      </div>
    </section>
  );
}
