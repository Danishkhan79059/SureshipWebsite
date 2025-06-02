"use client";

import Image from "next/image";

export default function page() {
  return (
    <>
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-900 to-transparent text-white overflow-hidden">
        <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between">
          {/* Left Side Content */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              Grow your{" "}
              <span className="text-white">Direct To Consumer brand</span> with
              <br />
              SureShip end-to-end logistics solutions
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-xl">
              Faster deliveries, lower returns and improved consumer experience
              that drives your brand’s success
            </p>
            <button className="mt-8 bg-white text-black px-6 py-3 rounded shadow hover:bg-gray-200 transition-all duration-300">
              Register Now
              <span className="ml-2">&rarr;</span>
            </button>
          </div>

          {/* Right Side Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/image/e (32).jpg"
              alt="Logistics delivery boxes and mobile phone"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain"
            />
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 w-12 h-12 bg-blue-900"></div>
      </section>
    </>
  );
}
