
import { Link } from "@tanstack/react-router";
import logo from "../../assets/beanlogo.png";

export const BRAND = "Maison Placeholder";

export default function Logo() {
  return (
    <Link
      to="/"
      className="focus-ring inline-flex items-center"
      aria-label={`${BRAND} home`}
    >
      <img
        src={logo}
        alt={BRAND}
        className="h-25 w-auto object-contain "
      />
    </Link>
  );
}
