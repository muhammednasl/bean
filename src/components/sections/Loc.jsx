
import { useEffect, useState } from "react";
import { MapPin, Phone, ArrowUpRight } from "lucide-react";

const locations = [
  {
    id: "kondotty",
    name: "Kondotty",
    description:
      "Visit our Kondotty location for a memorable dining experience, welcoming hospitality, and delicious food. We look forward to welcoming you, your family, and your friends.",
    address: "Add your Kondotty address, Kerala",
    phone: "+91 00000 00000",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=restaurant+Kondotty+Kerala",
    images: [
      "/bean.png",
      "/bean-2.png",
      "/bean-3.png",
    ],
  },
  // {
  //   id: "feroke",
  //   name: "Feroke",
  //   description:
  //     "Discover our Feroke location, where great food and warm hospitality come together. Whether you are joining us for a casual meal or a special occasion, we are ready to welcome you.",
  //   address: "Add your Feroke address, Kerala",
  //   phone: "+91 00000 00000",
  //   mapsUrl:
  //     "https://www.google.com/maps/search/?api=1&query=restaurant+Feroke+Kerala",
  //   images: [
  //     "/images/feroke-1.jpg",
  //     "/images/feroke-2.jpg",
  //     "/images/feroke-3.jpg",
  //   ],
  // },
];

export default function FeaturedLocationsSection() {
  const [activeLocation, setActiveLocation] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

  const location = locations[activeLocation];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((current) => (current + 1) % location.images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [activeLocation, location.images.length]);

  function selectLocation(index) {
    setActiveLocation(index);
    setActiveImage(0);
  }

  return (
    <section className="px-4 py-8 sm:px-8 lg:px-11 lg:py-11">
      <div className="mx-auto max-w-[1600px] rounded-[24px] text-[#f5ead5] px-6 py-12 bg-[#4b2923] sm:px-10 sm:py-14 lg:px-16 lg:py-14">
        {/* Heading */}
        <h2 className="font-display text-4xl sm:text-5xl">
          Our locations
        </h2>

        {/* Location tabs */}
        <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3 sm:gap-x-12 lg:gap-x-16">
          {locations.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => selectLocation(index)}
              aria-pressed={activeLocation === index}
              className={`rounded-full px-6 py-3 text- font-display text-lg transition-all duration-300 sm:text-xl ${
                activeLocation === index
                  ? "bg-[#e9c49f] text-[#4b2923]"
                  : "bg-transparent  hover:bg-[#4b2923]/5 hover:text-[#4b2923]"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Image and details */}
        <div
          key={location.id}
          className="mt-10 grid items-center gap-7 md:grid-cols-[minmax(280px,0.8fr)_1.2fr] lg:mt-14 lg:gap-8"
        >
          {/* Image carousel */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-[#e9d9bf]">
            {location.images.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`${location.name} restaurant ${index + 1}`}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                  activeImage === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* Image indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {location.images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  aria-label={`Show photo ${index + 1}`}
                  aria-pressed={activeImage === index}
                  onClick={() => setActiveImage(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeImage === index
                      ? "w-7 bg-[#f5ead5]"
                      : "w-2.5 bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Location information */}
          <div className="min-w-0 md:pl-0 lg:pl-1">
            <p className="max-w-2xl text-sm leading-7 sm:text-base sm:leading-[1.7]">
              {location.description}
            </p>

            <div className="mt-6 flex items-start gap-4">
              <MapPin size={22} strokeWidth={1.5} className="mt-1 shrink-0" />
              <p className="text-sm leading-7 sm:text-base">
                {location.address}
              </p>
            </div>

            <div className="mt-4 flex items-start gap-4">
              <Phone size={21} strokeWidth={1.5} className="mt-1 shrink-0" />
              <a
                href={`tel:${location.phone.replace(/[^\d+]/g, "")}`}
                className="text-sm leading-7 hover:underline sm:text-base"
              >
                {location.phone}
              </a>
            </div>

            <a
              href={location.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#4b2923] px-5 py-3 text-sm font-medium transition hover:bg-[#4b2923] hover:text-[#f5ead5]"
            >
              Get Directions
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
