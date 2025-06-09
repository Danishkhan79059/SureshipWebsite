import Image from "next/image";

export default function Page() {
  const locations = [
    {
      city: "Gurgaon",
      address: "Plot 5, sector 44 Gurgaon, Haryana - 122001",
      highlight: true,
    },
    {
      city: "Goa",
      address:
        "Plot No.59A-1 and 59A-2, Pilerne Industrial Estate, Pilerne, Bardez, Goa - 403521",
    },
    {
      city: "Bangalore",
      address:
        "Prestige Towers, 6th floor, 99 & 100, Residency Rd, infront of Cash Pharmacy, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka - 560025",
    },
    {
      city: "Hyderabad",
      address:
        "Aurobindo Galaxy, Plot No. 1 forming part of Sy. No. 83/1, Hyderabad Knowledge City, Raidurg, Hyderabad - 500081",
    },
    {
      city: "Mumbai",
      address:
        "Prima Bay, B-wing, 6th floor, CTS No. 117A/1D, Gate no. 5, TC - II, Saki Vihar Road, Powai, Mumbai - 400072",
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

      <section className="bg-white text-black py-16 px-4 md:px-20">
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
            <iframe
              className="w-full h-64 md:h-full"
              src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID"
              title="About Sureship"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
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

      <section className="bg-white text-black py-16 px-4 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-6">
            <span className=" border-blue-600 pb-1">
              Key Corporate Locations
            </span>{" "}
            <span className="text-gray-600">across India</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-8">
              {locations.map((loc) => (
                <div key={loc.city}>
                  <h3
                    className={`text-xl font-semibold ${
                      loc.highlight ? "text-blue-600" : "text-gray-800"
                    }`}
                  >
                    {loc.city}
                    {loc.highlight && (
                      <span className="inline-block w-2 h-2 bg-blue-600 rounded-full ml-1"></span>
                    )}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">{loc.address}</p>
                </div>
              ))}
            </div>

            <div className="w-full flex justify-center">
              <img
                src="/image/map.jpg"
                alt="India Map"
                className="max-w-full h-auto object-contain rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
