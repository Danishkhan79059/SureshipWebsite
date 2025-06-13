"use client";
import React from "react";
import Image from "next/image";
import { PiHandshakeFill } from "react-icons/pi";
import { FaDatabase } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { MdAutorenew } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";

const benefits = [
  {
    icon: "/image/e (72).jpg",
    title: "Low Startup Cost",
    description:
      "Start your logistics business with SureShip at minimal initial investment.",
  },
  {
    icon: "/image/e (73).jpg",
    title: "Quick Revenue Generation",
    description:
      "Start earning from day one with our easy-to-setup logistics system.",
  },
  {
    icon: "/image/e (74).jpg",
    title: "High Earning Potential",
    description:
      "Earn up to ₹1.5 lakh/month through consistent parcel delivery with incentives.",
  },
  {
    icon: "/image/e (75).jpg",
    title: "Dedicated Support & Training",
    description:
      "Receive full onboarding, 24/7 support, and assistance from our SureShip managers.",
  },
  {
    icon: "/image/e (76).jpg",
    title: "Trusted Logistics Brand",
    description:
      "Partner with SureShip—India’s fast-growing parcel and courier delivery network.",
  },
  {
    icon: "/image/e (77).jpg",
    title: "Boosted by E-commerce Growth",
    description:
      "Deliver for top platforms as part of India’s expanding E-commerce logistics sector.",
  },
  {
    icon: "/image/e (78).jpg",
    title: "Logistics Entrepreneurship",
    description:
      "Build your own delivery service under the SureShip brand and network.",
  },
  {
    icon: "/image/e (79).jpg",
    title: "Smart Logistics Dashboard",
    description:
      "Track deliveries, manage operations, and receive payouts with our ERP-enabled platform.",
  },
];
const features = [
  {
    title: "Manpower",
    description:
      "Sureship manages all your logistics manpower needs by hiring and training professionals for smooth order handling and operational efficiency.",
    icon: "/image/83 (1).png",
  },
  {
    title: "Warehouse",
    description:
      "Your inventory is stored securely in Sureship’s modern warehouses that ensure minimal transit damage and optimized order dispatch.",
    icon: "/image/84 (1).png",
  },
  {
    title: "Last-Mile",
    description:
      "With warehouses located near your customer base, Sureship ensures faster deliveries and significantly reduced logistics costs.",
    icon: "/image/85 (1).png",
  },
];

const syncedBenefits = [
  {
    title: "Centralized Logistics Data",
    icon: <FaDatabase className="text-2xl text-blue-600" />,
  },
  {
    title: "Full Supply Chain Visibility",
    icon: <AiOutlineEye className="text-2xl text-green-600" />,
  },
  {
    title: "Automated Tracking & Updates",
    icon: <MdAutorenew className="text-2xl text-purple-600" />,
  },
  {
    title: "99.9% SLA Compliance",
    icon: <FaRegCheckCircle className="text-2xl text-yellow-500" />,
  },
];

