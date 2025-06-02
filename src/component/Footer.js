"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0f2647] text-white pt-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 pb-10">
        {/* Logo & About */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="https://sureship.in/assets/img/Sureship.png"
              alt="SureShip Logo"
              className="h-10 object-contain"
            />
          </div>
          <p className="text-sm text-gray-300">
            <span className="font-bold text-white">SureShip</span> offers an
            AI-based, smoother, easier, and reliable platform to manage your
            end-to-end shipping needs.
          </p>
          <div className="flex gap-4 mt-4 text-lg">
            <a href="#" className="hover:text-[#38BDF8]">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-[#38BDF8]">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-[#38BDF8]">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-[#38BDF8]">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-base font-semibold text-white mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-[#38BDF8]">
                Tutorials
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#38BDF8]">
                Agreement
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#38BDF8]">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#38BDF8]">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-semibold text-white mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-[#38BDF8]">
                Tracking
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#38BDF8]">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#38BDF8]">
                Login/Register
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#38BDF8]">
                API Docs
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-base font-semibold text-white mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-[#38BDF8]">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#38BDF8]">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#38BDF8]">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#38BDF8]">
                Careers
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-sm text-gray-400 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left">
          © Copyright 2024{" "}
          <span className="font-bold text-white">SureShip</span>. All Rights
          Reserved.
        </p>
        <p className="text-center md:text-right mt-2 md:mt-0">
          Powered by:{" "}
          <span className="font-bold text-white">
            CloudAct Business Services Pvt. Ltd.
          </span>
        </p>
      </div>
    </footer>
  );
}
