
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { Instagram, Facebook } from "lucide-react";

const links = [
  { to: "/about", label: "About Us" },
  { to: "/menu", label: "Menu" },
  { to: "/location", label: "Our Location" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact Us" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const onKey = (event) =>
      event.key === "Escape" && setOpen(false);

    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="flex items-center justify-between gap-4 px-6 py-6 text-ink-fg sm:px-10 lg:px-14">
      <Logo />

      {/* Desktop Navigation */}
      <nav aria-label="Primary" className="hidden lg:block">
        <ul className="flex gap-8 text-sm tracking-wide">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="opacity-80 transition-opacity hover:opacity-100 focus-ring"
                activeProps={{
                  className: "opacity-100 text-gold",
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="grid h-11 w-11 shrink-0 place-items-center lg:hidden focus-ring"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile Full-Screen Menu */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-50 flex flex-col bg-ink px-6 py-6 text-ink-fg"
        >
          {/* Top Header */}
          <div className="flex items-center justify-between">
            <Logo />

            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-11 w-11 place-items-center focus-ring"
              autoFocus
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Centered Navigation Links */}
          <nav
            aria-label="Mobile"
            className="flex flex-1 justify-center mt-10"
          >
         
<ul className="flex flex-col items-center gap-7 text-center">
  {[{ to: "/", label: "Home" }, ...links].map((link) => (
    <li key={link.to}>
      <Link
        to={link.to}
        onClick={() => setOpen(false)}
        activeOptions={{ exact: true }}
        activeProps={{ className: "text-gold" }}
        className="font-display text-3xl transition-colors duration-300 hover:text-gold focus-ring sm:text-4xl"
      >
        {link.label}
      </Link>
    </li>
  ))}

  {/* Follow Us */}
  <li className="mt-20 flex flex-col items-center gap-4">
    <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-ink-fg/60">
      Follow Us
    </h3>

    <div className=" flex items-center justify-center gap-6">
      <a
        href="YOUR_INSTAGRAM_URL"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="opacity-75 transition-all duration-300 hover:scale-110 hover:text-gold hover:opacity-100 focus-ring"
      >
        <Instagram className="h-5 w-5" />
      </a>

      <a
        href="YOUR_FACEBOOK_URL"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="opacity-75 transition-all duration-300 hover:scale-110 hover:text-gold hover:opacity-100 focus-ring"
      >
        <Facebook className="h-5 w-5" />
      </a>
    </div>
  </li>
</ul>

          </nav>
        </div>
      )}
    </header>
  );
}
