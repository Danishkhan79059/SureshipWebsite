"use client";

import React from "react";
import Image from "next/image";

const features = [
  {
    icon: "/image/Untitled design.jpg",
    title: "Faster shipping",
    description:
      "Reach your customers on industry leading Turn Around Time across Air and Surface modes",
  },
  {
    icon: "/icons/remittance.svg",
    title: "Free early COD remittance",
    description:
      "Free up your working capital with next day COD remittance at no additional charges",
  },
  {
    icon: "/icons/service.svg",
    title: "Faster customer service",
    description:
      "Directly work with our dedicated service representatives to promptly resolve all your queries",
  },
  {
    icon: "/icons/value-added.svg",
    title: "Value added services",
    description:
      "Verify returns at customer's doorstep and improve saleability for your products",
  },
];

const segments = [
  { icon: "\ud83c\udf0d", title: "D2C brands" },
  { icon: "\ud83c\udfe2", title: "Small & medium enterprises" },
  { icon: "\ud83c\udfe8", title: "Marketplaces" },
  { icon: "\ud83c\udfe6", title: "Banks & financial institutions" },
  { icon: "\ud83d\udcde\ud83d\udcf2\ud83d\udcf7", title: "Social commerce" },
  { icon: "\ud83d\udc64\ud83d\udce6", title: "Personal Shipping" },
];

const featuress = [
  {
    icon: "🧩",
    title: "API integration",
    description:
      "Seamlessly integrate your sales channels (like Website, Marketplaces) with our built in integrations",
  },
  {
    icon: "📊",
    title: "RTO Predictor",
    description:
      "Over 2 Billion shipments have trained our Machine Learning algorithms to call out potential RTOs",
  },
  {
    icon: "✅",
    title: "Address validation",
    description:
      "Increase deliverability using our address intelligence products to validate and standardise",
  },
  {
    icon: "⚙️",
    title: "Non Delivery Management",
    description:
      "Reduce Return-To-Origin using our WhatsApp communication services and business intelligence product suite",
  },
];

const services = [
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
            src="/image/1.jpg" // Place the image in public folder and name it bg.jpg
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
            <span className="text-black">
              India’s eCommerce runs on SureShip
            </span>
          </h1>
          <p className="mt-4  md:text-5xl text-black font-bold text-3xl">
            logistics
          </p>
          <p className="mt-4 text-sm md:text-base text-black">
            Trusted partner for small businesses, large marketplaces and anyone
            else looking to send parcels across the country efficiently
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-black font-medium rounded hover:bg-gray-200 transition-all">
            Sign Up as a Business →
          </button>
        </div>
      </main>

      <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-20">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
            <span className="font-bold">Drive efficiency</span> with scale to
            reach the remotest corners of India
          </h2>
          <div className="h-1 w-20 bg-red-500 mx-auto mb-10" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-left">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="h-12 w-12 mb-4"
                />
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-[#0d0e11] text-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Segments</h2>
          <p className="text-lg text-gray-300 mb-10 relative inline-block">
            we serve
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-red-500" />
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {segments.map(({ icon, title }, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 text-white hover:text-red-400 transition"
              >
                <div className="text-3xl">{icon}</div>
                <div className="text-lg font-semibold">{title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f5f7] px-6 py-16 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-light text-black">
            Grow your brand through our <br />
            <span className="font-bold text-black">technology driven</span>{" "}
            logistics platform
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto mt-2 mb-10" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {featuress.map((item, index) => (
            <div key={index} className="text-center px-4">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg text-black mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          ))}
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
          {services.map((service, index) => (
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
    </>
  );
}
