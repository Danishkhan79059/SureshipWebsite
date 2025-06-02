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
            src="/image/e (3).jpg" // Place the image in public folder and name it bg.jpg
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
            <span className="text-white">Stock closer to your customers</span>
          </h1>

          <p className="mt-4 text-sm md:text-base text-white">
            Our distributed pan-India warehousing network helps you manage your
            inventory better
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-black font-medium rounded hover:bg-gray-200 transition-all">
            Get started
          </button>
        </div>
      </main>

      <section className="bg-[#f5f7fa] px-4 py-16 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light text-black">
            How our seamless order fulfilment works
          </h2>
          <div className="w-14 h-1 bg-red-500 mx-auto mt-2"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-4 max-w-7xl mx-auto">
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

      <section className="bg-[#0c0c11] text-white px-4 py-16 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="md:flex gap-10 items-start mb-12">
            <div className="mb-10 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-light">
                The <span className="font-bold">SureShip</span>
                <br />
                <span className="font-bold">Advantage</span>
              </h2>
              <div className="w-10 h-1 bg-red-500 mt-2"></div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 flex-1">
              {advantages.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div>{item.icon}</div>
                  <p className="text-sm md:text-base text-white font-medium leading-relaxed">
                    {item.title}
                  </p>
                </div>
              ))}
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

      <section className="bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 items-center gap-12">
          {/* LEFT: Text content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-light text-black">
              <span className="font-bold">End-to-end warehousing</span> and{" "}
              <br />
              distribution logistics
            </h2>
            <div className="w-10 h-1 bg-red-500 mt-3 mb-6"></div>

            <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">
              SureShip network of fulfilment centres (warehouses) are powered
              by our proprietary software and optimally integrated with our
              shipping network giving you the flexibility to optimise your
              storage cost versus speed to delivery.
            </p>

            <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
              As a result you are now free to focus on growing your business
              without having to worry about varying storage and manpower needs -
              while sureship the experience you always wanted to, for your
              consumers.
            </p>

            <button className="bg-black text-white px-6 py-2 text-sm rounded hover:bg-gray-800 transition">
              Contact Us <span className="ml-2">→</span>
            </button>
          </div>

          {/* RIGHT: Image with black box and red square */}
          <div className="relative w-full h-full flex justify-center items-center">
            {/* Black box behind image */}
            <div className="absolute top-8 right-8 w-full h-full bg-[#0c0c11] rounded-md z-0"></div>

            {/* Red square */}
            <div className="absolute top-4 right-4 w-6 h-6 bg-red-500 z-10"></div>

            {/* Image */}
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
