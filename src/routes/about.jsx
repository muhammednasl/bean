import { createFileRoute } from "@tanstack/react-router";
import Shell from "@/components/layout/Shell";
import PageHeader from "@/components/layout/PageHeader";
import Footer from "@/components/layout/Footer";
import AboutStorySection from "@/components/sections/AboutStorySection";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Us — Maison" },
    { name: "description", content: "The story, philosophy and people behind Maison." },
    { property: "og:title", content: "About Us — Maison" },
    { property: "og:description", content: "The story and philosophy behind our kitchen." },
  ] }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Shell>
      <PageHeader eyebrow="About Us" title="A kitchen built on care, season and hospitality." />
      <AboutStorySection />
      <Footer />
    </Shell>
  );
}
