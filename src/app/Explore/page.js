"use client";
import React from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import Image from "next/image";

import { IoIosCall } from "react-icons/io";
import { MdCancel } from "react-icons/md";
const benefits = [
  {
    title: "Lowest Shipping Cost",
    desc: "Start shipping eCommerce orders at 21/500gm",
    icon: "📦",
  },
  {
    title: "Multiple Courier Services",
    desc: "Increase distribution reach with 27+ courier options",
    icon: "➕📦",
  },
  {
    title: "Widest Pin Code Network",
    desc: "Deliver products across 29000+ pin codes",
    icon: "📍",
  },
  {
    title: "Swift Shipping",
    desc: "Best first-mile/last-mile experience with quickest pickup & delivery",
    icon: "🚚",
  },
  {
    title: "30% Less RTO",
    desc: "Reduce RTO losses and scale your eCommerce profits",
    icon: "📦📉",
  },
  {
    title: "One-day COD Remittance",
    desc: "Early COD payments for uninterrupted cash flow",
    icon: "💰⏱️",
  },
  {
    title: "Enhanced Post-shipment Experience",
    desc: "Get automated shipment updates in your inbox",
    icon: "📱📩",
  },
  {
    title: "Branded Tracking Page",
    desc: "Drive post-purchase engagement with customers",
    icon: "🧾",
  },
  {
    title: "24x7 Support",
    desc: "Enjoy non-stop eCommerce shipping services with prompt support",
    icon: "🕒",
  },
];

const image = [
  "/image/1.png",
  "/image/2.png",
  "/image/3.png",
  "/image/4.png",
  "/image/5.png",
  "/image/6.png",
  "/image/7.png",
  "/image/8.png",
  "/image/9.png",
  "/image/10.png",
  "/image/11.png",
  "/image/12.png",
  "/image/13.png",
  "/image/14.png",
  "/image/15.png",
  "/image/16.png",
  "/image/17.png",
  "/image/18.png",
  "/image/19.png",
  "/image/20.png",
  "/image/21.png",
  "/image/22.png",
  "/image/23.png",
  "/image/24.png",
  "/image/25.png",
  "/image/26.png",
  "/image/27.png",
  "/image/28.png",
  "/image/29.png",
  "/image/30.png",
  "/image/31.png",
  "/image/32.png",
  "/image/33.png",
  "/image/34.png",
  "/image/35.png",
  "/image/36.png",
  "/image/37.png",
  "/image/38.png",
  "/image/39.png",
  "/image/40.png",
  "/image/41.png",
  "/image/42.png",
  "/image/43.png",
  "/image/44.png",
  "/image/45.png",
  "/image/46-star.png",
  "/image/47.png",
  "/image/48.png",
  "/image/49.png",
];

