import { Link } from "@tanstack/react-router";
import { Instagram, Facebook } from "lucide-react";
import Logo, { BRAND } from "./Logo";


const links = [
  { to: "/about", label: "About Us" },
  { to: "/menu", label: "Menu" },
  { to: "/location", label: "Our Location" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="mt-24 rounded-[14px] bg-ink px-6 py-14 text-ink-fg sm:px-10 lg:px-14">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm opacity-70">Thoughtful cooking, seasonal ingredients and warm hospitality.</p>
        </div>
        <div>
          <h3 className="eyebrow text-gold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((link) => (
              <li key={link.to}><Link to={link.to} className="opacity-75 hover:opacity-100 focus-ring">{link.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="eyebrow text-gold">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm opacity-75">
            <li>[your-email@restaurant.com]</li>
            <li>[+00 000 000 0000]</li>
          </ul>
        </div>
        <div>
          <h3 className="eyebrow text-gold">Follow Us</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="inline-flex items-center gap-2 opacity-75 hover:opacity-100 focus-ring"><Instagram className="h-4 w-4" />Instagram</a></li>
            <li><a href="#" className="inline-flex items-center gap-2 opacity-75 hover:opacity-100 focus-ring"><Facebook className="h-4 w-4" />Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 border-t border-ink-fg/15 pt-6 text-xs opacity-60">© {new Date().getFullYear()} {BRAND}. All rights reserved.</div>
    </footer>
  );
}
