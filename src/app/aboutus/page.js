import Image from "next/image";
import React from "react";

// const leaders = [
//   {
//     name: "Prem jha",
//     title: "Co-Founder & Chief Technology Officer",
//     image: "/image/e (80) (1).jpg",
//   },
//   {
//     name: "Mohit panwar",
//     title: "Co-Founder & Chief Business Officer",
//     image: "/image/e (80) (1).jpg",
//   },
//   {
//     name: "Tranjeet",
//     title: "Co-Founder & Head of Business Strategy",
//     image: "/image/e (80) (1).jpg",
//   },
//   {
//     name: "Harpreet singh",
//     title: "Chief Financial Officer",
//     image: "/image/e (80) (1).jpg",
//   },
//   {
//     name: "Manjot singh",
//     title: "Chief Marketing Officer",
//     image: "/image/e (80) (1).jpg",
//   },
// ];

const leader = [
  {
    name: "Parag Aggarwal",
    title: "Frontend Developer",
    image: "/image/Parag.png",
  },
  {
    name: "Danish khan",
    title: "Frontend Developer",
    image: "/image/danish.png",
  },
  {
    name: "Manav panwar",
    title: "AI/ML developer",
    image: "/image/Manav.png",
  },
  {
    name: "Gopal Basudevan",
    title: "Backend developer",
    image: "/image/Gopal.png",
  },
  {
    name: "Neha veram",
    title: "Frontend Developer",
    image: "/image/Neha.png",
  },
];
export default function Page() {
  const locations = [
    {
      city: "Gurgaon",
      address:
        "The office pass , 7th floor ,Paras Downtown center,54, Golf course rd,Near sector 53,DLF phase 5,Gurugram Haryana,122003",
      highlight: true,
    },
    {
      city: "DELHI ",
      address:
        "Ground Flr, 101, A-17/2, Street no-2,Mahipalpur Ex, Delhi-110037",
    },
    {
      city: "MUMBAI",
      address:
        "Office No-5 B Vakratund Soc. Shambhaji NagarOpp- Vijay Nagar Sahar Road,Andheri East Mumbai – 400069",
    },
    {
      city: "BANGALORE",
      address:
        "Ist Cross, Office No- 5. Vinayaka Nagar,Wilson Garden Near Wilson garden police station,Bangalore-560030",
    },
    {
      city: "HYDERABAD",
      address: "1-16-27/16, Prakash Nagar,Begumpet, Hyderabad- 500016",
    },
    {
      city: "KOLKATA",
      address:
        "171/C/1 Mannat Apartment, Vinay Singh Colony,Picnic Garden, Kolkata 700039",
    },
    {
      city: "CHENNAI",
      address:
        "Ground Flr, Amarjohn street,choolaimedu high road (nungambakkam) -600094.",
    },
    {
      city: "PATNA",
      address:
        "Office No- 151, Shanti Niwas J.P road,Mahendru, Patna Bihar 800006",
    },
    {
      city: "JAMMU",
      address:
        "house no 41 sector 11 nanak nagar shiva ji chowk jammu,Jammu – 180004",
    },
    {
      city: "JALANDHAR",
      address:
        "Off No. 169, Beant Nagar,Nera- PAP Line, Jalandhar,Pin code 144006",
    },
    {
      city: "CHANDIGARH",
      address:
        "Plot no 94 City, Enclave Pabhat Road Zirakpur,Chandigarh-140603.",
    },
    {
      city: "GUWAHATI",
      address:
        "By Lane no 3, H. No-09, Girijananda Choudhury Path, Birubari, Shankarpur, Guwahtati-781016,Phone – 011-43084859",
    },
    {
      city: "JAIPUR",
      address: "F7, Subhash Nagar Shopping Center, Jaipur – 302016",
    },
    {
      city: "Pune",
      address:
        "Survey no-71, Shreenath Nagar, BT Kawade Road, Gopal Steel, Ghorpadi Gaon, Pune-411001",
    },
    {
      city: "Ahmedabad",
      address: "L6, Ghantakarna Market, Sarangpur, Ahmedabad-380002",
    },
    {
      city: "Surat",
      address: "1/J, Japan Market Ring Road, Surat-395002,Phone – 011-43084859",
    },
    {
      city: "Ranchi",
      address: "Shop No-83, Sainik Market Main Road, Ranchi-834001",
    },
    {
      city: "Lucknow",
      address: "Shyamkung colony, khramnagar, Lucknow-226022",
    },
  ];
  return (
    <>
      <section className="relative h-screen w-full">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/Logisticsbus.jpg"
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
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-blue-950">
              Powering Seamless Logistics with Speed, Precision, and Smart
              Technology
            </h1>

            <p className="mt-4 text-md md:text-lg text-black font-bold">
              Empowering businesses of every size—from startups to global giants
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-100 text-black py-16 px-4 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-extrabold text-blue-900 mb-4">
              About <span className="text-blue-600">Sureship</span>
            </h2>
            <div className="w-16 h-1 bg-blue-500 rounded-full mb-6"></div>
            <p className="text-gray-700 mb-5 leading-relaxed">
              We are India’s largest fully integrated logistics provider. We aim
              to build the operating system for commerce, through a combination
              of world-class infrastructure, high-quality logistics operations,
              and cutting-edge technology.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Since 2011, we've fulfilled over 2 billion orders across India,
              serving 18,700+ pin codes with 24 sort centres, 94 gateways, 2880
              direct delivery centres, and a 57,000+ strong team, working round
              the clock.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <div className="relative w-full pb-[56.25%]">
              {" "}
              {/* 16:9 aspect ratio */}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/9fJVaxbiKPc"
                title="About Sureship"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 px-4 py-12 md:py-20 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Profile Card */}
          <div className="relative text-center md:text-left">
            <div className="relative w-36 h-36 mx-auto md:mx-0">
              <Image
                src="/image/jha.png"
                alt="Prem Jha"
                fill
                className="object-cover rounded-full border-4 border-white"
              />
            </div>
            <div className="bg-white rounded-xl p-4 mt-4 shadow-md inline-block mx-auto md:mx-0">
              <p className="text-blue-900 font-bold">Prem Jha</p>
              <p className="text-sm text-gray-500">
                Founder and CEO at Ante Air Logistics | Founder at SureShip.in
              </p>
            </div>

            {/* Optional Decoration Icon */}
            <div className="absolute -top-6 -left-6 w-20 h-20">
              <Image
                src="/image/e (4) (1).png"
                alt="flag"
                width={40}
                height={40}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="bg-white rounded-xl p-6 md:p-10 shadow-md">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              SureShip Pioneers
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Meet the visionary behind AnteAir Logistic and SureShip, two
              companies reshaping the logistics industry in India and beyond.
            </p>
            <a
              href="https://www.linkedin.com/in/prem-jha-300b4524/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-blue-900 hover:bg-blue-500 text-white font-semibold px-5 py-2 rounded mb-6">
                Learn more
              </button>
            </a>

            {/* Quote Box */}
            <div className="bg-indigo-50 rounded-lg p-6 text-sm text-gray-800 leading-relaxed">
              <p className="italic text-blue-900 font-semibold mb-4">
                “Starting with a single warehouse, we built an intelligent
                logistics network that today powers thousands of businesses
                across India. Our mission was clear: solve real logistics
                challenges with speed, scale, and service.”
              </p>
              <p>
                From streamlining supply chains to enabling faster last-mile
                deliveries, AnteAir Logistic and SureShip are at the forefront
                of tech-driven logistics. With a deep understanding of
                transportation, warehousing, and cross-border trade, our
                platforms bring transparency and trust to shipping operations.
              </p>
              <p className="mt-4">
                By leveraging data, automation, and a passion for customer
                service, we’ve built infrastructure that adapts to modern
                commerce—whether it's D2C shipping or large-scale enterprise
                fulfillment.
              </p>
              <p className="mt-4 font-medium">
                Today, we proudly support thousands of clients with logistics
                solutions that are fast, reliable, and scalable—helping India
                move smarter every day.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 px-4 py-12 md:py-20 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Profile Card */}
          <div className="relative text-center md:text-left">
            <div className="relative w-36 h-36 mx-auto md:mx-0">
              <Image
                src="/image/image.png" // Replace with actual image if needed
                alt="Mohit Panwar"
                fill
                className="object-cover rounded-full border-4 border-white"
              />
            </div>
            <div className="bg-white rounded-xl p-4 mt-4 shadow-md inline-block mx-auto md:mx-0">
              <p className="text-blue-900 font-bold">Mohit Panwar</p>
              <p className="text-sm text-gray-500">
                CTO at SureShip | Founding Tech Team
              </p>
            </div>

            {/* Optional Decoration Icon */}
            <div className="absolute -top-6 -left-6 w-20 h-20">
              <Image
                src="/image/e (4) (1).png"
                alt="flag"
                width={40}
                height={40}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="bg-white rounded-xl p-6 md:p-10 shadow-md">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              SureShip Tech Leadership
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Meet the technology visionary behind SureShip. From leading core
              tech innovations to building robust platforms, Mohit Panwar plays
              a crucial role in shaping the future of logistics through
              technology.
            </p>
            <a
              href="https://www.linkedin.com/in/mohitpanwar2111/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-blue-900 hover:bg-blue-500 text-white font-semibold px-5 py-2 rounded mb-6">
                Learn more
              </button>
            </a>

            {/* Quote Box */}
            <div className="bg-indigo-50 rounded-lg p-6 text-sm text-gray-800 leading-relaxed">
              <p className="italic text-blue-900 font-semibold mb-4">
                “We started SureShip with a clear vision: to enable scalable,
                intelligent, and reliable logistics powered by cutting-edge
                tech.”
              </p>
              <p>
                As a core member of the founding tech team and with prior
                experience at DTDC Logistics, Mohit brought critical
                infrastructure knowledge to SureShip. His work focuses on
                building scalable backend systems, real-time tracking, and
                high-performing APIs that support both D2C and enterprise-grade
                logistics.
              </p>
              <p className="mt-4">
                At DTDC, he contributed to several automation and digital
                transformation projects. Today, he applies that expertise at
                SureShip to enhance platform performance and drive product
                innovation.
              </p>
              <p className="mt-4 font-medium">
                By supporting the tech team with strong architecture principles
                and agile execution, Mhit ensures SureShip stays ahead in the
                fast-moving world of logistics technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-gradient-to-br from-blue-50 to-blue-50 py-20 px-4 md:px-20 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
            Meet Our <span className="text-blue-600">Leaders</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
            Visionaries driving the innovation and growth of SureShip
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto scroll-smooth px-2 no-scrollbar pb-4 ">
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                className="min-w-[260px] max-w-sm bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex-shrink-0"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <div className="p-5 text-center">
                  <h3 className="text-xl font-semibold text-blue-900 mb-1">
                    {leader.name}
                  </h3>
                
                  {leader.title && (
                    <p className="text-sm text-gray-500">{leader.title}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="bg-blue-50 text-[#0a0055] py-20 px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Image
              src="/image/e (4) (1).png"
              alt="Trophy"
              width={48}
              height={48}
              className="object-contain"
            />
            <h2 className="text-2xl md:text-4xl font-bold">
              Our developers are <span className="text-blue-600">SureShip</span>{" "}
              logistics experts.
            </h2>
          </div>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            At SureShip, our logistics technology team drives innovation and
            automation in supply chain solutions. We bring efficiency, accuracy,
            and agility to global logistics operations through cutting-edge
            software development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-items-center">
          {leader.map((leader, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transform transition duration-300 hover:-translate-y-2 w-60 text-center overflow-hidden"
            >
              {/* Profile Image */}
              <div className="relative  z-10">
                <div className="w-24 h-24 rounded-full border-[6px] border-white bg-blue-50 mx-auto shadow-md overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name & Title */}
              <div className="py-5 px-4">
                <h3 className="text-lg font-semibold">{leader.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{leader.title}</p>
              </div>

              {/* Footer Tag */}
              <div className="bg-gradient-to-r from-blue-900 to-purple-800 py-2 px-3 text-xs text-white font-semibold tracking-wide">
                {leader.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-blue-50 px-4 md:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 border-l-8 border-blue-800 pl-6">
            OUR ORGANIZATION
          </h2>

          {/* Top Grid: Text + Image + Sidebar */}
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left Text Block */}
            <div className="lg:col-span-1 text-gray-700 text-[0.95rem] leading-relaxed space-y-5">
              <p>
                <strong className="text-blue-900 font-semibold">
                  SureShip
                </strong>
                , a subsidiary of{" "}
                <strong className="text-blue-900 font-semibold">
                  CloudAct Business Services Pvt Ltd.
                </strong>{" "}
                provides impeccable logistics solutions to reach every corner of
                the country where a business requires. We store, move, and
                deliver your products with customized services to meet the
                demands of your business – on time and in full, every time.
              </p>
              <p>
                Whether a small, medium, or large business setup, we cater to
                every logistics need with cutting-edge technology and modern
                systems.
              </p>
            </div>

            {/* Center Image */}
            <div className="flex justify-center items-center">
              <img
                src="/image/e (78).jpg"
                alt="Logistics City"
                className="rounded-xl w-full h-auto object-cover shadow-xl border-2 border-blue-100"
              />
            </div>

            {/* Right Sidebar */}
            <div className="shadow-lg rounded-xl overflow-hidden border border-blue-800">
              <div className="bg-blue-900 text-white py-3 px-5 font-semibold text-sm tracking-wide">
                WHAT WE OFFER
              </div>
              <ul className="text-blue-900 bg-white divide-y divide-blue-100 text-sm">
                {[
                  "Air Services",
                  "Reverse Logistics",
                  "Rail Services",
                  "eCommerce Logistics",
                  "Warehousing",
                  "Surface Transportation",
                ].map((item) => (
                  <li
                    key={item}
                    className="py-3 px-5 hover:bg-blue-50 transition duration-200 ease-in-out cursor-pointer"
                  >
                    <span className="font-medium text-blue-800">&gt;</span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Grid: Image + Why Choose Us */}
          <div className="grid lg:grid-cols-2 gap-10 mt-16 items-start">
            {/* Bulb Image */}
            <div className="flex justify-center items-center">
              <img
                src="/image/e (79).jpg"
                alt="Innovation"
                className="rounded-xl w-full h-auto object-cover shadow-xl border-2 border-gray-200"
              />
            </div>

            {/* Why Choose Us */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                WHY CHOOSE US
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-[0.95rem] leading-relaxed">
                <li>Committed time-sensitive delivery</li>
                <li>Dedicated customer support</li>
                <li>Door-to-door services</li>
                <li>Tailor-made customized solutions</li>
                <li>Network in all major and Tier-2 towns</li>
                <li>Dedicated key accounts manager</li>
                <li>On-time COD remittance</li>
                <li>Single-window solutions for all logistics needs</li>
                <li>Customized shipment packaging solutions</li>
                <li>Fast & reliable services</li>
                <li>Competitive prices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 text-black py-16 px-4 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-extrabold text-blue-900 mb-4">
              Our <span className="text-blue-600">Mission</span>
            </h2>
            <div className="w-16 h-1 bg-blue-500 rounded-full mb-6"></div>
            <p className="text-gray-800 mb-5 leading-relaxed">
              Our mission is to help customers run resilient supply chains at
              minimal cost. We support 30K+ clients including e-commerce brands,
              SMEs, and enterprises across FMCG, retail, electronics, lifestyle,
              automotive, and more.
            </p>
            <p className="text-gray-800 leading-relaxed">
              This is made possible through modern logistics infrastructure,
              automation, global partnerships, and our own logistics operating
              system that creates cross-service synergy and delivers unbeatable
              customer value.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-blue-50 py-16 px-4 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-10 text-center">
            <span className=" pb-1">Key Corporate Locations</span>{" "}
            <span className="text-indigo-600">across India</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((loc) => (
              <div
                key={loc.city}
                className="bg-white border-l-4 border-blue-200 rounded-xl shadow-lg p-5 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
              >
                <h3
                  className={`text-lg font-bold ${
                    loc.highlight ? "text-blue-700" : "text-blue-800"
                  }`}
                >
                  {loc.city}
                  {loc.highlight && (
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
                  )}
                </h3>
                <p className="text-black text-sm mt-2">{loc.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