export default function Page() {
  return (
    <>
      <section className=" px-4 md:px-12 w-full mx-auto bg-white text-black pt-40">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4 text-black">
          Business <span className="text-blue-600">Benefits</span>
        </h2>
        <p className="text-center text-gray-500 max-w-3xl mx-auto mb-12 text-2xl">
          Say hi to a scaling business and wave goodbye to missed sales, limited
          reach, delayed deliveries, and a poor remittance cycle.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-5 rounded-2xl bg-white shadow-md hover:shadow-lg transition"
            >
              <div className="text-4xl text-pink-600">{benefit.icon}</div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 px-4 md:px-24 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-900">
              <span className="border-l-4 border-yellow-400 pl-2">
                Ensuring Fast & Reliable Parcel Delivery with SureShip
              </span>
            </h2>
            <p className="text-gray-600 text-lg mt-4 md:w-2/3">
              SureShip is committed to empowering individuals and businesses
              through timely and secure logistics solutions, delivering parcels
              seamlessly across India.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-blue-900 border-b border-yellow-400 inline-block mb-6">
            Logistics & Parcel Delivery
          </h3>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Text Section */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-blue-900 mb-2">
                Nationwide Parcel Delivery with Smart Fleet Support
              </h4>
              <p className="text-black leading-relaxed">
                At SureShip, we leverage a smart fleet network to ensure your
                packages reach their destination safely and on time. From small
                parcels to bulk shipments, we deliver across major cities like
                Mumbai, Delhi, Bangalore, Kolkata, and Hyderabad. Our advanced
                tracking system and reliable delivery force make sure every
                delivery is handled with care and efficiency—covering thousands
                of kilometers daily for customer satisfaction.
              </p>
            </div>

            {/* Right Image Section */}
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/image/e (81).jpg" // Replace with SureShip-related image if available
                alt="SureShip Delivery"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Text Section */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-blue-900 mb-2">
                Logistics You Can Trust—From First Mile to Last
              </h4>
              <p className="text-black leading-relaxed">
                SureShip delivers smarter logistics for a fast-moving world. Our
                AI-powered fleet and seamless delivery infrastructure guarantee
                efficient movement of goods—whether it’s a document or a bulk
                shipment. Operating across major Indian cities like Mumbai,
                Delhi, Bangalore, Kolkata, and Hyderabad, we ensure real-time
                visibility, secure transit, and timely arrivals. With a focus on
                technology and reliability, SureShip is your trusted logistics
                partner from start to finish.
              </p>
            </div>

            {/* Right Image Section */}
            <div className="rounded-lg overflow-hidden pt-10">
              <Image
                src="/image/e (82).jpg" // Replace with SureShip-related image if available
                alt="SureShip Delivery"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <h3 className="text-lg font-semibold text-blue-900 border-b border-yellow-400 inline-block mb-6">
            Smart Logistics & Business Support
          </h3>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Text Section */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-blue-900 mb-2">
                Financial Support & Scalable Logistics for Growing Businesses
              </h4>
              <p className="text-black leading-relaxed">
                At SureShip, we understand the importance of cost-efficient
                logistics. That's why we offer flexible payment plans and
                tailored solutions to support startups and SMEs. With our wide
                delivery network and transparent pricing, businesses can focus
                on growth while we handle the logistics—from documents to
                full-scale cargo, across every major Indian city.
              </p>
            </div>

            {/* Right Image Section */}
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/image/e (83).jpg"
                alt="SureShip Logistics Support"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mt-10">
            {/* Left Text Section */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-blue-900 mb-2">
                AI-Powered Logistics Built for Speed and Accuracy
              </h4>
              <p className="text-black leading-relaxed">
                SureShip combines AI technology and intelligent routing to
                deliver smarter, faster logistics. Whether it’s real-time
                tracking, route optimization, or automated dispatch, our systems
                ensure flawless execution. Serving metros like Mumbai, Delhi,
                Bangalore, and beyond, we make supply chain management
                effortless and responsive—helping you deliver promises on time.
              </p>
            </div>

            {/* Right Image Section */}
            <div className="rounded-lg overflow-hidden pt-10">
              <Image
                src="/image/e (84).jpg"
                alt="SureShip AI Logistics"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-blue-50 pt-20">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Trusted by 50+ Leading Brand Partners of SureShip
        </h2>
        <div className="overflow-hidden w-full">
          <div className="flex gap-10 animate-marquee whitespace-nowrap">
            {[...image, ...image].map((logo, idx) => (
              <div
                className="relative h-32 w-52 flex-shrink-0" // ⬅️ Increased size here
                key={`${logo}-${idx}`}
              >
                <Image
                  src={logo}
                  alt="brand logo"
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-white py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#0a0055] mb-12">
            <span className="border-l-4 border-blue-400 pl-3">
              Our Core Values
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16 relative">
            {/* Yellow Cross Divider */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-blue-400"></div>
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-[1px] bg-blue-400"></div>

            {/* 1. Customer Centricity */}
            <div className="flex justify-between items-start gap-6">
              <div>
                <h4 className="text-blue-900 font-semibold">
                  Customer Centricity
                </h4>
                <p className="text-gray-600 mt-2 text-sm">
                  Nurturing strong bonds & delivering an outstanding customer
                  experience is the hallmark of our services. The customer is at
                  the heart of our business ecosystem.
                </p>
              </div>
              {/* <Image src="/icons/customer.svg" alt="Customer" width={50} height={50} /> */}
            </div>

            {/* 2. Innovation */}
            <div className="flex justify-between items-start gap-6">
              <div>
                <h4 className="text-blue-900 font-semibold">Innovation</h4>
                <p className="text-gray-600 mt-2 text-sm">
                  With constant innovation and an endless chain of original
                  ideas, we aim to revolutionise the industrial landscape
                  through robust and refined logistics solutions.
                </p>
              </div>
              {/* <Image src="/icons/innovation.svg" alt="Innovation" width={50} height={50} /> */}
            </div>

            {/* 3. Empathy */}
            <div className="flex justify-between items-start gap-6">
              <div>
                <h4 className="text-blue-900 font-semibold">Empathy</h4>
                <p className="text-gray-600 mt-2 text-sm">
                  Showing empathy enables us to anticipate the needs, fears, and
                  difficulties of others and put in genuine effort to address
                  them.
                </p>
              </div>
              {/* <Image src="/icons/empathy.svg" alt="Empathy" width={50} height={50} /> */}
            </div>

            {/* 4. Integrity */}
            <div className="flex justify-between items-start gap-6">
              <div>
                <h4 className="text-blue-900 font-semibold">Integrity</h4>
                <p className="text-gray-600 mt-2 text-sm">
                  Powered by integrity and driven by strong morals, India’s most
                  trusted logistics brand values ethics over anything else.
                </p>
              </div>
              {/* <Image src="/icons/integrity.svg" alt="Integrity" width={50} height={50} /> */}
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-96 bg-white text-black py-20 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Navigate your logistics journey your way
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* BYOC Card */}
          <div className="bg-gray-200 rounded-xl shadow-lg p-6 md:p-10 flex flex-col justify-between">
            <div>
              <div className="border border-black rounded-xl py-4 px-6 flex items-center space-x-3 mb-6">
                <span className="text-blue-500 text-2xl">🚚</span>
                <h3 className="font-semibold text-lg md:text-xl">
                  Bring your own Carriers (BYOC)
                </h3>
              </div>
              <ul className="space-y-4 text-sm md:text-base">
                <li>
                  Limited to one courier, reducing flexibility across regions.
                </li>
                <li>
                  Restricted visibility and control over serviceable pin codes.
                </li>
                <li>
                  Manual rate negotiations can lead to inconsistent pricing.
                </li>
                <li>Delayed COD remittance, managed solely by your courier.</li>
                <li>
                  Must coordinate directly with courier for delivery and weight
                  disputes.
                </li>
                <li>
                  No added protection — you're solely dependent on courier for
                  damages/losses.
                </li>
              </ul>
            </div>
            <button className="mt-8 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg w-full hover:bg-blue-700">
              Request A Call Back
            </button>
          </div>

          {/* Shipway Card */}
          <div className="bg-[#eaf2ff] rounded-xl shadow-lg p-6 md:p-10 flex flex-col justify-between">
            <div>
              <div className="border border-black rounded-xl py-4 px-6 flex items-center space-x-3 mb-6">
                <img
                  src="/image/e (4) (1).png"
                  alt="suership"
                  className="h-6 md:h-8"
                />
                <h3 className="font-semibold text-lg md:text-xl">
                  SureShip carrier aggregator
                </h3>
              </div>
              <ul className="space-y-4 text-sm md:text-base">
                <li>
                  Partner with India’s leading courier provider for reliable
                  delivery.
                </li>
                <li>
                  Reach over 29,000+ pin codes across the country with ease.
                </li>
                <li>
                  Enjoy competitive shipping rates starting from just ₹19 per
                  500g.
                </li>
                <li> Fast COD settlements within 2 working days (D+2).</li>
                <li>
                  Get dedicated support for pickup scheduling and shipment
                  queries.
                </li>
              </ul>
            </div>
            <a
              href="https://app.sureship.in/coming_soon"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg w-full text-center inline-block hover:bg-blue-700"
            >
              Start with Shipway Logistics
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
