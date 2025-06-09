"use client";
import React from "react";
import Image from "next/image";
export default function page() {
  return (
    <>
      <section className="relative h-screen w-full ">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/Logisticswarehouse.jpg"
            alt="Background image"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0  bg-opacity-60 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col justify-center h-full text-white px-4 md:px-16 lg:px-32">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-white">
              Grow with SureShip: Explore Exciting Career Paths in E-commerce
              Logistics and Innovation
            </h1>

            <p className="mt-4 text-md md:text-lg text-white font-bold ">
              Fuel your career by joining a thriving team of 60,000+ experts
              shaping how India moves goods, faster and smarter.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900 leading-tight mb-4">
              <span className="relative inline-block">
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded"></span>
                <span className="relative">Join</span>
              </span>{" "}
              Us
            </h2>
            <p className="text-blue-800 text-lg sm:text-xl mt-6">
              SureShip is India’s largest fully integrated logistics service
              provider.
            </p>
            <p className="text-blue-800 text-lg sm:text-xl mt-3">
              We move fast, operate under pressure, and solve complex business
              problems.
            </p>
            <p className="text-blue-800 text-lg sm:text-xl mt-3">
              Our goal is to attract top talent and offer them leadership
              opportunities in a diverse, inclusive environment.
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 w-full">
            <img
              src="/image/warehouse.jpg"
              alt="Delhivery Warehouse"
              className="w-full h-auto rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-900 mb-6">
            We’re looking for{" "}
            <span className="text-blue-600 font-bold">curious minds</span>
            <br />
            ready to solve challenging business problems.
          </h2>
          <button   onClick={() => (window.location.href = "/")} className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded-full shadow-md transition-all duration-300">
            Explore Careers
          </button>
        </div>
      </section>
    </>
  );
}
