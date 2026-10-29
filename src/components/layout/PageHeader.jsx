import Nav from "./Nav";

export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <section className="overflow-hidden rounded-[14px] bg-ink text-ink-fg">
      <Nav />
      {/* <div className="px-6 pb-16 pt-8 sm:px-10 lg:px-14 lg:pb-24">
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] sm:text-6xl">{title}</h1>
        {intro && <p className="mt-6 max-w-xl opacity-75">{intro}</p>}
      </div> */}
    </section>
  );
}
