import { Link } from "@tanstack/react-router";
import Nav from "../layout/Nav";
import Btn from "../layout/Btn";
import { heroImg } from "@/lib/dishes";

export default function HeroSection() {
  return (
    <section className="overflow-hidden rounded-[14px] bg-ink text-ink-fg">
      <Nav />
      <div className="grid items-center gap-10 px-6 pb-10 pt-6 sm:px-10 md:pb-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14 lg:px-14 lg:pb-14">
        <div className="max-w-xl">
          <p className="eyebrow text-gold">A Taste Worth Remembering</p>
          <h1 className="mt-5 font-display text-[2.6rem] leading-[1.02] sm:text-6xl xl:text-7xl">Where Every Flavour Tells a Story.</h1>
          <p className="mt-6 max-w-md text-base opacity-75">Discover thoughtfully crafted dishes, exceptional ingredients, and a dining experience made to be remembered.</p>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Btn to="/menu">Explore Our Menu</Btn>
            <Link to="/about" className="border-b border-ink-fg/40 pb-1 text-sm transition-colors hover:border-gold hover:text-gold focus-ring">Discover Our Story</Link>
          </div>
        </div>
        <div className="ml-auto w-[82%] sm:w-[70%] md:w-[62%] lg:w-full">
          <img src={heroImg} width={1200} height={1440} alt="Sliced seared duck breast with cherry jus and greens on a dark plate" className="aspect-[4/5] w-full rounded-[10px] object-cover object-center lg:aspect-[5/6]" />
        </div>
      </div>
    </section>
  );
}
