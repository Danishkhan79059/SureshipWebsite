"use client";

import React from "react";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaClock,
  FaClipboardCheck,
  FaRupeeSign,
  FaTruck,
} from "react-icons/fa";
// const features = [
//   {
//     text: "Lowest Out of Delivery Area (ODA) pincode",
//     imageUrl: "/image/",
//   },
//   {
//     text: "Appointment based deliveries to warehouses and malls",
//     imageUrl: "/image/.jpg",
//   },
//   {
//     text: "e-POD, OTP verified delivery and more value added services",
//     imageUrl: "/image/.jpg",
//   },
//   {
//     text: "Reduced risk on Freight with consignment protection",
//     imageUrl: "/image/",
//   },
//   {
//     text: "11000+ fleet size operating daily with GPS tracking",
//     imageUrl: "/image/",
//   },
// ];

const features = [
  {
    icon: <FaMapMarkerAlt className="text-3xl text-green-500 mb-3" />,
    text: "Lowest Out of Delivery Area (ODA) pincode",
  },
  {
    icon: <FaClock className="text-3xl text-blue-400 mb-3" />,
    text: "Appointment based deliveries to warehouses and malls",
  },
  {
    icon: <FaClipboardCheck className="text-3xl text-yellow-400 mb-3" />,
    text: "e-POD, OTP verified delivery and more value added services",
  },
  {
    icon: <FaRupeeSign className="text-3xl text-orange-400 mb-3" />,
    text: "Reduced risk on Freight with consignment protection",
  },
  {
    icon: <FaTruck className="text-3xl text-red-400 mb-3" />,
    text: "11000+ fleet size operating daily with GPS tracking",
  },
];
export default function page() {
  return (
    <>
      <main className="relative min-h-screen w-full pt-30">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/e (63).jpg" // Place the image in public folder and name it bg.jpg
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
            <span className="text-white">Send your cargo with SureShip</span>
          </h1>

          <p className="mt-4 text-sm md:text-base text-white">
            Send bulk shipments across India via our Part Truck Load (PTL)
            network
          </p>
          {/* <button className="mt-6 px-6 py-3 bg-blue-900 text-white font-medium rounded transition-all cursor-pointer">
            Sign up as business
          </button> */}
        </div>
      </main>

      <section className="bg-gradient-to-b from-white to-blue-50 w-full px-4 py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left block */}
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-[2rem] flex flex-col items-center justify-center p-8 w-full lg:w-1/2 text-center shadow-lg">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
              6.1 Million+
            </h2>
            <p className="text-lg text-blue-800 font-medium mb-6">
              Tonnes Freight <br /> Shipped Till Date
            </p>
            <div className="w-full max-w-sm">
              <Image
                src="/image/e (11).png"
                alt="Warehouse"
                className="rounded-xl object-cover"
                width={700}
                height={500}
                priority
              />
            </div>
          </div>

          {/* Right cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2">
            {[
              {
                text: (
                  <>
                    Start with as <br /> low as <strong>₹6/Kg</strong>
                  </>
                ),
              },
              {
                text: (
                  <>
                    <strong>18,700+</strong> <br /> Pin codes covered
                  </>
                ),
              },
              {
                text: (
                  <>
                    Dedicated <br /> Customer <strong>Support</strong>
                  </>
                ),
              },
              {
                text: (
                  <>
                    Scheduled <br /> <strong>Appointment</strong> deliveries
                  </>
                ),
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-100 rounded-[2rem] p-6 text-center text-blue-900 font-semibold text-base md:text-lg flex items-center justify-center shadow hover:shadow-md transition"
              >
                <div>{card.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Panel Section */}
      <section className="w-full bg-white px-4 py-16">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <div className="text-center lg:text-left w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 leading-snug">
              Get{" "}
              <span className="text-blue-700 font-extrabold">
                eCommerce like experience
              </span>
              <br /> with SureShip dedicated panel for your B2B shipments
            </h2>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-[600px]">
              <Image
                src="/image/e (16).jpg"
                alt="Warehouse"
                className="rounded-xl object-cover"
                width={700}
                height={500}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Icons Section */}
      <section className="bg-gradient-to-b from-blue-950 to-blue-900 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-blue-800 text-white rounded-xl px-6 py-8 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-3 text-3xl">{feature.icon}</div>
              <p className="text-sm font-medium leading-snug">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
