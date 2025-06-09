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



// "use client";

// import { useState, useRef } from "react";
// import { GiCalculator } from "react-icons/gi";
// import { FaPlus, FaTrash } from "react-icons/fa";

// export default function Page() {
//   const [showAdvanced, setShowAdvanced] = useState(false);
//   const [boxes, setBoxes] = useState([
//     { noOfBoxes: "", Weightperbox: "", length: "", height: "", width: "" },
//   ]);

//   const multipleBoxesRef = useRef(null);

//   const handleBoxChange = (index, field, value) => {
//     const newBoxes = [...boxes];
//     newBoxes[index][field] = value;
//     setBoxes(newBoxes);
//   };

//   const addBox = () => {
//     setBoxes([
//       ...boxes,
//       { noOfBoxes: "", Weightperbox: "", length: "", height: "", width: "" },
//     ]);
//   };

//   const deleteBox = (index) => {
//     const newBoxes = boxes.filter((_, i) => i !== index);
//     setBoxes(newBoxes);
//   };

//   const [selectedTab, setSelectedTab] = useState("Forward");
//   const [paymentMode, setPaymentMode] = useState("Prepaid");
//   const [packageType, setPackageType] = useState("Plastic cover/Flyer");

//   return (
//     <div className="min-h-96 bg-white p-6 md:p-12 font-sans">
//       <div className="max-w-7xl mx-auto pt-20">
//         {/* Header */}
//         <h1 className="text-4xl md:text-4xl font-extrabold text-blue-900 flex items-center gap-4 mb-12 select-none drop-shadow-lg">
//           <GiCalculator className="text-4xl text-blue-900 animate-pulse" />
//           Rate Calculator
//         </h1>

//         {/* Tabs */}
//         <div className="flex flex-wrap gap-5 mb-12 justify-center md:justify-start">
//           {["Forward", "RTO", "Reverse"].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setSelectedTab(tab)}
//               className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 shadow-md ${
//                 selectedTab === tab
//                   ? "bg-blue-900 text-white shadow-indigo-400/70"
//                   : "bg-white text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-100"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
//           {/* Left Form */}
//           <div className="bg-white rounded-md p-10 shadow-lg border border-indigo-200 hover:shadow-2xl transition-shadow duration-500">
//             <form className="space-y-8">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {/* Pickup Pincode */}
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">
//                     Pickup Pincode
//                   </label>
//                   <input
//                     type="text"
//                     defaultValue="232329"
//                     className="w-full border border-indigo-300 rounded-xl px-5 py-3 text-gray-800 placeholder-indigo-300 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
//                     placeholder="Enter pickup pincode"
//                   />
//                 </div>

//                 {/* Delivery Pincode */}
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">
//                     Delivery Pincode
//                   </label>
//                   <input
//                     type="text"
//                     defaultValue="122001"
//                     className="w-full border border-indigo-300 rounded-xl px-5 py-3 text-gray-800 placeholder-indigo-300 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
//                     placeholder="Enter delivery pincode"
//                   />
//                 </div>
//               </div>

//               {/* Package Type */}
//               <div>
//                 <label className=" text-gray-700 font-medium mb-2 flex items-center justify-between">
//                   <span>Package Type</span>
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setShowAdvanced(true);
//                       setTimeout(() => {
//                         multipleBoxesRef.current?.scrollIntoView({
//                           behavior: "smooth",
//                         });
//                       }, 100);
//                     }}
//                     className="text-indigo-600 text-sm font-semibold underline hover:text-indigo-800 transition"
//                   >
//                     + Advanced Package
//                   </button>
//                 </label>
//                 <select
//                   className="w-full border border-indigo-300 rounded-xl px-5 py-3 text-gray-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
//                   value={packageType}
//                   onChange={(e) => setPackageType(e.target.value)}
//                 >
//                   <option>Plastic cover/Flyer</option>
//                   <option>Box</option>
//                   <option>Envelope</option>
//                 </select>
//               </div>

//               {/* Weight and Dimensions */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">
//                     Weight (gm)
//                   </label>
//                   <input
//                     type="number"
//                     defaultValue="500"
//                     className="w-full border border-indigo-300 rounded-xl px-5 py-3 text-gray-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
//                     min={0}
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 font-medium mb-4">
//                     Dimensions (L × B × H in cm)
//                   </label>
//                   <div className="flex gap-4">
//                     <input
//                       type="number"
//                       placeholder="L"
//                       className="w-1/3 border border-indigo-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
//                       min={0}
//                     />
//                     <input
//                       type="number"
//                       placeholder="B"
//                       className="w-1/3 border border-indigo-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
//                       min={0}
//                     />
//                     <input
//                       type="number"
//                       placeholder="H"
//                       className="w-1/3 border border-indigo-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
//                       min={0}
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Volumetric Info */}
//               <div className="bg-indigo-100 border-l-8 border-indigo-400 p-5 rounded-xl text-indigo-800 text-sm font-semibold select-none shadow-inner">
//                 <p>
//                   <span className="font-bold">
//                     Volumetric Weight Calculation:
//                   </span>
//                   <br />
//                   Surface = (L × B × H) / 5000 <br />
//                   Express = (L × B × H) / 4000
//                 </p>
//               </div>

