"use client";
import Image from "next/image";
import { FaHeadphonesAlt } from "react-icons/fa";
import { LuWeight } from "react-icons/lu";
import { TbCalendarUser } from "react-icons/tb";
import { LiaShippingFastSolid } from "react-icons/lia";
// import { useRouter } from "next/router";

const partners = [
  {
    name: "Delhivery",
    src: "https://sureship.in/assets/img/delivery-partners/delhivery.png",
  },
  {
    name: "Shadowfax",
    src: "https://sureship.in/assets/img/delivery-partners/shadowfax.png",
  },
  {
    name: "Xpressbees",
    src: "	https://sureship.in/assets/img/delivery-partners/xpressbees.png",
  },
  {
    name: "Blue Dart",
    src: "https://sureship.in/assets/img/delivery-partners/bluedart-dhl.png",
  },
  {
    name: "FedEx",
    src: "https://sureship.in/assets/img/delivery-partners/fedex.png",
  },
  {
    name: "Aramex",
    src: "https://sureship.in/assets/img/delivery-partners/aramex.png",
  },
  {
    name: "Ecom Express",
    src: "https://sureship.in/assets/img/delivery-partners/ecomexpress.png",
  },
  {
    name: "Ekart",
    src: "https://sureship.in/assets/img/delivery-partners/ekart.png",
  },
];

const features = [
  {
    title: "Multi-Courier Integration",
    description:
      "Seamlessly connect with multiple courier partners from a single platform, eliminating the need to manage individual accounts.",
  },
  {
    title: "Smart Courier Allocation",
    description:
      "Automatically assign shipments to the most suitable courier based on cost, delivery speed, and performance history.",
  },
  {
    title: "Real-Time Order Sync",
    description:
      "Sync orders and shipment statuses across platforms like Shopify, WooCommerce, and others in real time.",
  },
  {
    title: "Bulk Label & Invoice Generation",
    description:
      "Save time with one-click generation of shipping labels, invoices, and manifests for all your orders.",
  },
  {
    title: "NDR & RTO Management",
    description:
      "Reduce non-deliveries and returns with automated NDR follow-ups and performance analytics for better decision-making.",
  },
  {
    title: "Unified Dashboard & Reporting",
    description:
      "Track shipments, monitor courier performance, and get actionable insights from one central dashboard.",
  },
];

