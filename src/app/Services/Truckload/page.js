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
          <button className="mt-6 px-6 py-3 bg-blue-900 text-white font-medium rounded hover:bg-gray-200 transition-all">
            Sign up as business
          </button>
        </div>
      </main>

      <section className="bg-white w-full px-4 py-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
          {/* Left block with image and stat */}
          <div className="bg-[#fff8ec] rounded-[2rem] flex flex-col items-center justify-center p-6 lg:p-10 w-full lg:w-1/2 text-center relative">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                6.1 Million+
              </h2>
              <p className="text-lg text-black font-medium mt-1">
                Tonnes Freight <br /> Shipped Till Date
              </p>
            </div>
            <div className="w-full max-w-sm">
              <Image
                src="/image/danish.png"
                alt="Warehouse"
                className="rounded-md object-cover"
                width={700}
                height={500}
                priority
              />
            </div>
          </div>

          {/* Right cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-1/2">
            {[
              {
                text: (
                  <>
                    Start with as <br />
                    low as <strong>₹6/Kg</strong>
                  </>
                ),
              },
              {
                text: (
                  <>
                    <strong>18,700+</strong> <br />
                    Pin codes covered
                  </>
                ),
              },
              {
                text: (
                  <>
                    Dedicated <br />
                    Customer <strong>Support</strong>
                  </>
                ),
              },
              {
                text: (
                  <>
                    Scheduled <br />
                    <strong>Appointment</strong> deliveries
                  </>
                ),
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-[#fff5ef] rounded-[2rem] p-6 text-center text-black font-medium text-base md:text-lg flex items-center justify-center min-h-[150px]"
              >
                <div>{card.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
          {/* Text Section */}
          <div className="text-center lg:text-left w-full lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
              Get{" "}
              <span className="text-black font-extrabold">
                eCommerce like experience
              </span>{" "}
              with SureShip dedicated panel for your B2B shipments
            </h2>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-[600px]">
              <Image
                src="/image/e (16).jpg"
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

      <section className="bg-[#0d0d16] py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#2a2a38] text-white rounded-xl px-4 py-6 flex flex-col items-center shadow-md hover:scale-105 transition-transform duration-300"
            >
              {feature.icon}
              <p className="text-sm font-medium">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
