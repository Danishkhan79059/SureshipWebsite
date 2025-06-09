"use client";

import React from "react";
import Image from "next/image";
import {
  FaWarehouse,
  FaChartLine,
  FaShippingFast,
  FaBoxes,
} from "react-icons/fa";

const services = [
  {
    title: "Express Parcel",
    description:
      "Send shipments across India for parcels across categories including heavy goods. Get value added services like RTO reduction tools, door-step inspection and tracking",
    imageUrl: "/image/e (4).jpg", // Replace with actual image path
  },
  {
    title: "Part Truckload Freight (PTL)",
    description:
      "Join one of the largest Express PTL networks in India. Get door-to-door and hub-to-hub delivery with multi-modal freight and appointments via a DIY Client Dashboard",
    imageUrl: "/image/e (5).jpg", // Replace with actual image path
  },
  {
    title: "Full Truckload Freight (FTL)",
    description:
      "Move high-volume and high-capacity orders faster with our full Truckload Freight logistics and work with our network of professional Truckload partners as well as our own Fleet",
    imageUrl: "/image/e (6).jpg", // Replace with actual image path
  },
];

const advantages = [
  {
    icon: <FaWarehouse className="text-red-500 text-3xl" />,
    title:
      "Multi-tenant warehouses with 7 Mn+ square feet of warehousing infrastructure",
  },
  {
    icon: <FaChartLine className="text-red-500 text-3xl" />,
    title:
      "Proprietary technology that lowers cost of fulfillment as you scale",
  },
  {
    icon: <FaShippingFast className="text-red-500 text-3xl" />,
    title:
      "Seamless integration with Express Parcel, Freight and Cross-Border shipping",
  },
  {
    icon: <FaBoxes className="text-red-500 text-3xl" />,
    title:
      "End-to-end visibility over inventory, order management and supply chain",
  },
];

const servicess = [
  {
    title: "Inventory control",
    description:
      "Our system driven workflows are built to cater to specific types of inventory at scale to ensure effective and efficient fulfilment of goods no matter what industry you belong to",
    imageUrl: "/image/e (11).jpg", // Replace with actual image path
  },
  {
    title: "In-house management system",
    description:
      "SureShip integration of the warehouse management system with all major partners and demand channels helps with faster TAT and enables multi-location and multi-tenant warehousing",
    imageUrl: "/image/e (8).jpg", // Replace with actual image path
  },
  {
    title: "Cost advantage",
    description:
      "SureShip offers integrated solution for distribution to enterprises. This is done by utilising our freight and warehousing infrastructure that facilitates quicker offline distribution with cost efficiency",
    imageUrl: "/image/e (9).jpg", // Replace with actual image path
  },
  {
    title: "Technology differentiation",
    description:
      "While SureShip warehousing systems allow for efficient maintenance of inventory, our data intelligence platforms help minimise the risks of shipment delays and damages",
    imageUrl: "/image/e (10).jpg", // Replace with actual image path
  },
];

export default function page() {
  return (
    <>
      <main className="relative min-h-screen w-full pt-30">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/e (64).jpg" // Place the image in public folder and name it bg.jpg
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
              Distribute inventory across regions to reduce delivery time and
              costs
            </span>
          </h1>

          <p className="mt-4 text-sm md:text-base text-white">
            Keep inventory near customers to reduce delivery time, increase
            satisfaction, and optimize logistics operations effectively
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="mt-6 px-6 py-3 bg-blue-900 text-white font-medium rounded hover:bg-gray-200 transition-all"
          >
            Get started
          </button>
        </div>
      </main>

      <section className="bg-gradient-to-b from-white to-blue-50 px-4 py-16 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900">
            How our seamless order fulfilment works
          </h2>
          <div className="w-14 h-1 bg-blue-600 mx-auto mt-2"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-4 max-w-7xl mx-auto">
          {servicess.map((service, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-52 object-cover rounded-lg"
                />
              </div>
              {index === 0 && (
                <div className="absolute top-[35%] -left-2 w-3 h-3 bg-blue-600"></div>
              )}
              {index === 2 && (
                <div className="absolute bottom-[35%] -right-2 w-3 h-3 bg-blue-600"></div>
              )}
              <div className="mt-4 text-center">
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

      {/* Section: SureShip Advantage */}
      <section className="bg-blue-900 text-white px-4 py-16 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="md:flex gap-10 items-start mb-12">
            <div className="mb-10 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-light">
                The <span className="font-bold text-white">SureShip</span>
                <br />
                <span className="font-bold text-white">Advantage</span>
              </h2>
              <div className="w-10 h-1 bg-white mt-2"></div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 flex-1">
              {advantages.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="text-blue-300">{item.icon}</div>
                  <p className="text-sm md:text-base font-medium leading-relaxed">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section: Other Services */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-16 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900">
            Explore other <span className="font-bold">Services</span>
          </h2>
          <div className="w-14 h-1 bg-blue-600 mx-auto mt-2"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-52 object-cover rounded-lg"
                />
              </div>
              {index === 0 && (
                <div className="absolute top-[35%] -left-2 w-3 h-3 bg-blue-600"></div>
              )}
              {index === 2 && (
                <div className="absolute bottom-[35%] -right-2 w-3 h-3 bg-blue-600"></div>
              )}
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

      {/* Section: Warehousing and Distribution */}
      <section className="bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-light text-blue-900">
              <span className="font-bold">End-to-end warehousing</span> and
              <br /> distribution logistics
            </h2>
            <div className="w-10 h-1 bg-blue-600 mt-3 mb-6"></div>

            <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">
              SureShip’s network of fulfilment centres (warehouses) are powered
              by proprietary software and deeply integrated with our shipping
              network, optimizing cost and delivery speed.
            </p>

            <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
              You can focus on growing your business, while SureShip handles
              your dynamic storage and manpower needs with consistency and
              efficiency.
            </p>

            <button
              onClick={() => (window.location.href = "/support")}
              className="bg-blue-900 text-white px-6 py-2 text-sm rounded hover:bg-blue-800 transition"
            >
              Contact Us <span className="ml-2">→</span>
            </button>
          </div>

          <div className="relative w-full h-full flex justify-center items-center">
            <div className="absolute top-8 right-8 w-full h-full bg-blue-100 rounded-md z-0"></div>
            <div className="absolute top-4 right-4 w-6 h-6 bg-blue-600 z-10"></div>
            <div className="relative z-20 rounded-md overflow-hidden max-w-[90%]">
              <Image
                src="/image/e (12).jpg"
                alt="Warehouse"
                className="rounded-md object-cover"
                width={700}
                height={500}
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
