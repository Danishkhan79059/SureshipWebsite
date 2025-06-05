"use client";

import React from "react";
import Image from "next/image";
import { FaPlane, FaShip, FaTruck, FaShippingFast } from "react-icons/fa";

const services = [
  {
    title: "Air Freight",
    description:
      "Import and export services on key trade lanes in partnership with global airlines",
    icon: <FaPlane className="text-4xl text-red-500" />,
  },
  {
    title: "Ocean Freight",
    description:
      "Import and export services on key trade lanes in partnership with global ocean liners",
    icon: <FaShip className="text-4xl text-red-500" />,
  },
  {
    title: "Land Freight",
    description:
      "Dedicated end-to-end trucking along with customs clearance and warehousing support",
    icon: <FaTruck className="text-4xl text-red-500" />,
  },
  {
    title: "Express",
    description:
      "We partner with FedEx and Aramex for air import and export express services",
    icon: <FaShippingFast className="text-4xl text-red-500" />,
  },
];

const servicess = [
  {
    title: "Warehousing",
    description:
      "We store inventory across highly optimised locations across the country to fulfil orders originating across both B2C and B2B channels of sale",
    imageUrl: "/image/e.jpg", // Replace with actual image path
  },
  {
    title: "Cross Border",
    description:
      "Get door-to-door, port-to-port Express Parcel and Freight services from India to 220+ countries. Our strategic partners include FedEx and Aramex",
    imageUrl: "/image/e (1).jpg", // Replace with actual image path
  },
  {
    title: "Data Intelligence",
    description:
      "Power your business with India’s most accurate location intelligence stack. Improve delivery success and gain deep insights about user generated addresses and RTOs",
    imageUrl: "/image/e (2).jpg", // Replace with actual image path
  },
];

export default function page() {
  return (
    <>
      <main className="relative min-h-screen w-full pt-30">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/e (29).jpg" // Place the image in public folder and name it bg.jpg
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0  bg-opacity-50 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col justify-center items-start px-6 md:px-20 py-24 md:py-32 text-white max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            <span className="text-white">
              Delhivery simplifies cross-border shipping to 220+ countries with
              FedEx
            </span>
          </h1>

          <p className="mt-4 text-sm md:text-base text-white">
            Experience customised, multi-modal solutions for global shipping
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-900 text-white font-medium rounded hover:bg-gray-200 transition-all">
            Express parcel
          </button>
        </div>
      </main>

      <section className="bg-white text-black py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="lg:w-1/2 w-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 relative inline-block">
              <span className="border-b-4 border-red-500 pb-1">
                Hassle-free
              </span>
              <br />
              international shipping
            </h2>
            <p className="text-gray-600 mt-6">
              We offer door-to-door, port-to-port express and freight shipping
              services working directly with global airlines and ocean liners.
            </p>
            <p className="text-gray-600 mt-4">
              Our capabilities include an integrated network of express and
              freight solutions coupled with supplementary solutions of
              tech-enabled tracking, an in-house regulatory team for proactive
              clearance support, and a dedicated customer servicing team.
            </p>
            <p className="text-gray-600 mt-4">
              We are FedEx’s strategic partners in India for global express
              shipping services.
            </p>
          </div>

          {/* Image Box */}
          <div className="relative lg:w-1/2 w-full">
            <div className="bg-[#0d0d16] p-4 rounded-lg relative z-10">
              <Image
                src="/image/e (22).jpg"
                alt="Shipping"
                className="rounded-md"
                width={700}
                height={400}
              />
            </div>
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-red-500 z-0 hidden md:block" />
          </div>
        </div>
      </section>

      <section className="bg-[#0d0d16] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-light">
            Our suite of{" "}
            <span className="font-bold">Cross Border Services</span>
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto mt-2 mb-12"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center px-4"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 border-b-4 border-red-500 inline-block text-black">
            Benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Express */}
            <div className="bg-white p-6 rounded-xl shadow">
              <Image
                src="/image/e (25).jpg"
                alt="Express"
                width={400}
                height={300}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-black">Express</h3>
              <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                <li>Pan-India pickup and delivery across 18,700+ pin codes</li>
                <li>Rate and speed calculator for pre shipment information</li>
                <li>Detailed shipment dashboard and booking platform</li>
              </ul>
            </div>

            {/* Air */}
            <div className="bg-white p-6 rounded-xl shadow">
              <Image
                src="/image/e (23).jpg"
                alt="Air"
                width={400}
                height={300}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-black">Air</h3>
              <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                <li>Customs clearance and regulatory document support</li>
                <li>Dedicated no off-load transit</li>
                <li>
                  2-Day TAT from Indian metros and 4-Day from other Indian
                  cities
                </li>
              </ul>
            </div>

            {/* Freight */}
            <div className="bg-white p-6 rounded-xl shadow">
              <Image
                src="/image/e (24).jpg"
                alt="Freight"
                width={400}
                height={300}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-black">Freight</h3>
              <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                <li>
                  Integrated truck-load Freight and Part-Truck-Load services in
                  the SAARC region
                </li>
                <li>12-hour truck placement on booking</li>
                <li>GPS tracking and updated on cargo location</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7fa] px-4 py-16 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light text-black">
            Explore other <span className="font-bold">Services</span>
          </h2>
          <div className="w-14 h-1 bg-red-500 mx-auto mt-2"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
          {servicess.map((service, index) => (
            <div key={index} className="relative">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-52 object-cover rounded-lg"
                />
              </div>

              {/* Red squares */}
              {index === 0 && (
                <div className="absolute top-[35%] -left-2 w-3 h-3 bg-red-500"></div>
              )}
              {index === 2 && (
                <div className="absolute bottom-[35%] -right-2 w-3 h-3 bg-red-500"></div>
              )}

              <div className="mt-4">
                <h3 className="text-lg font-semibold text-black">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm mt-1">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#0c0d11] py-16 px-4 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Get started with SureShip Cross-border Services
          </h2>
          <p className="text-lg mb-6">for your business today</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-black px-6 py-2 rounded font-medium hover:bg-gray-200 transition-all">
              Freight <span className="ml-2">→</span>
            </button>
            <button className="bg-white text-black px-6 py-2 rounded font-medium hover:bg-gray-200 transition-all">
              Express Parcel <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-4 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="relative">
            <span className="absolute -top-2 -left-2 w-4 h-4 bg-red-500" />
            <Image
              src="/image/e (26).jpg"
              alt="Testimonial Image"
              width={400}
              height={300}
              className="rounded"
            />
            <span className="absolute -bottom-4 right-0 w-12 h-12 bg-red-500" />
          </div>

          <div className="md:w-2/3">
            <h2 className="text-2xl font-medium mb-4 text-black">
              What our{" "}
              <span className="font-bold border-b-4 border-red-500 inline-block text-black">
                customers say
              </span>
            </h2>
            <p className="text-4xl text-red-500 leading-none mb-2">“</p>
            <p className="text-gray-600 text-base mb-4">
              We have been using SureShip for more than 3 years and they are
              very innovative and flexible in their solutions, and move rapidly
              in implementing those solutions. SureShip is very customer-focused
              and is very committed to the service. They were able to deploy a
              scalable distribution solution and get it up and running very
              quickly.
            </p>
            <Image src="/image/viz.png" alt="Urbanic" width={120} height={40} />
          </div>
        </div>
      </section>
    </>
  );
}
