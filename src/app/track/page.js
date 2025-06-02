"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Page() {
  const steps = [
    {
      title: "Order Received",
      description: "Your order has been received by your courier partner",
      icon: "📄",
    },
    {
      title: "Order Picked",
      description: "Your order has been picked up by your courier partner",
      icon: "👤",
    },
    {
      title: "Order In Transit",
      description: "Your order is on its way to your customer’s address",
      icon: "🚚",
    },
    {
      title: "Out For Delivery",
      description:
        "The courier executive is on its way to deliver the order at your customer’s doorstep",
      icon: "📦",
    },
    {
      title: "Reached Destination",
      description: "Your order has reached your customer’s city",
      icon: "📍",
    },
  ];
  const tabs = [
    { label: "Mobile", placeholder: "Enter your mobile number" },
    { label: "AWB", placeholder: "Enter your AWB number" },
    { label: "Order Id", placeholder: "Enter your Order ID" },
    { label: "LRN", placeholder: "Enter your LRN number" },
  ];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 px-6 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10 pt-40">
        {/* Left Text Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-5">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Documents, Packages, and <br /> Everything Else Delivered
          </h1>
          <p className="text-lg font-medium">Courier Anything, Anywhere!</p>
        </div>

        {/* Right Track Card */}
        <div className="md:w-1/2 w-full">
          <div className="bg-white text-black p-8 rounded-xl shadow-2xl max-w-md mx-auto space-y-6">
            <h2 className="text-2xl font-bold">Track Your Order</h2>

            <div className="flex flex-wrap gap-2">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTab(tab)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedTab.label === tab.label
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <input
              type="text"
              placeholder={selectedTab.placeholder}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition">
              Track Order
            </button>
          </div>
        </div>
      </section>

      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">
          What’s your order{" "}
          <span className="text-gradient bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            status?
          </span>
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="text-4xl bg-green-100 p-4 rounded-full">
                  {step.icon}
                </div>
                <div className="absolute top-0 right-0 w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs">
                  ✓
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs + Image Info */}
      <section className="w-full bg-white text-black px-6 md:px-16 py-16 flex flex-col lg:flex-row gap-10">
        {/* FAQs Section */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold border-b-4 border-red-600 inline-block">
            Frequently Asked Questions
          </h2>
          <ul className="space-y-4 text-base">
            <li className="border-l-4 pl-4 border-black">
              Why is my package delayed?
            </li>
            <li className="border-l-4 pl-4 border-black">
              What do I do if tracking page doesn't show the expected delivery
              date?
            </li>
            <li className="border-l-4 pl-4 border-black">
              How can I get the contact number of my delivery partner?
            </li>
            <li className="border-l-4 pl-4 border-black">
              What should I do if I am not available at the time of delivery?
            </li>
            <li className="border-l-4 pl-4 border-black">
              My shipment has been returned/cancelled. What should I do?
            </li>
          </ul>
          <button className="mt-6 bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition flex items-center gap-2 text-sm font-semibold">
            Need More Help? <span className="text-lg">→</span>
          </button>
        </div>

        {/* Images Section */}
        <div className="lg:w-1/2 flex flex-col items-center gap-8">
          <div className="relative w-full max-w-sm h-48 rounded overflow-hidden shadow-lg">
            <Image
              src="/image/Logistics Company (3).jpg"
              alt="Ship to your friends"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 w-full text-white text-right px-4 py-2 text-sm">
              Ship to your friends <span className="text-red-500">→</span>
            </div>
          </div>

          <div className="relative w-full max-w-sm h-48 rounded overflow-hidden shadow-lg">
            <Image
              src="/image/Logistics Company (4).jpg"
              alt="For Businesses"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 w-full text-white text-right px-4 py-2 text-sm">
              For Businesses <span className="text-red-500">→</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
