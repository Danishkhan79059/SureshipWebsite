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
      <section className="bg-white text-black py-12 px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-black">About</span>{" "}
              <span className="text-gray-700">Sureship</span>
              <div className="w-16 h-1 bg-red-500 mt-1"></div>
            </h2>
            <p className="text-gray-700 mb-4">
              We are India’s largest fully integrated logistics provider. We aim
              to build the operating system for commerce, through a combination
              of world-class infrastructure, logistics operations of the highest
              quality and cutting-edge engineering and technology capabilities.
            </p>
            <p className="text-gray-700">
              Since its inception in 2011, our team has successfully fulfilled
              over 2 billion orders across India. We have built a nation-wide
              network with a presence in every state, servicing over 18,700+ pin
              codes. 24 automated sort centres, 94 gateways, 2880 direct
              delivery centres, and a team of over 57,000 people make it
              possible for us to deliver 24 hours a day, 7 days a week, 365 days
              a year.
            </p>
          </div>
          <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        </div>
      </section>
      <section className="bg-white text-black py-12 px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-black">Our</span>{" "}
              <span className="text-gray-700">Mission</span>
              <div className="w-16 h-1 bg-red-500 mt-1"></div>
            </h2>
            <p className="text-gray-700 mb-4">
              Our mission is to enable customers to operate flexible, reliable
              and resilient supply chains at the lowest costs. We provided
              supply chain solutions to a diverse base of over 30K+ active
              customers such as e-commerce marketplaces, direct-to-consumer
              e-tailers and enterprises and SMEs across several verticals such
              as FMCG, consumer durables, consumer electronics, lifestyle,
              retail, automotive and manufacturing.
            </p>
            <p className="text-gray-700">
              This is achieved through high-quality logistics infrastructure and
              network engineering, a vast network of domestic and global
              partners and significant investments in automation, all of which
              are orchestrated by our self-developed logistics operating system
              that drive network synergies within and across our services and
              enhance our value proposition to customers.
            </p>
          </div>
        
        </div>
      </section>
      <div className="bg-white text-black py-12 px-4 md:px-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
          <span className="border-b-4 border-red-600 pb-1">
            Key Corporate locations
          </span>{" "}
          <span className="text-gray-600">across the India</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {locations.map((loc) => (
              <div key={loc.city}>
                <h3
                  className={`text-lg font-semibold ${
                    loc.highlight ? "text-red-600" : "text-gray-800"
                  }`}
                >
                  {loc.city}{" "}
                  {loc.highlight && (
                    <span className="inline-block w-2 h-2 bg-red-600 rounded-full ml-1"></span>
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
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
