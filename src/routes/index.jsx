import { createFileRoute } from "@tanstack/react-router";
import Shell from "@/components/layout/Shell";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StorySection from "@/components/sections/StorySection";
import FeaturedDishesSection from "@/components/sections/FeaturedDishesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import Loc from "@/components/sections/Loc"
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison — Where Every Flavour Tells a Story" },
      { name: "description", content: "Thoughtfully crafted dishes, exceptional ingredients and a dining experience made to be remembered." },
      { property: "og:title", content: "Maison — Where Every Flavour Tells a Story" },
      { property: "og:description", content: "Thoughtfully crafted dishes and exceptional ingredients." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Shell>
      <HeroSection />
      <StorySection />
      <FeaturedDishesSection />
      <Loc />
      <TestimonialsSection />
      <Footer />
    </Shell>
  );
}
