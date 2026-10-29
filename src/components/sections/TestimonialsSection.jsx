const quotes = [
  "Every course felt considered — quiet, generous and full of flavour.",
  "The kind of evening you keep talking about the next morning.",
  "Warm service, beautiful plates, and the best tart I've had in years.",
];

export default function TestimonialsSection() {
  return (
    <section className="px-4 py-24">
      <h2 className="text-center font-display text-4xl sm:text-5xl">Words from Our Guests</h2>
      <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-gold/40">
        {quotes.map((quote) => (
          <blockquote key={quote} className="md:px-10">
            <span className="font-display text-5xl leading-none text-gold">“</span>
            <p className="font-display text-2xl italic leading-snug">{quote}</p>
            <footer className="mt-4 eyebrow opacity-60">Guest review — placeholder</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
