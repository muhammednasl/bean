import { gallery } from "@/lib/dishes";

const alts = ["Seared duck breast with cherries", "Tagliatelle with sage", "Grilled sea bass with lemon", "Chocolate tart with cream"];

export default function GalleryGridSection() {
  return (
    <section className="grid gap-4 px-1 py-16 sm:grid-cols-2">
      {gallery.map((image, index) => (
        <img key={index} src={image} alt={alts[index]} loading="lazy" className="aspect-[4/5] w-full rounded-[10px] object-cover" />
      ))}
    </section>
  );
}
