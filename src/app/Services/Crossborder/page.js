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
              SureShip simplifies cross-border shipping to 220+ countries with
              FedEx
            </span>
          </h1>

          <p className="mt-4 text-sm md:text-base text-white">
            Experience customised, multi-modal solutions for global shipping
          </p>
          <button   onClick={() => (window.location.href = "/track")} className="mt-6 px-6 py-3 bg-blue-900 text-white font-medium rounded  transition-all cursor-pointer">
            Express parcel
          </button>
        </div>
      </main>

      <section className="bg-white text-[#0b1f4a] py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 w-full">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-snug">
              <span className="relative inline-block">
                <span className="text-blue-600">Hassle-free</span>
                <br /> international shipping
              </span>
            </h2>
            <p className="text-gray-600 mt-4 text-base leading-relaxed">
              We offer door-to-door, port-to-port express and freight shipping
              services working directly with global airlines and ocean liners.
            </p>
            <p className="text-gray-600 mt-4 text-base leading-relaxed">
              Our capabilities include an integrated network of express and
              freight solutions coupled with supplementary solutions of
              tech-enabled tracking, an in-house regulatory team for proactive
              clearance support, and a dedicated customer servicing team.
            </p>
            <p className="text-gray-600 mt-4 text-base leading-relaxed">
              We are FedEx’s strategic partners in India for global express
              shipping services.
            </p>
          </div>
          <div className="lg:w-1/2 w-full relative">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-2 rounded-xl shadow-lg">
              <Image
                src="/image/e (22).jpg"
                alt="Shipping"
                className="rounded-md"
                width={700}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-950 to-indigo-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">
            Our suite of{" "}
            <span className="text-blue-300">Cross Border Services</span>
          </h2>
          <div className="w-16 h-1 bg-blue-400 mx-auto mt-3 mb-12"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-blue-800 bg-opacity-40 p-6 rounded-xl text-center shadow hover:scale-105 transition-transform"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-blue-100">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5faff] py-12 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-blue-900 border-b-4 border-blue-500 inline-block">
            Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Express", "Air", "Freight"].map((type, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-xl p-6">
                <Image
                  src={`/image/e (${25 - i}).jpg`}
                  alt={type}
                  width={400}
                  height={300}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  {type}
                </h3>
                <ul className="text-gray-700 text-sm space-y-2 list-disc list-inside">
                  {type === "Express" && (
                    <>
                      <li>Pan-India pickup & 18,700+ pin codes</li>
                      <li>Rate/speed calculator</li>
                      <li>Detailed dashboard & booking</li>
                    </>
                  )}
                  {type === "Air" && (
                    <>
                      <li>Clearance & document support</li>
                      <li>No off-load transit</li>
                      <li>2-4 Day TAT from metros & cities</li>
                    </>
                  )}
                  {type === "Freight" && (
                    <>
                      <li>Truck-load/PTL in SAARC region</li>
                      <li>12-hour truck placement</li>
                      <li>GPS tracking updates</li>
                    </>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-blue-900">
            Explore other <span className="font-bold">Services</span>
          </h2>
          <div className="w-14 h-1 bg-blue-500 mx-auto mt-2"></div>
        </div>
        <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
          {servicess.map((service, index) => (
            <div key={index} className="relative group">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-52 object-cover transform group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-blue-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-950 to-indigo-900 py-16 px-4 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">
            Get started with SureShip Cross-border Services
          </h2>
          <p className="text-lg mb-6">for your business today</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-blue-900 px-6 py-2 rounded font-medium hover:bg-blue-100 transition-all">
              Freight <span className="ml-2">→</span>
            </button>
            <button className="bg-white text-blue-900 px-6 py-2 rounded font-medium hover:bg-blue-100 transition-all">
              Express Parcel <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-12 px-4 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="relative">
            <span className="absolute -top-2 -left-2 w-4 h-4 bg-blue-500" />
            <Image
              src="/image/e (26).jpg"
              alt="Testimonial"
              width={400}
              height={300}
              className="rounded"
            />
            <span className="absolute -bottom-4 right-0 w-10 h-10 bg-blue-500" />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-medium mb-4 text-blue-900">
              What our{" "}
              <span className="font-bold border-b-4 border-blue-500 inline-block">
                customers say
              </span>
            </h2>
            <p className="text-4xl text-blue-500 leading-none mb-2">“</p>
            <p className="text-gray-700 text-base mb-4">
              We’ve been using SureShip for over 3 years—they are innovative,
              flexible, and fast at delivering scalable solutions.
            </p>
            <Image src="/image/viz.png" alt="Urbanic" width={120} height={40} />
          </div>
        </div>
      </section>
    </>
  );
}
