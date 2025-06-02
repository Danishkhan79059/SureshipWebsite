import React from "react";
import Image from "next/image";

const cards = [
  {
    date: "March, 2025",
    title: "SureShip Acquires Controlling Stake in Ecom Express",
    image: "/images/ecom.png",
  },
  {
    date: "March, 2025",
    title:
      "SureShip Appoints Ex-PepperTap Co-Founder, Milind Sharma, as Head of Rapid Commerce and D2C Brands",
    image: "/images/milind.png",
  },
  {
    date: "March, 2025",
    title:
      "SureShip Named India’s Most-Preferred 3PL Partner for D2C Brands for the Second Consecutive Year",
    image: "/images/3pl.png",
  },
  {
    date: "February, 2025",
    title:
      "Vani Venkatesh, former Global CEO of Airtel to join SureShip as Chief Business Officer",
    image: "/images/vani.png",
  },
   {
    date: "March, 2025",
    title: "SureShip Acquires Controlling Stake in Ecom Express",
    image: "/images/ecom.png",
  },
  {
    date: "March, 2025",
    title:
      "SureShip Appoints Ex-PepperTap Co-Founder, Milind Sharma, as Head of Rapid Commerce and D2C Brands",
    image: "/images/milind.png",
  },
  {
    date: "March, 2025",
    title:
      "SureShip Named India’s Most-Preferred 3PL Partner for D2C Brands for the Second Consecutive Year",
    image: "/images/3pl.png",
  },
  {
    date: "February, 2025",
    title:
      "Vani Venkatesh, former Global CEO of Airtel to join SureShip as Chief Business Officer",
    image: "/images/vani.png",
  },
];

export default function Page() {
  return (
    <>
      <section className="relative h-screen w-full font-sans">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/surehsip.jpg"
            alt="Background image"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col justify-center items-start h-full text-white px-6 md:px-20 lg:px-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
              Press Release
            </h1>
            <p className="text-lg md:text-xl font-light text-gray-200">
              Stay updated with the latest announcements, news, and
              developments. Discover how we’re transforming the industry with
              every step we take.
            </p>
            <button className="mt-6 px-6 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <div className="px-4 py-8 sm:px-6 lg:px-16 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow border p-4 flex flex-col justify-between"
            >
              <div className="relative h-40 w-full mb-4">
                <Image
                  src={card.image}
                  alt="card image"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-xs text-gray-500 uppercase mb-2">
                {card.date}
              </p>
              <h3 className="text-base font-semibold text-gray-900 mb-4">
                {card.title}
              </h3>
              <a
                href="#"
                className="text-red-600 font-medium text-sm flex items-center"
              >
                Read more
                <span className="ml-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
