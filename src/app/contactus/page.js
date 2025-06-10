"use client";
import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import { FaHeadset, FaVideo, FaQuestionCircle } from "react-icons/fa";

const contactData = [
  {
    title: "Customer Support",
    subtitle: "Got a query for us? Our support experts are just a click away.",
    contacts: [
      {
        label: "Domestic Shipping",
        phone: "+91 88742 62636",
        email: "support@sureship.in",
      },
      {
        label: "Cross Border Shipping",
        phone: "+91 88742 62636",
        email: "supportcb@sureship.com",
      },
      {
        label: "Warehouse Fulfillment",
        phone: "+91 88742 62636",
        email: "support@sureship.in",
      },
    ],
  },
  {
    title: "Sales",
    subtitle:
      "Talk to our sales expert to kick start your worldwide shipping journey with us.",
    contacts: [
      {
        label: "Domestic Shipping",
        phone: "+91 88742 62636",
        email: "support@sureship.in",
      },
      {
        label: "Cross Border Shipping",
        phone: "+91 88742 62636",
        email: "support@sureship.in",
      },
      {
        label: "Warehouse Fulfillment",
        phone: "+91 88742 62636",
        email: "support@sureship.in",
      },
    ],
  },
];

const contactDataa = [
  {
    icon: <FaHeadset className="text-4xl mb-2" />,
    title: "Support",
    subtitle: "Reach Us",
    bg: "bg-white",
    textColor: "text-blue-900",
  },
  {
    icon: <FaHeadset className="text-4xl mb-2" />,
    title: "Product demo",
    subtitle: "Schedule a product demo ",
    bg: "bg-white",
    textColor: "text-blue-900",
  },

  {
    icon: <FaVideo className="text-4xl mb-2" />,
    title: "Media & Communication",
    subtitle: "Media and Press information",
    bg: "bg-white",
    textColor: "text-blue-900",
  },
  {
    icon: <FaQuestionCircle className="text-4xl  mb-2" />,
    title: "HR Queries",
    subtitle: "Connect with HR",
    bg: "bg-white",
    textColor: "text-blue-900",
  },
];

export default function Page() {
  return (
    <>
      {/* 🔷 Top Section with Header Text */}
      <div className="bg-gradient-to-br from-blue-50 to-white text-blue-900 text-center py-10 px-4 md:px-16 pt-40">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Need Assistance? We're Just a Message Away
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Whether you have a question, need technical support, or want to
          explore our services, our dedicated team is here to assist you every
          step of the way. Reach out to us anytime — we're happy to help!
        </p>
      </div>

      <div className="min-h-56 bg-white">
        {/* Header */}
        <div className="bg-blue-900 text-white py-16 px-4 md:px-16">
          <h1 className="text-3xl md:text-4xl font-semibold">Customer Care</h1>
          <div className="mt-2 w-24 border-t-4 border-blue-600"></div>
        </div>

        {/* Content */}
        <div className="px-4 md:px-16 py-10 text-sm md:text-base text-[#333] max-w-4xl mx-auto">
          <p className="mb-4">
            At Sureship, we are committed to providing exceptional customer
            support and logistics solutions tailored to your needs. Whether
            you're tracking a shipment, resolving a delivery issue, or need
            general assistance, we are here to help. You can easily reach us
            through our{" "}
            <a href="#" className="text-blue-600 hover:underline ml-1">
              Customer Query Form
            </a>
            , call us at <span className="font-semibold">+91 88742 62636</span>,
            or email us at{" "}
            <a
              href="mailto:support@sureship.in"
              className="text-blue-600 hover:underline"
            >
              support@sureship.in
            </a>
          </p>

          <ul className="list-decimal list-inside space-y-1">
            <li>Customer service is available in both English and Hindi</li>
            <li>
              Service hours: 09:00 AM IST - 07:00 PM IST, Monday to Saturday
            </li>
            <li>Standard call rates may apply</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-white py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 pt-30">
          {contactData.map((section, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-blue-600 p-8"
            >
              <h2 className="text-3xl font-extrabold text-blue-900 text-center mb-2">
                {section.title}
              </h2>
              <p className="text-center text-gray-600 mb-6">
                {section.subtitle}
              </p>

              <div className="space-y-6">
                {section.contacts.map((item, index) => (
                  <div key={index} className="pt-4 border-t">
                    <p className="font-semibold text-gray-800 mb-1 text-lg">
                      {item.label}
                    </p>
                    <div className="flex items-center gap-3 text-sm text-gray-700">
                      <FaPhoneAlt className="text-blue-600" />
                      <span>{item.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-700 mt-1">
                      <FaEnvelope className="text-blue-600" />
                      <span>{item.email}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="min-h-96 flex flex-wrap justify-center items-center gap-6 px-4 py-10 bg-white">
        {contactDataa.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} ${item.textColor} w-64 h-64 rounded border border-gray-300 shadow-md flex flex-col justify-center items-center text-center p-4 transition hover:scale-105 duration-300`}
          >
            {item.icon}
            <h2 className="font-semibold text-lg">{item.title}</h2>
            <p className="text-sm mt-1">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </>
  );
}
