"use client";

import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-4 md:p-8 text-sm ">
        <div className="max-w-7xl mx-auto pt-20">
          <h1 className="text-2xl font-semibold mb-6 text-blue-900">
            Shipping Rate Calculator
          </h1>

          {/* Tabs */}
          <div className="flex gap-6 border-b pb-2 mb-6 text-gray-500">
            <button className="border-b-2 text-black font-medium">
              Domestic
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Form Section */}
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Shipment Type */}
                <div>
                  <label className="block font-medium mb-2 text-black">
                    Shipment Type
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 text-black">
                      <input
                        type="radio"
                        name="shipmentType"
                        defaultChecked
                        className=" text-black"
                      />{" "}
                      Forward
                    </label>
                    <label className="flex items-center gap-2 text-black">
                      <input
                        type="radio"
                        name="shipmentType"
                        className=" text-black"
                      />{" "}
                      Return
                    </label>
                  </div>
                </div>

                {/* Payment Type */}
                <div>
                  <label className="block font-medium mb-2 text-black">
                    Payment Type
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 text-black">
                      <input
                        type="radio"
                        name="paymentType"
                        className="text-black"
                      />{" "}
                      Cash on Delivery
                    </label>
                    <label className="flex items-center gap-2 text-black">
                      <input
                        type="radio"
                        name="paymentType"
                        defaultChecked
                        className="text-black"
                      />{" "}
                      Prepaid
                    </label>
                  </div>
                </div>

                {/* Pickup Pincode */}
                <div>
                  <label className="block font-medium mb-2 text-black">
                    Pickup Pincode
                  </label>
                  <input
                    type="text"
                    placeholder="Enter 6 digit pickup area pincode"
                    className="w-full border rounded px-4 py-2 text-black"
                  />
                </div>

                {/* Delivery Pincode */}
                <div>
                  <label className="block font-medium mb-2 text-black">
                    Delivery Pincode
                  </label>
                  <input
                    type="text"
                    placeholder="Enter 6 digit delivery area pincode"
                    className="w-full border rounded px-4 py-2 text-black"
                  />
                </div>

                {/* Actual Weight */}
                <div>
                  <label className="block font-medium mb-2 text-black">
                    Actual Weight
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      defaultValue="0.00"
                      className="w-full border rounded-l px-4 py-2 text-black"
                    />
                    <span className="bg-gray-100 px-4 py-2 border border-l-0 rounded-r text-black">
                      KG
                    </span>
                  </div>
                  <p className="text-xs mt-1  text-black">
                    Note: Minimum chargeable weight is 0.5kg
                  </p>
                </div>

                {/* Shipment Value */}
                <div>
                  <label className="block font-medium mb-2 text-black">
                    Shipment Value (₹)
                  </label>
                  <div className="flex">
                    <span className="bg-gray-100 px-4 py-2 border rounded-l text-black">
                      ₹
                    </span>
                    <input
                      type="text"
                      placeholder="Enter the shipment value"
                      className="w-full border border-l-0 rounded-r px-4 py-2 text-black"
                    />
                  </div>
                </div>

                {/* Dimensions */}
                <div className="md:col-span-2">
                  <label className="block font-medium mb-2 text-black">
                    Dimensions{" "}
                    <span className="text-sm  text-black">(Optional)</span>
                  </label>
                  <div className="flex gap-2">
                    <div className="flex w-1/3">
                      <input
                        type="text"
                        placeholder="L"
                        className="w-full border rounded-l px-2 py-2 text-black"
                      />
                      <span className=" text-black px-2 py-2 border border-l-0 rounded-r">
                        CM
                      </span>
                    </div>
                    <div className="flex w-1/3">
                      <input
                        type="text"
                        placeholder="B"
                        className="w-full border rounded-l px-2 py-2 text-black"
                      />
                      <span className="bg-gray-100 text-black px-2 py-2 border border-l-0 rounded-r">
                        CM
                      </span>
                    </div>
                    <div className="flex w-1/3">
                      <input
                        type="text"
                        placeholder="H"
                        className="w-full border rounded-l px-2 py-2 text-black"
                      />
                      <span className="bg-gray-100 px-2 py-2 border border-l-0 rounded-r text-black">
                        CM
                      </span>
                    </div>
                  </div>
                  <p className="text-xs mt-1 text-black">
                    Note: Dimensional value should be greater than 0.5cm
                  </p>
                </div>

                {/* Dangerous Goods */}
                <div className="md:col-span-2">
                  <label className="block font-medium mb-2 text-black">
                    Shipping Dangerous Goods?
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 text-black">
                      <input
                        type="radio"
                        name="dangerous"
                        className="accent-blue-600"
                      />{" "}
                      Yes
                    </label>
                    <label className="flex items-center gap-2 text-black">
                      <input
                        type="radio"
                        name="dangerous"
                        defaultChecked
                        className="accent-blue-600"
                      />{" "}
                      No
                    </label>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-4">
                <button className="bg-blue-600 px-6 py-2 rounded text-black">
                  Calculate
                </button>
                <button className="border text-black px-6 py-2 rounded">
                  Reset
                </button>
              </div>
            </div>

            {/* Right-side visual */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mb-6">
                <h2 className="font-medium text-sm text-black mb-2">
                  Pickup Location
                </h2>
                <div className="border border-dashed bg-purple-50 text-black p-4 rounded-md">
                  City, <br />
                  <span className="font-semibold">State</span>
                </div>
              </div>

              <div className="border-l-2 border-dashed h-8 mx-auto"></div>

              <div className="my-6">
                <h2 className="font-medium text-sm text-black mb-2">
                  Delivery Location
                </h2>
                <div className="border border-dashed bg-purple-50  p-4 rounded-md text-black">
                  City, <br />
                  <span className="font-semibold">State</span>
                </div>
              </div>

              <img
                src="/image/e (31).jpg"
                alt="Delivery Illustration"
                className="w-80 h-auto mx-auto mt-4"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mt-6 text-sm text-gray-800">
          <h2 className="text-base font-semibold mb-4">Terms & Conditions</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Freight charges (GST inclusive) are based on the higher dead/dry
              or volumetric weight. RTO (return to origin) shipment will be
              charged differently from the forward delivery rate.
              <br />
              <span className="ml-4 text-gray-600">
                Note: The standard courier RTO charge will also apply to their
                additional weight courier type.
              </span>
            </li>
            <li>
              Fixed COD charge or COD % of the order value whichever is higher
              will be taken while calculating the COD fee.
            </li>
            <li>
              Volumetric weight is calculated as LxBxH/5000 for most couriers
              except Aramex. It is LxBxH/6000 for Aramex. Measurements (length,
              breadth, height) should be in centimeters.
            </li>
            <li>
              The maximum liability, if any, is limited to whatever compensation
              the logistics partner offers to Company in event of a claim by the
              Merchant, provided such a claim is raised by the Merchant within
              one (1) month from the date of such damage or loss or theft.
            </li>
            <li>
              Detailed terms and conditions can be reviewed on{" "}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                www.SureShip.in
              </a>
              .
            </li>
            <li>
              For queries, write us on{" "}
              <a href="" className="text-blue-600 hover:underline">
                support@sureship.com
              </a>
              .
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
