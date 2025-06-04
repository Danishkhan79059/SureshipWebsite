"use client";
import React from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdCancel } from "react-icons/md";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-8 pt-40">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="bg-gray-800 text-white text-center py-3">
          <p className="text-sm">Arriving by</p>
          <h1 className="text-3xl font-semibold">11 Jun</h1>
        </div>

        <div className="px-6 py-4 space-y-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <span className="font-medium text-gray-700">
              AWB #38418510009505
            </span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
              On Time
            </span>
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">
              In-transit
            </span>
          </div>

          <nav className="flex border-b border-gray-200 mb-4 space-x-6 text-sm font-medium">
            <button className="text-red-600 border-b-2 border-red-600 py-2">
              Tracking Details
            </button>
            <button className="text-gray-500 hover:text-gray-700 py-2">
              Order Details
            </button>
          </nav>

          <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex items-start gap-4">
            <span className="text-xl">📦</span>
            <div>
              <p className="text-green-700 font-semibold">IN-TRANSIT</p>
              <p className="text-sm text-gray-600">
                Shipment left for next facility Ahmedabad - Hoskote
              </p>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg text-center mt-6">
            <p className="text-sm text-gray-800 mb-3">
              Please login to get updates
            </p>
            {/* <Button className="w-full bg-black text-white hover:bg-gray-900">Login</Button> */}
            <div className="flex justify-center gap-4">
              <img src="/google-play.png" alt="Google Play" className="w-28" />
              <img src="/app-store.png" alt="App Store" className="w-28" />
            </div>
          </div>

          <div className="space-y-4 mt-6">
            <div className="flex items-center gap-4 bg-white shadow-sm border rounded-xl p-4">
              <FaRegQuestionCircle className="text-xl text-gray-600" />
              <div>
                <div className="text-sm font-semibold">Get help</div>
                <div className="text-xs text-gray-500">
                  Need help with this delivery?
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white shadow-sm border rounded-xl p-4">
              <IoIosCall className="text-xl text-gray-600" />
              <div>
                <div className="text-sm font-semibold">
                  Call our IVR helpline
                </div>
                <div className="text-xs text-blue-600">+91 8069856101</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white shadow-sm border rounded-xl p-4">
              <MdCancel className="text-xl text-red-600" />
              <div>
                <div className="text-sm font-semibold text-red-600">
                  Cancel Order
                </div>
                <div className="text-xs text-gray-500">
                  Want to cancel this order?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