export default function page() {
  return (
    <>
      <section className="relative h-screen w-full ">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/Logisticswarehouse.jpg"
            alt="Background image"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0  bg-opacity-60 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col justify-center h-full text-white px-4 md:px-16 lg:px-32">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-white">
              Grow with SureShip: Explore Exciting Career Paths in E-commerce
              Logistics and Innovation
            </h1>

            <p className="mt-4 text-md md:text-lg text-white font-bold ">
              Fuel your career by joining a thriving team of 60,000+ experts
              shaping how India moves goods, faster and smarter.
            </p>
            <a
              href="mailto:hr@anteairlogistics.com?subject=CV Submission for SureShip"
              className="inline-block mt-6 px-6 py-3 bg-yellow-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg transition duration-300"
            >
              Drop Your CV Here
            </a>

            <p className="mt-2 text-sm text-white">
              Or email directly:{" "}
              <span className="underline">hr@anteairlogistics.com</span>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h2 className="text-4xl sm:text-3xl font-extrabold text-blue-900 leading-tight mb-4">
              <span className="relative inline-block">
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded"></span>
                <span className="relative">Join</span>
              </span>{" "}
              Us
            </h2>
            <p className="text-blue-800 text-lg sm:text-xl mt-6">
              SureShip is India’s largest fully integrated logistics service
              provider.
            </p>
            <p className="text-blue-800 text-lg sm:text-xl mt-3">
              We move fast, operate under pressure, and solve complex business
              problems.
            </p>
            <p className="text-blue-800 text-lg sm:text-xl mt-3">
              Our goal is to attract top talent and offer them leadership
              opportunities in a diverse, inclusive environment.
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 w-full">
            <img
              src="/image/warehouse.jpg"
              alt="Delhivery Warehouse"
              className="w-full h-auto rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section className="bg-blue-50 text-[#0a0055] py-12 px-4 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-medium mb-2">
            Join SureShip and be a part of India's growing logistics revolution!
          </h2>
          <p className="text-lg md:text-xl mb-4">
            Earn up to Rs. 35,000 monthly by delivering parcels across major
            cities. Work part-time or full-time and become your own boss with
            SureShip.
          </p>
          <p className="text-blue-600 text-lg md:text-xl font-semibold mb-8">
            Sign up now and start delivering with SureShip!
          </p>

          <div className="relative flex justify-center">
            <Image
              src="/image/e (8).png" // replace this with your image path
              alt="Delivery Partner"
              width={800}
              height={500}
              className="rounded-md object-cover"
            />

            {/* Badges */}
            <div className="absolute top-6 left-2 sm:left-10 bg-white text-[#0a0055] font-semibold text-sm px-4 py-2 rounded shadow-md border border-yellow-400">
              Monthly Earning ₹35,000
            </div>
            <div className="absolute top-28 left-4 sm:left-24 bg-white text-[#0a0055] font-semibold text-sm px-4 py-2 rounded shadow-md border border-yellow-400">
              Performance-Based Incentives
            </div>
            <div className="absolute bottom-6 left-1/4 sm:left-1/3 bg-white text-[#0a0055] font-semibold text-sm px-4 py-2 rounded shadow-md border border-yellow-400">
              Parcel Insurance Coverage
            </div>
            <div className="absolute bottom-6 right-1/4 sm:right-1/3 bg-white text-[#0a0055] font-semibold text-sm px-4 py-2 rounded shadow-md border border-yellow-400">
              Flexible Shifts
            </div>
            <div className="absolute top-10 right-4 sm:right-10 bg-white text-[#0a0055] font-semibold text-sm px-4 py-2 rounded shadow-md border border-yellow-400">
              Weekly Payouts
            </div>
            <div className="absolute top-1/2 left-2 sm:left-10 transform -translate-y-1/2 bg-white text-[#0a0055] font-semibold text-sm px-4 py-2 rounded shadow-md border border-yellow-400">
              Fuel Reimbursement
            </div>
            <div className="absolute bottom-24 right-4 sm:right-10 bg-white text-[#0a0055] font-semibold text-sm px-4 py-2 rounded shadow-md border border-yellow-400">
              Delivery Training Provided
            </div>
            <div className="absolute top-1/2 right-2 sm:right-10 transform -translate-y-1/2 bg-white text-[#0a0055] font-semibold text-sm px-4 py-2 rounded shadow-md border border-yellow-400">
              Mobile App Support
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-900 mb-6">
            We’re looking for{" "}
            <span className="text-blue-600 font-bold">curious minds</span>
            <br />
            ready to solve challenging business problems.
          </h2>
          <button
            onClick={() => (window.location.href = "/")}
            className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded-full shadow-md transition-all duration-300"
          >
            Explore Careers
          </button>
        </div>
      </section>

      <section className="bg-white py-10 px-4 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-10 border-l-4 border-yellow-400 pl-2">
          SureShip Partner Testimonials
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Left Testimonials */}
          <div className="flex flex-col gap-6 w-full max-w-sm text-black">
            <div className="bg-white p-4 rounded-lg shadow text-sm">
              <p className="font-semibold">Rajeev Sharma</p>
              <p className="text-yellow-500">★★★★☆ 7/4/24</p>
              <p className="mt-2 text-gray-700">
                Working with SureShip has been a game-changer for me. The app is
                smooth, updates are frequent, and it's reliable. I’ve worked
                with other logistics platforms but SureShip provides the most
                consistent experience for delivery partners.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow text-sm">
              <p className="font-semibold">Amit Verma</p>
              <p className="text-yellow-500">★★★★☆ 5/6/24</p>
              <p className="mt-2 text-gray-700">
                Great platform for part-time logistics work. Delivering packages
                is easy with SureShip. Only feedback is to enhance pickup
                notifications during peak hours.
              </p>
            </div>
          </div>

          {/* Phone Screens */}
          <div className="flex gap-4 justify-center items-center">
            <Image
              src="/image/e (87) (1).jpg"
              alt="Playstore Screenshot"
              width={200}
              height={400}
              className="rounded-xl border"
            />
            <Image
              src="/image/e (86) (1).jpg"
              alt="App Screenshot"
              width={200}
              height={400}
              className="rounded-xl border"
            />
          </div>

          {/* Right Testimonials */}
          <div className="flex flex-col gap-6 w-full max-w-sm text-black">
            <div className="bg-white p-4 rounded-lg shadow text-sm text-black">
              <p className="font-semibold">Neha Kumari</p>
              <p className="text-yellow-500">★★★★☆ 6/3/24</p>
              <p className="mt-2 text-gray-700">
                SureShip has made parcel delivery simple and flexible. I can
                choose my slots and the support team is quick to help whenever I
                face any issues.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow text-sm">
              <p className="font-semibold">Mohd Imran</p>
              <p className="text-yellow-500">★★★★★ 6/9/24</p>
              <p className="mt-2 text-gray-700">
                SureShip offers great earning potential for logistics partners.
                I’ve been with them for over a year and the experience has been
                reliable and smooth. Highly recommended for anyone looking to
                get into delivery services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4 sm:px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0055] mb-12">
            <span className="border-l-4 border-blue-900 pl-2">
              Why Partner with SureShip?
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 border border-blue-900 rounded-md p-4"
              >
                <div className="min-w-[40px]">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0a0055] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-4 py-10 md:px-20 bg-blue-50 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-black">
          One-Stop Logistics Solution
        </h2>
        <p className="mb-8 text-gray-600 max-w-2xl mx-auto">
          Through our partnership with Cloudact Pvt Ltd, Sureship delivers a
          seamless and optimized logistics experience tailored to your business.
        </p>
        <div className="flex justify-center items-center gap-6 mb-10">
          <Image
            src="/image/SureshipLogo.png"
            alt="Sureship"
            width={140}
            height={80}
          />
          <PiHandshakeFill size={30} className="text-gray-700" />
          {/* Partnership Icon */}
          <Image
            src="/image/e (10) (1).png"
            alt="Cloudact"
            width={120}
            height={40}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center bg-white rounded-xl shadow-sm hover:shadow-md transition p-4"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mr-6">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">
          What Happens When It’s All Synced Together?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {syncedBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="flex items-center justify-center mb-4 h-12">
                {benefit.icon && typeof benefit.icon === "string" ? (
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={80}
                    height={80}
                    className="mx-auto"
                  />
                ) : (
                  <div className="text-4xl text-blue-600">{benefit.icon}</div>
                )}
              </div>

              <p className="text-base font-semibold text-gray-800">
                {benefit.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-blue-50 min-h-96 flex items-center justify-center px-4 py-10">
        <div className="bg-blue-50 md:flex rounded-lg shadow-lg max-w-6xl w-full overflow-hidden">
          {/* Left Text Section */}
          <div className="w-full md:w-1/2 p-6 md:p-10 space-y-4 text-[#0a0055]">
            <h2 className="text-3xl font-bold">Streamlined</h2>
            <h2 className="text-3xl font-bold">Logistics Solutions</h2>

            <p className="text-sm font-medium">
              SureShip offers fast, secure, and reliable parcel delivery across
              India. We specialize in moving packages efficiently through a
              tech-powered fleet and smart distribution network.
            </p>

            <div className="bg-blue-100 text-blue-900 px-4 py-2 rounded font-semibold w-fit">
              support@sureship.in
            </div>

            <p className="text-sm">
              If you receive emails from any other domain, Do not respond.
              Report them to:
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-white border rounded px-4 py-2 shadow text-sm font-medium">
                logistics@sureship.in
              </div>
              <div className="bg-white border rounded px-4 py-2 shadow text-sm font-medium">
                support@sureship.in
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-4">
            <img
              src="/image/e (1).gif"
              alt="Logistics Illustration"
              className="object-contain w-full max-w-[800px] h-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
}
