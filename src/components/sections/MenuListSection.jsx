import { dishes } from "@/lib/dishes";

const sections = [
  { title: "To Begin", items: ["[Starter dish]", "[Starter dish]", "[Starter dish]"] },
  { title: "Mains", items: dishes.slice(0, 2).map((dish) => dish.name).concat("[Main dish]") },
  { title: "To Finish", items: [dishes[2]?.name ?? "[Dessert]", "[Dessert]"] },
];

export default function MenuListSection() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20">
      {sections.map((section) => (
        <div key={section.title} className="mb-14">
          <h2 className="eyebrow text-gold">{section.title}</h2>
          <ul className="mt-6 divide-y divide-cream-fg/10">
            {section.items.map((item, index) => (
              <li key={index} className="py-4 font-display text-2xl">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
