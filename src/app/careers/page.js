"use client";
import React from "react";
import Image from "next/image";
export default function page() {
  return (
    <>
      <section className="relative h-screen w-full">
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
              Build a career at SureShip
            </h1>

            <p className="mt-4 text-md md:text-lg text-white font-bold ">
              Join a dynamic team of over 60,000 employees shaping the future of
              logistics in India
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center justify-between px-6 py-12 max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="lg:w-1/2 w-full text-center lg:text-left mb-10 lg:mb-0">
          <h2 className="text-3xl font-bold text-white mb-2">
            <span className="border-b-4 border-red-500 inline-block pb-1">
              Join
            </span>{" "}
            Us
          </h2>
          <p className="text-white mt-4">
            Delhivery is India’s largest fully integrated logistics service
            provider.
          </p>
          <p className="text-white mt-2">
            We move fast, operate under pressure and solve business problems.
          </p>
          <p className="text-white mt-2">
            Our aim is to attract the highest quality of talent and provide them
            opportunities for leadership and professional growth in a diverse
            and inclusive environment.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 w-full">
          <Image
            src="/image/warehouse.jpg"
            alt="Delhivery Warehouse"
            width={800}
            height={600}
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </section>

      <section className="bg-white text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed text-black">
            <span className="font-bold">We’re looking for curious people</span>{" "}
            with a desire to solve
            <br />
            challenging business problems
          </h2>
        </div>
      </section>
    </>
  );
}
