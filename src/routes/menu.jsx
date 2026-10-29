import { createFileRoute } from "@tanstack/react-router";
import Shell from "@/components/layout/Shell";
import PageHeader from "@/components/layout/PageHeader";
import Footer from "@/components/layout/Footer";
import MenuListSection from "@/components/sections/MenuListSection";

export const Route = createFileRoute("/menu")({
  head: () => ({ meta: [
    { title: "Menu — Maison" },
    { name: "description", content: "Our full seasonal menu of starters, mains and desserts." },
    { property: "og:title", content: "Menu — Maison" },
    { property: "og:description", content: "Our full seasonal menu." },
  ] }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <Shell>
      <PageHeader eyebrow="Menu" title="The Seasonal Menu" intro="Our menu changes with the seasons. Replace these placeholders with your dishes and prices." />
      <MenuListSection />
      <Footer />
    </Shell>
  );
}
