import { Link } from "@tanstack/react-router";

export default function Btn({ to, children }) {
  return (
    <Link to={to} className="inline-flex min-h-12 items-center rounded-full bg-cream px-7 text-sm font-medium text-cream-fg transition-colors hover:bg-gold focus-ring">
      {children}
    </Link>
  );
}
