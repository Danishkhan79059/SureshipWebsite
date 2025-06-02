import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen bg-white px-4 py-10 text-gray-800 sm:px-6 md:px-8 pt-30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 px-2">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            Hello, Welcome to Sureship Support Center
          </h1>
          <p className="text-sm sm:text-base text-red-500">
            How can we help you today?
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="col-span-1 border rounded p-4 bg-gray-50 shadow-sm">
            <h2 className="font-semibold text-lg mb-3">📦 Shipments</h2>
            <ul className="space-y-2 text-sm">
              <li className="text-red-600 font-medium">▪ Shipment Status</li>
              <li>▪ Destination and Contact details</li>
              <li>▪ Returns</li>
              <li>▪ Report Issues</li>
              <li>▪ Report on-field staff issues</li>
              <li>▪ Fragile shipments</li>
              <li>▪ General</li>
              <li>▪ Partnerships</li>
              <li>▪ Careers</li>
              <li>▪ Media Query</li>
              <li>▪ Business Queries</li>
            </ul>

            <h2 className="font-semibold text-lg mt-6 mb-2">🏢 Businesses</h2>
            <ul className="space-y-2 text-sm">
              <li>▪ Account Set up</li>
              <li>▪ Shipments</li>
              <li>▪ Payments</li>
              <li>▪ Manage pick-up and drop</li>
              <li>▪ API Integration Related</li>
              <li>▪ Tracking Related</li>
              <li>▪ Account operations</li>
              <li>▪ International & Fulfillment</li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="col-span-1 lg:col-span-3 space-y-6">
            <div className="bg-gray-100 p-4 rounded shadow-sm">
              <h3 className="font-semibold text-lg mb-2">📍 Shipment Status</h3>
              <p className="text-sm mb-4">
                <strong>How can I track my shipment?</strong>
                <br />
                To track your shipment, you can{" "}
                <a href="#" className="text-blue-600 underline">
                  download our app
                </a>{" "}
                or go to the{" "}
                <a href="#" className="text-blue-600 underline">
                  tracking page
                </a>
                .
              </p>
              <ul className="space-y-2 text-sm">
                <li>➕ Why is my package delayed?</li>
                <li>
                  ➕ My shipment status is still at 'Pick up.' What should I do?
                </li>
                <li>
                  ➕ What do I do if tracking page doesn't show the expected
                  date of arrival?
                </li>
                <li>
                  ➕ My shipment is out for delivery. When will I receive it?
                </li>
                <li>
                  ➕ How can I get the delivery of my shipment if I missed it
                  today?
                </li>
                <li>
                  ➕ Why can I see no update to the status of my shipment?
                </li>
                <li>
                  ➕ How can I get the contact number of my delivery/pickup
                  partner?
                </li>
                <li>➕ How can I reschedule delivery/pickup for my order?</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded border shadow-sm">
              <h4 className="font-semibold text-base mb-2">
                Need support with your shipment?
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
