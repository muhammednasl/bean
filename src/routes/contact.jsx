import { createFileRoute } from "@tanstack/react-router";
import Shell from "@/components/layout/Shell";
import PageHeader from "@/components/layout/PageHeader";
import Footer from "@/components/layout/Footer";
import ContactDetailsSection from "@/components/sections/ContactDetailsSection";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Us — Maison" },
    { name: "description", content: "Get in touch with Maison for reservations and enquiries." },
    { property: "og:title", content: "Contact Us — Maison" },
    { property: "og:description", content: "Reservations and enquiries." },
  ] }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Shell>
      <PageHeader eyebrow="Contact Us" title="We'd Love to Hear from You." />
      <ContactDetailsSection />
      <Footer />
    </Shell>
  );
}