//               {/* Payment Mode */}
//               <div>
//                 <label className="block text-gray-700 font-semibold mb-4">
//                   Payment Mode
//                 </label>
//                 <div className="flex items-center gap-10">
//                   <label className="flex items-center gap-3 cursor-pointer select-none text-indigo-700 font-medium">
//                     <input
//                       type="radio"
//                       name="payment"
//                       checked={paymentMode === "Prepaid"}
//                       onChange={() => setPaymentMode("Prepaid")}
//                       className="w-5 h-5 text-indigo-600 accent-indigo-600"
//                     />
//                     Prepaid
//                   </label>

//                   <div className="flex flex-col gap-4">
//                     <div className="flex flex-col md:flex-row md:items-center gap-4">
//                       {/* COD Radio Button */}
//                       <label className="flex items-center gap-2 cursor-pointer select-none text-indigo-700 font-medium">
//                         <input
//                           type="radio"
//                           name="payment"
//                           checked={paymentMode === "COD"}
//                           onChange={() => setPaymentMode("COD")}
//                           className="w-5 h-5 text-indigo-600 accent-indigo-600"
//                         />
//                         COD
//                       </label>

//                       {/* Amount Input on the Right (only visible when COD is selected) */}
//                       {paymentMode === "COD" && (
//                         <div className="flex flex-col md:flex-row md:items-center gap-2 w-full md:max-w-md">
//                           <label className="text-sm text-gray-700 font-medium min-w-max">
//                             Amount to be Collected
//                           </label>
//                           <div className="relative w-full">
//                             <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
//                               ₹
//                             </span>
//                             <input
//                               type="number"
//                               placeholder="Enter amount"
//                               className="w-full border border-indigo-300 rounded-xl pl-10 pr-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
//                             />
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </form>

//             {/* Advanced Package Section */}
//             {showAdvanced && (
//               <div className="mt-12 space-y-6" ref={multipleBoxesRef}>
//                 <h3 className="text-lg  text-gray-700">
//                   Advanced Package - Multiple Boxes
//                 </h3>

//                 {boxes.map((box, index) => (
//                   <div
//                     key={index}
//                     className="border border-gray-300 rounded-xl p-4 space-y-4 relative"
//                   >
//                     <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-black">
//                       <input
//                         type="number"
//                         placeholder="No of boxes"
//                         value={box.noOfBoxes}
//                         onChange={(e) =>
//                           handleBoxChange(index, "noOfBoxes", e.target.value)
//                         }
//                         className="border px-4 py-2 rounded text-xs placeholder:text-sm"
//                       />
//                       <input
//                         type="number"
//                         placeholder="Weight Per Box"
//                         value={box.Weightperbox}
//                         onChange={(e) =>
//                           handleBoxChange(index, "Weightperbox", e.target.value)
//                         }
//                         className="border px-4 py-2 rounded text-xs placeholder:text-sm"
//                       />
//                       <input
//                         type="number"
//                         placeholder="Length"
//                         value={box.length}
//                         onChange={(e) =>
//                           handleBoxChange(index, "length", e.target.value)
//                         }
//                         className="border px-4 py-2 rounded text-xs placeholder:text-sm"
//                       />
//                       <input
//                         type="number"
//                         placeholder="Width"
//                         value={box.width}
//                         onChange={(e) =>
//                           handleBoxChange(index, "width", e.target.value)
//                         }
//                         className="border px-4 py-2 rounded text-xs placeholder:text-sm"
//                       />
//                       <input
//                         type="number"
//                         placeholder="Height"
//                         value={box.height}
//                         onChange={(e) =>
//                           handleBoxChange(index, "height", e.target.value)
//                         }
//                         className="border px-4 py-2 rounded text-xs placeholder:text-sm"
//                       />
//                     </div>

//                     <div className="flex justify-end space-x-3">
//                       <button
//                         type="button"
//                         onClick={addBox}
//                         className="text-green-600 hover:text-green-800"
//                       >
//                         <FaPlus />
//                       </button>
//                       {boxes.length > 1 && (
//                         <button
//                           type="button"
//                           onClick={() => deleteBox(index)}
//                           className="text-red-600 hover:text-red-800"
//                         >
//                           <FaTrash />
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Right Rate Display */}
//           <div className="space-y-10">
//             {["Surface", "Express"].map((type) => (
//               <div
//                 key={type}
//                 className="bg-white rounded-md p-8 shadow-lg border border-indigo-200 hover:shadow-2xl transition-shadow duration-500 cursor-pointer select-none"
//               >
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <h2 className="text-xl font-extrabold text-blue-900">
//                       {type}
//                     </h2>
//                     <p className="text-indigo-400 font-semibold tracking-wide mt-1">
//                       Delivery in 1 Day
//                     </p>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-4xl font-extrabold text-blue-900 drop-shadow-md">
//                       ₹28.32
//                     </p>
//                     <p className="text-indigo-400 font-semibold mt-1">
//                       ₹24.00 + ₹4.32 (GST)
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}

//             <div className="text-center mt-6">
//               <button className="inline-block bg-blue-900 text-white font-semibold px-10 py-3 rounded-md shadow-lg hover:bg-indigo-700 transition duration-300">
//                 View Detailed Rate Card
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
