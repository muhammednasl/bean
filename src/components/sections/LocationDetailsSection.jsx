
import { useState } from "react";
import { MapPin, Phone, ArrowUpRight } from "lucide-react";

const locations = [
  {
    id: "kondotty",
    name: "Kondotty",
    hotel: "Restaurant — Kondotty",
    address: "Add your Kondotty restaurant address",
    phone: "Add your phone number",
    directions: "https://www.google.com/maps/search/?api=1&query=restaurant+Kondotty+Kerala",
  },
  // {
  //   id: "feroke",
  //   name: "Feroke",
  //   hotel: "Restaurant — Feroke",
  //   address: "Add your Feroke restaurant address",
  //   phone: "Add your phone number",
  //   directions: "https://www.google.com/maps/search/?api=1&query=restaurant+Feroke+Kerala",
  // },
];

export default function LocationDetailsSection() {
  const [activeLocation, setActiveLocation] = useState("kondotty");

  const selectedLocation = locations.find(
    (location) => location.id === activeLocation
  );

  return (
    <section
      id="locations"
      className="px-4 py-20 text-[#4b2923] sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="eyebrow text-gold">FIND US</p>

          <h2 className="mt-3 font-display text-4xl sm:text-5xl">
            Our Locations
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 opacity-75 sm:text-base">
            Visit us at either of our locations. We look forward to welcoming
            you.
          </p>
        </div>

        {/* Location tabs */}
        <div className="mb-10 flex flex-wrap gap-3">
          {locations.map((location) => (
            <button
              key={location.id}
              type="button"
              onClick={() => setActiveLocation(location.id)}
              aria-pressed={activeLocation === location.id}
              className={`rounded-xl px-6 py-3 font-display text-lg transition-colors ${
                activeLocation === location.id
                  ? "bg-[#4b2923] text-white"
                  : "border border-[#4b2923]/25 bg-transparent hover:bg-[#4b2923]/5"
              }`}
            >
              {location.name}
            </button>
          ))}
        </div>

        {/* Location details */}
        <div className="grid gap-10 border-t border-[#4b2923]/15 pt-8 sm:grid-cols-2 lg:grid-cols-3">
          <article>
            <h3 className="font-display text-2xl">
              {selectedLocation.hotel}
            </h3>

            <div className="mt-5 flex items-start gap-4">
              <MapPin
                size={22}
                strokeWidth={1.5}
                className="mt-1 shrink-0"
              />

              <p className="text-sm leading-7 sm:text-base">
                {selectedLocation.address}
              </p>
            </div>

            <div className="mt-5 flex items-start gap-4">
              <Phone
                size={21}
                strokeWidth={1.5}
                className="mt-1 shrink-0"
              />

              <a
                href={`tel:${selectedLocation.phone.replace(/[^\d+]/g, "")}`}
                className="text-sm leading-7 hover:underline sm:text-base"
              >
                {selectedLocation.phone}
              </a>
            </div>

            <a
              href={selectedLocation.directions}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#4b2923] px-5 py-3 text-sm font-medium transition hover:bg-[#4b2923] hover:text-white"
            >
              Get Directions
              <ArrowUpRight size={16} />
            </a>
          </article>

          <article className="border-t border-[#4b2923]/15 pt-6 sm:border-t-0 sm:pt-0">
            <h3 className="font-display text-2xl">Opening Hours</h3>

            <p className="mt-5 text-sm leading-7 sm:text-base">
              Add your opening days
              <br />
              Add your opening hours
            </p>
          </article>

          <article className="border-t border-[#4b2923]/15 pt-6 sm:border-t-0 sm:pt-0">
            <h3 className="font-display text-2xl">Visit Us</h3>

            <p className="mt-5 text-sm leading-7 sm:text-base">
              Find us in {selectedLocation.name}, Kerala. Use the directions
              link to navigate to this location.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
