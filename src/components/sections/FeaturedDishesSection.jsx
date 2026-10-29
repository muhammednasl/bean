import { Link } from "@tanstack/react-router";
import { dishes } from "@/lib/dishes";

export default function FeaturedDishesSection() {
  return (
    <section className="px-4">
      <div className="flex flex-wrap items-end text-center justify-center gap-6">
        <h2 className="font-display text-4xl sm:text-5xl">A Few of Our Favourites</h2>
      </div>
      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {dishes.map((dish, index) => (
          <article key={dish.name} className={index === 1 ? "lg:mt-16" : ""}>
            <img src={dish.img} width={1024} height={1280} loading="lazy" alt={dish.name} className="aspect-[4/5] w-full rounded-[10px] object-cover" />
            <h3 className="mt-5 font-display text-2xl">{dish.name}</h3>
            <p className="mt-1 text-sm opacity-70">{dish.desc}</p>
          </article>
        ))}
      </div>
      <div className="flex justify-center mt-10">
      <Link to="/menu" className="inline-flex justify-center min-h-12 items-center rounded-full  px-7 text-sm bg-gold   text-cream-fg transition-colors hover:bg-ink hover:text-ink-fg focus-ring">View Full Menu</Link>

      </div>
    </section>
  );
}
