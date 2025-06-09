"use client";
import { useState, useRef, useEffect } from "react";
import { GiCalculator } from "react-icons/gi";
import { FaPlus, FaTrash } from "react-icons/fa";

export default function Page() {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [boxes, setBoxes] = useState([
    { noOfBoxes: "", Weightperbox: "", length: "", height: "", width: "" },
  ]);

  const multipleBoxesRef = useRef(null);

  const handleBoxChange = (index, field, value) => {
    const newBoxes = [...boxes];
    newBoxes[index][field] = value;
    setBoxes(newBoxes);
  };

  const addBox = () => {
    setBoxes([
      ...boxes,
      { noOfBoxes: "", Weightperbox: "", length: "", height: "", width: "" },
    ]);
  };

  const deleteBox = (index) => {
    const newBoxes = boxes.filter((_, i) => i !== index);
    setBoxes(newBoxes);
  };

  const [selectedTab, setSelectedTab] = useState("Forward");
  const [paymentMode, setPaymentMode] = useState("Prepaid");
  const [packageType, setPackageType] = useState("Plastic cover/Flyer");
  const [loading, setLoading] = useState(false);
  const [pickupPincode, setPickupPincode] = useState("232329");
  const [deliveryPincode, setDeliveryPincode] = useState("122001");
  const [weight, setWeight] = useState(500);
  const [length, setLength] = useState(1);
  const [width, setWidth] = useState(1);
  const [height, setHeight] = useState(1);
  const [codAmount, setCodAmount] = useState(1);
  const [rates, setRates] = useState({ Surface: null, Air: null });
  console.log("rates", rates);

  const isValidPincode = (pin) => pin.length === 6 && /^\d{6}$/.test(pin);

  const fetchRates = async () => {
    if (!isValidPincode(pickupPincode) || !isValidPincode(deliveryPincode))
      return;

    const requestBody = {
      weightKg: weight / 1000,
      lengthCm: length,
      breadthCm: width,
      heightCm: height,
      originPincode: pickupPincode,
      destinationPincode: deliveryPincode,
      isGSTinclusiv: false,
      isCOD: paymentMode === "COD",
      isRTO: selectedTab === "RTO",
      codAmount: paymentMode === "COD" ? codAmount : 0,
    };

    setLoading(true); // Start loading
    try {
      const res = await fetch(
        "http://localhost:3500/publicRoutes/getRateOptions",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
        }
      );

      const data = await res.json();
      if (data) {
        const [surfaceObject, airObject] = data.rateOptions;
        setRates({
          Surface: surfaceObject.rateSummary,
          Air: airObject.rateSummary,
        });
      }
    } catch (err) {
      console.error("Network/API call failed:", err);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    fetchRates();
  }, [
    pickupPincode,
    deliveryPincode,
    weight,
    length,
    width,
    height,
    paymentMode,
    selectedTab,
  ]);

  return (
    <div className="min-h-96 bg-white p-6 md:p-12 font-sans">
      <div className="max-w-7xl mx-auto pt-20">
        <h1 className="text-4xl md:text-4xl font-extrabold text-blue-900 flex items-center gap-4 mb-12 select-none drop-shadow-lg">
          <GiCalculator className="text-4xl text-blue-900 animate-pulse" />
          Rate Calculator
        </h1>

        <div className="flex flex-wrap gap-5 mb-12 justify-center md:justify-start">
          {["Forward", "RTO", "Reverse"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 shadow-md ${
                selectedTab === tab
                  ? "bg-blue-900 text-white shadow-indigo-400/70"
                  : "bg-white text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div className="bg-white rounded-md p-10 shadow-lg border border-indigo-200 hover:shadow-2xl transition-shadow duration-500">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Pickup Pincode
                  </label>
                  <input
                    type="text"
                    value={pickupPincode}
                    onChange={(e) => setPickupPincode(e.target.value)}
                    className="w-full border border-indigo-300 rounded-xl px-5 py-3 text-gray-800 placeholder-indigo-300 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
                    placeholder="Enter pickup pincode"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Delivery Pincode
                  </label>
                  <input
                    type="text"
                    value={deliveryPincode}
                    onChange={(e) => setDeliveryPincode(e.target.value)}
                    className="w-full border border-indigo-300 rounded-xl px-5 py-3 text-gray-800 placeholder-indigo-300 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
                    placeholder="Enter delivery pincode"
                  />
                </div>
              </div>

              <div>
                <label className=" text-gray-700 font-medium mb-2 flex items-center justify-between">
                  <span>Package Type</span>
                  {/* <button
                    type="button"
                    onClick={() => {
                      setShowAdvanced(true);
                      setTimeout(() => {
                        multipleBoxesRef.current?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }, 100);
                    }}
                    className="text-indigo-600 text-sm font-semibold underline hover:text-indigo-800 transition"
                  >
                    + Advanced Package
                  </button> */}
                </label>
                <select
                  className="w-full border border-indigo-300 rounded-xl px-5 py-3 text-gray-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
                  value={packageType}
                  onChange={(e) => setPackageType(e.target.value)}
                >
                  <option>Plastic cover/Flyer</option>
                  <option>Box</option>
                  <option>Envelope</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Weight input */}
                <div className="flex flex-col">
                  <label className="text-gray-700 font-medium mb-2">
                    Weight (gm)
                  </label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className="w-full border border-indigo-300 rounded-xl px-5 py-3 text-gray-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
                    min={0}
                  />
                </div>

                {/* Dimensions inputs */}
                <div className="flex flex-col">
                  <label className="text-gray-700 font-medium mb-2">
                    Dimensions (L × B × H in cm)
                  </label>
                  <div className="flex gap-4">
                    <input
                      type="number"
                      placeholder="L"
                      value={length}
                      onChange={(e) => setLength(Number(e.target.value))}
                      className="w-1/3 border border-indigo-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
                      min={0}
                    />
                    <input
                      type="number"
                      placeholder="B"
                      value={width}
                      onChange={(e) => setWidth(Number(e.target.value))}
                      className="w-1/3 border border-indigo-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
                      min={0}
                    />
                    <input
                      type="number"
                      placeholder="H"
                      value={height}
                      onChange={(e) => setHeight(Number(e.target.value))}
                      className="w-1/3 border border-indigo-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
                      min={0}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-indigo-100 border-l-8 border-indigo-400 p-5 rounded-xl text-indigo-800 text-sm font-semibold select-none shadow-inner">
                <p>
                  <span className="font-bold">
                    Volumetric Weight Calculation:
                  </span>
                  <br />
                  Surface = (L × B × H) / 5000 <br />
                  Air = (L × B × H) / 4000
                </p>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-4">
                  Payment Mode
                </label>
                <div className="flex items-center gap-10">
                  <label className="flex items-center gap-3 cursor-pointer select-none text-indigo-700 font-medium">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMode === "Prepaid"}
                      onChange={() => setPaymentMode("Prepaid")}
                      className="w-5 h-5 text-indigo-600 accent-indigo-600"
                    />
                    Prepaid
                  </label>

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <label className="flex items-center gap-2 cursor-pointer select-none text-indigo-700 font-medium">
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMode === "COD"}
                          onChange={() => setPaymentMode("COD")}
                          className="w-5 h-5 text-indigo-600 accent-indigo-600"
                        />
                        COD
                      </label>

                      {paymentMode === "COD" && (
                        <div className="flex flex-col md:flex-row md:items-center gap-2 w-full md:max-w-md">
                          <label className="text-sm text-gray-700 font-medium min-w-max">
                            Amount to be Collected
                          </label>
                          <div className="relative w-full">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
                              ₹
                            </span>
                            <input
                              type="number"
                              placeholder="Enter amount"
                              value={codAmount}
                              onChange={(e) =>
                                setCodAmount(Number(e.target.value))
                              }
                              className="w-full border border-indigo-300 rounded-xl pl-10 pr-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </form>

            {showAdvanced && (
              <div className="mt-12 space-y-6" ref={multipleBoxesRef}>
                <h3 className="text-lg  text-gray-700">
                  Advanced Package - Multiple Boxes
                </h3>
                {boxes.map((box, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-xl p-4 space-y-4 relative"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-black">
                      <input
                        type="number"
                        placeholder="No of boxes"
                        value={box.noOfBoxes}
                        onChange={(e) =>
                          handleBoxChange(index, "noOfBoxes", e.target.value)
                        }
                        className="border px-4 py-2 rounded text-xs placeholder:text-sm"
                      />
                      <input
                        type="number"
                        placeholder="Weight Per Box"
                        value={box.Weightperbox}
                        onChange={(e) =>
                          handleBoxChange(index, "Weightperbox", e.target.value)
                        }
                        className="border px-4 py-2 rounded text-xs placeholder:text-sm"
                      />
                      <input
                        type="number"
                        placeholder="Length"
                        value={box.length}
                        onChange={(e) =>
                          handleBoxChange(index, "length", e.target.value)
                        }
                        className="border px-4 py-2 rounded text-xs placeholder:text-sm"
                      />
                      <input
                        type="number"
                        placeholder="Width"
                        value={box.width}
                        onChange={(e) =>
                          handleBoxChange(index, "width", e.target.value)
                        }
                        className="border px-4 py-2 rounded text-xs placeholder:text-sm"
                      />
                      <input
                        type="number"
                        placeholder="Height"
                        value={box.height}
                        onChange={(e) =>
                          handleBoxChange(index, "height", e.target.value)
                        }
                        className="border px-4 py-2 rounded text-xs placeholder:text-sm"
                      />
                    </div>

                    <div className="flex justify-end space-x-3">
                      <button
                        type="button"
                        onClick={addBox}
                        className="text-green-600 hover:text-green-800"
                      >
                        <FaPlus />
                      </button>
                      {boxes.length > 1 && (
                        <button
                          type="button"
                          onClick={() => deleteBox(index)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <FaTrash />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {pickupPincode && deliveryPincode ? (
            /^\d{6}$/.test(pickupPincode) && /^\d{6}$/.test(deliveryPincode) ? (
              <div className="space-y-10 mt-10">
                {["Surface", "Air"].map((type) => (
                  <div
                    key={type}
                    className="bg-white rounded-md p-8 shadow-lg border border-indigo-200 hover:shadow-2xl transition-shadow duration-500 cursor-pointer select-none"
                  >
                    {loading ? (
                      <div className="flex justify-center items-center space-x-2">
                        <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-blue-700 font-semibold">
                          Loading...
                        </span>
                      </div>
                    ) : (
                      <>
                        <div className="flex justify-between items-center">
                          <div>
                            <h2 className="text-xl font-extrabold text-blue-900">
                              {type}
                            </h2>
                            <p className="text-indigo-400 font-semibold tracking-wide mt-1">
                              Delivery in 1 Day
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-4xl font-extrabold text-blue-900 drop-shadow-md">
                              ₹{rates[type]?.total ?? "--"}
                            </p>
                          </div>
                        </div>

                        {rates[type] && (
                          <div className="mt-4 text-sm text-gray-700 space-y-1">
                            <p>COD Charge: ₹{rates[type].codCharge}</p>
                            <p>Shipping cost: ₹{rates[type].tsAmount}</p>
                            <p>GST: ₹{rates[type].additionalGst}</p>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-red-500 font-semibold mt-5">
                Please enter valid 6-digit PIN codes for both pickup and
                delivery.
              </div>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
}
