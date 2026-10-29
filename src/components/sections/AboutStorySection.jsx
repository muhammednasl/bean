import { gallery } from "@/lib/dishes";

const founders = [
  {
    name: "[Founder Name]",
    role: "Founder & Head Chef",
    note: "[Placeholder] One short line about why they started the restaurant.",
    image: "/founders/founder-1.jpg",
  },
  {
    name: "[Founder Name]",
    role: "Co-Founder",
    note: "[Placeholder] One short line about what they love most about the food.",
    image: "/founders/founder-2.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Our Story */}
      <section className="mx-auto grid max-w-5xl items-center gap-12 px-4 py-20 md:grid-cols-2">
        
        <div className="space-y-5">
          <h2 className="text-3xl font-semibold">Our Story</h2>
         
          <div className="space-y-4 text-lg leading-relaxed opacity-85">
            <p>
              [Placeholder] Tell how the restaurant began: who started it, where, and why.
            </p>
            <p>
              [Placeholder] Say what you cook, what you care about, and what guests can
              expect when they visit.
            </p>
          </div>
          <img
          src={gallery[1]}
          alt="Tagliatelle with sage on a cream plate"
          loading="lazy"
          className="aspect-[4/5] w-full rounded-[10px] object-cover"
        />
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[10px] border border-current/10 p-8">
            <h3 className="mb-3 text-2xl font-semibold">Our Vision</h3>
            <p className="text-lg leading-relaxed opacity-85">
              [Placeholder] One sentence about where you want the restaurant to be in the future.
            </p>
          </div>
          <div className="rounded-[10px] border border-current/10 p-8">
            <h3 className="mb-3 text-2xl font-semibold">Our Mission</h3>
            <p className="text-lg leading-relaxed opacity-85">
              [Placeholder] Two or three sentences about what you do every day to serve
              good food and look after your guests.
            </p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="mx-auto max-w-5xl px-4 py-20">
        <h2 className="mb-10 text-center text-3xl font-semibold">Meet the Founders</h2>
        <div className="grid gap-10 sm:grid-cols-2">
          {founders.map((f) => (
            <div key={f.name} className="text-center">
              <img
                src={f.image}
                alt={f.name}
                loading="lazy"
                className="mx-auto mb-5 aspect-square w-full max-w-xs rounded-[10px] object-cover"
              />
              <h3 className="text-xl font-semibold">{f.name}</h3>
              <p className="mb-2 text-sm uppercase tracking-wide opacity-60">{f.role}</p>
              <p className="mx-auto max-w-sm leading-relaxed opacity-85">{f.note}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}