export default function Main() {
  // const router = useRouter();
  const items = [
    {
      number: "1",
      title: "Operational Efficiency:",
      description:
        "High RTO rates can strain your operations, leading to increased workload, processing time, and operational costs.",
    },
    {
      number: "2",
      title: "Financial Implications:",
      description:
        "RTOs result in additional costs, such as return shipping, restocking, and potential refunds, which can eat into your profits.",
    },
    {
      number: "3",
      title: "Customer Satisfaction:",
      description:
        "Frequent RTOs can frustrate customers, leading to dissatisfaction and potential loss of loyal clientele.",
    },
    {
      number: "4",
      title: "Inventory Blockage:",
      description:
        "RTOs can disrupt inventory management, causing overstocking or stockouts, which affects your supply chain efficiency.",
    },
    {
      number: "5",
      title: "Brand Reputation:",
      description:
        "High RTO rates can damage your brand's reputation, as customers may perceive your business as unreliable or inefficient.",
    },
    {
      number: "6",
      title: "Time and Resources:",
      description:
        "Dealing with RTOs consumes valuable time and resources that could be better spent on business growth and improvement initiatives.",
    },
  ];
  return (
    <>
      <div className="min-h-screen  bg-white flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-20 py-10 pt-20 gap-10 ">
        <div className="relative z-10 w-full md:w-3/4 flex justify-center ">
          <Image
            src="/image/e (70).jpg"
            alt="Delivery Guy"
            width={1600}
            height={1200}
            className="object-cover w-full max-w-4xl rounded-xl"
          />
        </div>

        <div className="w-auto">
          <div className="px-4 py-6 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
              <div>Streamline Your Supply Chain with SureShip</div>
              <div className="text-blue-800 mt-2">
                Efficient, Reliable, On-Time Delivery Solutions
              </div>
            </h1>

            {/* Features Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow flex items-center justify-center gap-4 text-center">
                <div className="bg-blue-100 text-blue-600 rounded-full p-3">
                  <FaHeadphonesAlt className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <p className="text-black font-medium text-md sm:text-xl">
                  Support team that actually listens
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow flex items-center justify-center gap-4 text-center">
                <div className="bg-blue-100 text-blue-600 rounded-full p-3">
                  <LuWeight className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <p className="text-black font-medium text-md sm:text-xl">
                  Lowest weight dispute %age
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow flex items-center justify-center gap-4 text-center">
                <div className="bg-blue-100 text-blue-600 rounded-full p-3">
                  <TbCalendarUser className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <p className="text-black font-medium text-md sm:text-xl">
                  On time COD Remittance
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow flex items-center justify-center gap-4 text-center">
                <div className="bg-blue-100 text-blue-600 rounded-full p-3">
                  <LiaShippingFastSolid className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <p className="text-black font-medium text-md sm:text-xl">
                  Start shipping from just ₹19
                </p>
              </div>
            </div>

            {/* Call-to-Action Button */}
            <div className="mt-10">
              <button
                onClick={() => (window.location.href = "/track")}
                className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-blue-700 transition"
              >
                Start Shipping Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className=" py-16 px-4 min-h-min bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-3xl font-bold text-gray-900">
            Cost-effective and{" "}
            <span className="text-blue-800">
              seller-friendly shipping solutions.
            </span>
          </h2>
          <p className="mt-4 text-sm md:text-lg text-gray-700">
            SureShip excels in delivering your products across{" "}
            <span className="text-blue-600 font-semibold">
              29,000+ pin codes
            </span>{" "}
            swiftly and cost-effectively. Unmatched in providing the best rates
            and fastest delivery times.
          </p>
        </div>
      </section>

      <div className="min-h-96 bg-white py-5 px-6 md:px-16 lg:px-32 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="relative w-full lg:w-1/2 mb-10 lg:mb-0 order-2">
          <div className="absolute top-0 left-0 bg-white shadow-md px-4 py-2 rounded-md flex items-center gap-2">
            <span className="text-blue-600 font-semibold">Delivery</span>
            <span className="text-gray-800 font-bold">Performance</span>
          </div>

          <div className="relative z-10 max-w-3xl w-full mb-5 md:mb-0 ">
            <Image
              src="/image/e (68).jpg"
              alt="Delivery Guy"
              width={1200}
              height={950}
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left order-1">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">Simplify</span>, Deliver Better
          </h2>
          <p className="text-gray-600 mb-6">
            Forget all shipping worries and choose effortless deliveries. Ship
            your packages safely, quickly, and stress-free with the #1 shipping
            aggregator platform.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-blue-600 text-xl">✈️</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Shipping Intelligence
                </h3>
                <p className="text-gray-600">
                  Sit back & relax. Boost delivery performance with the best
                  courier recommendations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-blue-600 text-xl">📦</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Early COD Remittance
                </h3>
                <p className="text-gray-600">
                  Get your COD remittances as early as possible in just D+2
                  days.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-blue-600 text-xl">📄</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Document Delivery
                </h3>
                <p className="text-gray-600">
                  Easily courier all types of documents—legal, medical,
                  financial, and more.
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => (window.location.href = "/track")}
            className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Explore More
          </button>
        </div>
      </div>

      <div className="min-h-screen bg-white py-5 px-6 md:px-16 lg:px-32 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="relative w-full lg:w-1/2 mb-10 lg:mb-0">
          <div className="absolute top-0 left-0 bg-white shadow-md px-4 py-2 rounded-md flex items-center gap-2">
            <span className="text-blue-600 font-semibold">Delivery</span>
            <span className="text-gray-800 font-bold">Performance</span>
          </div>

          <div className="relative z-10 max-w-3xl w-full mb-5 md:mb-0 ">
            <Image
              src="/image/e (46).jpg"
              alt="Delivery Guy"
              width={1200}
              height={950}
              className="object-cover"
            />
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">Affordable shipping</span>, seamless
            customer experience.
          </h2>
          <p className="text-gray-600 mb-6">
            SureShip goes the extra mile to elevate every delivery. Turn
            standard shipping into standout service that builds lasting customer
            loyalty. With SureShip, you create memorable post-purchase
            experiences that keep customers coming back
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-blue-600 text-xl">✈️</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Unified Tracking Page
                </h3>
                <p className="text-gray-600">
                  Allow customers to track orders on your own website instead of
                  a carrier website.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-blue-600 text-xl">📦</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Real Time Status Updates
                </h3>
                <p className="text-gray-600">
                  Reduce where is my order (WISMO) calls with real-time delivery
                  updates via WhatsApp, Email, SMS alerts.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-blue-600 text-xl">📄</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Returns & Exchange
                </h3>
                <p className="text-gray-600">
                  Manage your returns & exchanges effortlessly starting right
                  from your website.
                </p>
              </div>
            </div>
          </div>

          {/* <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
            Request a Demo
          </button> */}
        </div>
      </div>

      <section className="bg-white py-12 px-4 sm:px-6 lg:px-16 min-h-min">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-gray-700 mb-2">
              Simplified Logistics!
            </h4>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-6">
              <span className="text-blue-600">Unified Channels & </span>
              <br className="hidden sm:block" />
              Flexible Courier Integration
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              Explore 50+ integrations that make your
              <br className="hidden sm:block" />
              day-to-day workflow more efficient and
              <br className="hidden sm:block" />
              familiar.
            </p>
            <button
              onClick={() => (window.location.href = "/track")}
              className="bg-blue-600 text-white text-base sm:text-lg font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded shadow hover:bg-blue-700 transition"
            >
              Explore Integrations &gt;&gt;
            </button>
          </div>

          {/* Right Content */}
          <div className="relative w-full h-64 sm:h-96 md:h-[500px]">
            <div
              className="absolute inset-0 rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url('/image/e (65).jpg')` }}
            ></div>
          </div>
        </div>
      </section>

      {/* <section className="bg-white py-16 px-4 md:px-20 min-h-96">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold text-blue-600 mb-4">
            Transit Partners
          </h2>
          <p className="text-gray-700 mb-10 max-w-2xl">
            We have partnered with leading courier partners to provide you one
            stop solution for your courier and logistics to give your best in
            industry rates with competitive pricing and top edge service.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="bg-white p-6 flex items-center justify-center shadow-lg rounded-lg h-32"
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  width={200}
                  height={50}
                  className="object-contain h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <div className="bg-white to-blue-50 py-12 px-4 md:px-16">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-12 gap-2">
          How Our Courier Aggregation Streamlines{" "}
          <span className="text-blue-600">Ecommerce Logistics</span>
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                {/* <div className="text-blue-600 text-3xl">{feature.icon}</div> */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="bg-white py-10 px-4 md:px-20">
        <h2 className="text-4xl md:text-4xl font-semibold text-blue-600 mb-8 text-center">
          Integration Partners
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-center max-w-6xl mx-auto">
          <div className="bg-white p-4 flex items-center justify-center shadow-lg rounded">
            <img
              src="https://sureship.in/assets/img/delivery-partners/delhivery.png"
              alt="Amazon"
              className="h-20"
            />
          </div>
          <div className="bg-white p-4 flex items-center justify-center shadow-lg  rounded">
            <img
              src="https://sureship.in/assets/img/delivery-partners/shadowfax.png"
              alt="Shopify"
              className="h-20"
            />
          </div>
          <div className="bg-white p-4 flex items-center justify-center shadow-lg  rounded">
            <img
              src="	https://sureship.in/assets/img/delivery-partners/xpressbees.png"
              alt="PrestaShop"
              className="h-20"
            />
          </div>
          <div className="bg-white p-4 flex items-center justify-center shadow-lg  rounded">
            <img
              src="https://sureship.in/assets/img/delivery-partners/bluedart-dhl.png"
              alt="WooCommerce"
              className="h-20"
            />
          </div>
          <div className="bg-white p-4 flex items-center justify-center shadow-lg  rounded">
            <img
              src="https://sureship.in/assets/img/delivery-partners/fedex.png"
              alt="OpenCart"
              className="h-20"
            />
          </div>
          <div className="bg-white p-4 flex items-center justify-center shadow-lg  rounded">
            <img
              src="https://sureship.in/assets/img/delivery-partners/aramex.png"
              alt="Magento"
              className="h-20"
            />
          </div>
          <div className="bg-white p-4 flex items-center justify-center shadow-lg  rounded">
            <img
              src="https://sureship.in/assets/img/delivery-partners/ecomexpress.png"
              alt="Unicommerce"
              className="h-20"
            />
          </div>
          <div className="bg-white p-4 flex items-center justify-center shadow-lg  rounded">
            <img
              src="https://sureship.in/assets/img/delivery-partners/ekart.png"
              alt="WordPress"
              className="h-20"
            />
          </div>
          <div className="bg-white p-4 flex items-center justify-center shadow-lg  rounded">
            <img
              src="https://sureship.in/assets/img/integration-partners/amazon.png"
              alt="StoreHippo"
              className="h-20"
            />
          </div>
        </div>
      </div> */}

      <div className="min-h-96 bg-white p-6 md:p-10">
        <div className="max-w-full mx-auto bg-white overflow-hidden flex flex-col lg:flex-row items-center">
          {/* Left Section: Content */}
          <div className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-16">
            <h1 className="text-2xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Increase Profitability with SureShip <br />
              <span className="text-blue-700">RTO Suite</span>
            </h1>
            <p className="text-gray-700 text-lg md:text-xl mb-8">
              Unlock the power of automation to reduce your Return-to-Origin
              (RTO) rate by up to 50% and significantly increase your revenue.
              Our smart autopilot system streamlines logistics, prevents failed
              deliveries, and improves overall efficiency—helping your business
              grow faster, operate smarter, and deliver better results
              effortlessly.
            </p>
            {/* <button className="bg-blue-700 hover:bg-blue-800 transition-all duration-200 text-white text-lg font-medium py-3 px-8 rounded-full shadow-md">
              Get Started Today
            </button> */}
          </div>

          {/* Right Section: Image */}
          {/* <div className="w-full lg:w-1/2 p-6 flex justify-center items-center"> */}
             <div className="relative z-10 w-full md:w-3/4 flex justify-center ">
          <Image
            src="/image/e (71).jpg"
            alt="Delivery Guy"
            width={1600}
            height={1200}
            className="object-cover w-full max-w-4xl rounded-xl"
          />
        </div>
          {/* </div> */}
        </div>
      </div>

      <div className="bg-white py-12 px-4 sm:px-6 lg:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-black">
          What is the impact of RTOs on your brand?
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-black">
          {items.map((item) => (
            <div
              key={item.number}
              className="bg-white p-6 rounded-lg shadow-md flex gap-4 items-start"
            >
              <div className="flex items-center justify-center min-w-10 min-h-10 w-10 h-10 rounded-full bg-[#00aaff] text-white font-bold shadow-md">
                {item.number}
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
