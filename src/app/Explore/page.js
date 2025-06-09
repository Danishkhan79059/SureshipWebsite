"use client";
import React from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
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
                  src="https://sureship.in/assets/img/Sureship.png"
                  alt="Shipway"
                  className="h-6 md:h-8"
                />
                <h3 className="font-semibold text-lg md:text-xl">
                  SureShip carrier aggregator
                </h3>
              </div>
              <ul className="space-y-4 text-sm md:text-base">
                <li>
                  Partner with India’s leading courier providers for reliable
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
            <button className="mt-8 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg w-full hover:bg-blue-700">
              Start with Shipway Logistics
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
