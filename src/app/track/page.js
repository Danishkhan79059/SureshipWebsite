"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MdCopyAll } from "react-icons/md";

export default function Page() {
  const router = useRouter();
  const tabs = [
    // { label: "Mobile", placeholder: "Enter your mobile number" },
    { label: "AWB", placeholder: "Enter your AWB number" },
    // { label: "Order Id", placeholder: "Enter your Order ID" },
    // { label: "LRN", placeholder: "Enter your LRN number" },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [inputValue, setInputValue] = useState("38418510009483"); //38418510009483
  const [trackingResult, setTrackingResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [copiedAWB, setCopiedAWB] = useState(null);

  const handleCopy = (awb) => {
    navigator.clipboard.writeText(awb).then(() => {
      setCopiedAWB(awb);
      setTimeout(() => setCopiedAWB(null), 2000);
    });
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleTrackOrder = async () => {
    setError("");
    setTrackingResult(null);
    setLoading(true);

    const trimmedValue = inputValue.trim();
    if (!trimmedValue) {
      setError("Please enter at least one AWB number.");
      setLoading(false);
      return;
    }

    if (selectedTab.label === "AWB") {
      const awbs = trimmedValue
        .split(",")
        .map((awb) => awb.trim())
        .filter((awb) => awb);

      try {
        const response = await fetch(
          `https://backend.sureship.in/api/track?_ids=${encodeURIComponent(
            awbs.join(",")
          )}&ref_ids`
        );

        if (!response.ok) throw new Error("Tracking request failed");

        const data = await response.json();
        if (!data.ShipmentData || data.ShipmentData.length === 0) {
          setError("No tracking data found.");
        } else {
          setTrackingResult(data);
        }
      } catch (err) {
        console.error(err);
        setError("Something went wrong while fetching tracking details.");
      } finally {
        setLoading(false);
      }
    } else {
      setError("Tracking is currently supported only for AWB numbers.");
      setLoading(false);
    }
  };
  return (
    <>
      {/* 🔄 Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 bg-white/30 backdrop-blur-sm flex items-center justify-center">
          <div className="text-center">
            <svg
              className="animate-spin h-30 w-30 text-blue-600 mx-auto mb-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
            <p className="text-blue-800 text-lg font-semibold">
              Tracking in progress...
            </p>
          </div>
        </div>
      )}

      <section className="min-h-96 bg-white text-white  px-6 md:px-20 flex flex-col md:flex-row items-center justify-between pt-40">
        {/* Left Form Section */}
        <div className="md:w-1/2 w-full order-2">
          <div className="bg-blue-50 text-black p-20 shadow-2xl rounded-md mx-auto space-y-8">
            <h2 className="text-4xl md:text-3xl font-bold text-black mb-6">
              Track Your Order
            </h2>

            <div className="flex flex-wrap gap-3">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTab(tab)}
                  className={`px-5 py-2.5 rounded-md text-sm font-semibold transition-all ${
                    selectedTab.label === tab.label
                      ? "bg-blue-600 text-white"
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
              className="w-full border border-gray-300 rounded-md px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-black"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleTrackOrder();
                }
              }}
            />

            <button
              className="w-full bg-blue-900 text-white py-4 text-lg font-medium rounded-md hover:bg-gray-800 transition"
              onClick={handleTrackOrder}
            >
              Track Order
            </button>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
        </div>
        {/* Right Image Section */}
        <div className="relative z-10 w-full md:w-3/4 flex justify-center ">
          <Image
            src="/image/e (66).jpg"
            alt="Delivery Guy"
            width={1500}
            height={1200}
            className="object-cover w-full max-w-3xl rounded-xl"
          />
        </div>
      </section>

      {/*  Tracking Result Section */}
      <div className="bg-white py-10">
        {trackingResult?.ShipmentData?.map((shipment, index) => (
          <div
            key={shipment.Shipment.AWB || index}
            className="bg-white border border-gray-200 shadow-lg rounded-2xl max-w-5xl mx-auto mb-10 p-6 sm:p-8 space-y-8"
          >
            {/* Header */}
            <div className="flex items-center space-x-3">
              <span className="text-xl sm:text-2xl font-bold text-blue-700 flex items-center gap-2">
                Order Tracker (AWB: {shipment.Shipment.AWB})
                <button
                  onClick={() => handleCopy(shipment.Shipment.AWB)}
                  className="text-blue-600 hover:text-blue-800"
                  title="Copy AWB number"
                >
                  <MdCopyAll className="text-lg sm:text-xl size-8" />
                </button>
              </span>
            </div>

            {/* Copy confirmation message */}
            {copiedAWB === shipment.Shipment.AWB && (
              <div className="text-green-600 text-sm font-medium">
                AWB number copied!
              </div>
            )}

            {/* Shipment Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm sm:text-base text-gray-900 font-medium">
              {[
                { label: "AWB Number", value: shipment.Shipment.AWB },
                { label: "Status", value: shipment.Shipment.Status.Status },
                { label: "Origin", value: shipment.Shipment.Origin },
                { label: "Destination", value: shipment.Shipment.Destination },
                {
                  label: "Expected Delivery",
                  value: formatDate(shipment.Shipment.ExpectedDeliveryDate),
                },
                { label: "Order Type", value: shipment.Shipment.OrderType },
              ].map((item, i) => (
                <div key={i}>
                  <p className="text-gray-500 text-xs sm:text-sm mb-1">
                    {item.label}
                  </p>
                  <div className="bg-gray-100 rounded-md px-3 py-2 text-gray-800 shadow-inner border border-gray-200">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Stepper Timeline */}
            <div className="relative border-l-2 border-blue-500 pl-6 space-y-8">
              {shipment.Shipment.Scans.map((scan, i) => {
                if (
                  [
                    "Added to Bag",
                    "Bag Added To Trip",
                    "Bag Received at Facility",
                    "Bag Removed",
                    "Shipment Recieved at Origin Center",
                    "Shipment Received at Facility",
                  ].includes(scan.ScanDetail.Instructions)
                )
                  return null;

                const isActive = i <= 3;

                return (
                  <div key={i} className="relative">
                    <div
                      className="absolute -left-[37px] top-1 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm shadow"
                      style={{
                        backgroundColor: isActive ? "#3B82F6" : "#E5E7EB",
                        border: `2px solid ${isActive ? "#3B82F6" : "#D1D5DB"}`,
                      }}
                    >
                      📅
                    </div>

                    <div className="ml-2">
                      <p className="font-semibold text-gray-800 leading-tight">
                        {scan.ScanDetail.Scan}
                      </p>
                      <p className="text-sm text-gray-600">
                        {scan.ScanDetail.Instructions}
                      </p>
                      {scan.ScanDetail.ScannedLocation && (
                        <p className="text-xs text-gray-500">
                          Location: {scan.ScanDetail.ScannedLocation}
                        </p>
                      )}
                      <p className="text-xs text-gray-500">
                        {formatDate(scan.ScanDetail.ScanDateTime)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
