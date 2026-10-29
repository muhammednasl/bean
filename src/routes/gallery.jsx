import { createFileRoute } from "@tanstack/react-router";
import Shell from "@/components/layout/Shell";
import PageHeader from "@/components/layout/PageHeader";
import Footer from "@/components/layout/Footer";
import GalleryGridSection from "@/components/sections/GalleryGridSection";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [
    { title: "Gallery — Maison" },
    { name: "description", content: "Photographs of our food and dining room." },
    { property: "og:title", content: "Gallery — Maison" },
    { property: "og:description", content: "Photographs of our food and dining room." },
  ] }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <Shell>
      <PageHeader eyebrow="Gallery" title="From Our Kitchen." />
      <GalleryGridSection />
      <Footer />
    </Shell>
  );
}
