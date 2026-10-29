import { createFileRoute } from "@tanstack/react-router";
import Shell from "@/components/layout/Shell";
import PageHeader from "@/components/layout/PageHeader";
import Footer from "@/components/layout/Footer";
import LocationDetailsSection from "@/components/sections/LocationDetailsSection";

export const Route = createFileRoute("/location")({
  head: () => ({ meta: [
    { title: "Our Location — Maison" },
    { name: "description", content: "Address, opening hours and directions to Maison." },
    { property: "og:title", content: "Our Location — Maison" },
    { property: "og:description", content: "Find us: address, hours and directions." },
  ] }),
  component: LocationPage,
});

function LocationPage() {
  return (
    <Shell>
      <PageHeader eyebrow="Our Location" title="Find Your Way to Our Table." />
      <LocationDetailsSection />
      <Footer />
    </Shell>
  );
}
