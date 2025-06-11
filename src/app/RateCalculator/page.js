"use client";
import { useState, useRef, useEffect } from "react";
import { GiCalculator } from "react-icons/gi";
import { FaPlus, FaTrash } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Switch } from "@headlessui/react";

export default function Page() {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [boxes, setBoxes] = useState([]);
  const [selectedTab, setSelectedTab] = useState("Forward");
  const [paymentMode, setPaymentMode] = useState("Prepaid");
  const [packageType, setPackageType] = useState("Plastic cover/Flyer");
  const [loading, setLoading] = useState(false);
  const [pickupPincode, setPickupPincode] = useState("122001");
  const [deliveryPincode, setDeliveryPincode] = useState("122001");
  const [weight, setWeight] = useState(0.5);
  const [length, setLength] = useState(1);
  const [width, setWidth] = useState(1);
  const [height, setHeight] = useState(1);
  const [codAmount, setCodAmount] = useState(1000);
  const [rates, setRates] = useState({ Surface: null, Air: null });
  const [codError, setCodError] = useState("");

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

  const isValidPincode = (pin) => pin.length === 6 && /^\d{6}$/.test(pin);
  console.log("boxes.length", boxes.length);

  const fetchRates = async () => {
    if (!isValidPincode(pickupPincode) || !isValidPincode(deliveryPincode))
      return;
    // Validate COD amount
    if (paymentMode === "COD") {
      const amount = Number(codAmount);
      if (!amount || amount < 1) {
        setCodError("Please enter a valid COD amount (minimum ₹1).");
        return;
      } else {
        setCodError("");
      }
    }

    const requestBody = {
      originPincode: pickupPincode,
      destinationPincode: deliveryPincode,
      isGSTinclusiv: false,
      isCOD: paymentMode === "COD",
      isRTO: selectedTab === "RTO",
      // codAmount: paymentMode === "COD" ? codAmount : 0,
      codAmount: paymentMode === "COD" ? Number(codAmount) : 0,
      weightDetailsArray:
        boxes.length === 0
          ? [
              {
                weightKg: weight,
                lengthCm: length,
                breadthCm: width,
                heightCm: height,
              },
            ]
          : boxes.map((box) => {
              return {
                weightKg: box.Weightperbox,
                lengthCm: box.length,
                breadthCm: box.width,
                heightCm: box.height,
              };
            }),
    };
    console.log("weightDetailsArray", requestBody.weightDetailsArray);

    setLoading(true); // Start loading
    try {
      const res = await fetch(
        "https://backend.sureship.in/publicRoutes/getRateOptions",
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
          SurfaceTat: surfaceObject.tat,
          AirTat: airObject.tat,
        });
      }
    } catch (err) {
      console.error("Network/API call failed:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRates();
  }, [
    pickupPincode,
    deliveryPincode,
    paymentMode,
    selectedTab,
    codAmount,
    weight,
    length,
    width,
    height,
    boxes,
    // showAdvanced,
  ]);

  return (
    <div className="min-h-96 bg-white p-6 md:p-12 font-sans">
      <div className="max-w-7xl mx-auto pt-20">
        <h1 className="text-4xl md:text-4xl font-extrabold text-blue-900 flex items-center gap-4 mb-12 select-none drop-shadow-lg">
          <GiCalculator className="text-4xl text-blue-900 animate-pulse" />
          Rate Calculator
        </h1>

        <div className="flex flex-wrap gap-5 mb-12 justify-center md:justify-start">
          {["Forward", "RTO"].map((tab) => (
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

              <div className="space-y-6">
                {/* Package Type + Toggle */}
                <div>
                  <label className="text-gray-700 font-medium mb-2 flex items-center justify-between">
                    <span>Package Type</span>

                    {/* Toggle */}
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Basic</span>
                      <Switch
                        checked={!showAdvanced}
                        onChange={(value) => {
                          setShowAdvanced(!value);
                          if (!value) {
                            // Switching to Advanced
                            setBoxes([
                              {
                                noOfBoxes: "",
                                Weightperbox: "",
                                length: "",
                                height: "",
                                width: "",
                              },
                            ]);
                            setTimeout(() => {
                              multipleBoxesRef.current?.scrollIntoView({
                                behavior: "smooth",
                              });
                            }, 100);
                          }
                        }}
                        className={`${
                          !showAdvanced ? "bg-indigo-600" : "bg-gray-300"
                        } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
                      >
                        <span
                          className={`${
                            !showAdvanced ? "translate-x-6" : "translate-x-1"
                          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                        />
                      </Switch>
                      <span className="text-sm text-gray-600">Advanced</span>
                    </div>
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

                {/* Basic Fields (only if not in advanced mode) */}
                {!showAdvanced && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-6">
                    {/* Weight */}
                    <div className="flex flex-col">
                      <label className="text-gray-700 font-medium mb-2">
                        Weight (Kg)
                      </label>
                      <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="w-full border border-indigo-300 rounded-xl px-5 py-3 text-gray-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
                      />
                    </div>

                    {/* Dimensions */}
                    <div className="flex flex-col">
                      <label className="text-gray-700 font-medium mb-2">
                        Dimensions (L × B × H in cm)
                      </label>
                      <div className="flex gap-4">
                        <input
                          type="number"
                          placeholder="L"
                          value={length}
                          onChange={(e) => setLength(e.target.value)}
                          className="w-1/3 border border-indigo-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
                        />
                        <input
                          type="number"
                          placeholder="B"
                          value={width}
                          onChange={(e) => setWidth(e.target.value)}
                          className="w-1/3 border border-indigo-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
                        />
                        <input
                          type="number"
                          placeholder="H"
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                          className="w-1/3 border border-indigo-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
                        />
                      </div>
                    </div>
                  </div>
                )}
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
                              onChange={(e) => setCodAmount(e.target.value)}
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
                <h3 className="text-lg font-semibold text-gray-700">
                  Advanced Package - Multiple Boxes
                </h3>

                {boxes.map((box, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-2xl p-4 space-y-4 relative shadow-sm"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-black">
                      <input
                        type="number"
                        placeholder="Boxes"
                        value={box.noOfBoxes}
                        onChange={(e) =>
                          handleBoxChange(index, "noOfBoxes", e.target.value)
                        }
                        className="border px-4 py-2 rounded text-xs placeholder:text-sm appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                      />

                      <input
                        type="number"
                        placeholder="Wt (Kg)"
                        value={box.Weightperbox}
                        onChange={(e) =>
                          handleBoxChange(index, "Weightperbox", e.target.value)
                        }
                        className="border px-4 py-2 rounded text-xs placeholder:text-sm appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                      />
                      <input
                        type="number"
                        placeholder="L (cm)"
                        value={box.length}
                        onChange={(e) =>
                          handleBoxChange(index, "length", e.target.value)
                        }
                        className="border px-4 py-2 rounded text-xs placeholder:text-sm appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                      />
                      <input
                        type="number"
                        placeholder="W (cm)"
                        value={box.width}
                        onChange={(e) =>
                          handleBoxChange(index, "width", e.target.value)
                        }
                        className="border px-4 py-2 rounded text-xs placeholder:text-sm appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                      />
                      <input
                        type="number"
                        placeholder="H (cm)"
                        value={box.height}
                        onChange={(e) =>
                          handleBoxChange(index, "height", e.target.value)
                        }
                        className="border px-4 py-2 rounded text-xs placeholder:text-sm appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                      />
                    </div>

                    <div className="flex justify-end gap-4">
                      <button
                        type="button"
                        onClick={addBox}
                        className="text-green-600 hover:text-green-800 text-lg"
                      >
                        <FaPlus />
                      </button>
                      {boxes.length > 1 && (
                        <button
                          type="button"
                          onClick={() => deleteBox(index)}
                          className="text-red-600 hover:text-red-800 text-lg"
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
                    className="bg-white rounded-md p-4 shadow-lg border border-indigo-200 hover:shadow-2xl transition-shadow duration-500 cursor-pointer select-none"
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
                        <div className="flex flex-col justify-between items-center w-full">
                          {(type === "Surface" || type === "Air") && (
                            <>
                              <div className="flex items-center justify-start w-full">
                                <img
                                  src="/image/e (81).jpg"
                                  alt="company logo"
                                  className="h-6 w-auto"
                                />
                              </div>
                              {/* Changed to flex-col and items-center */}
                              <div className="flex items-start justify-between w-full">
                                {/* Removed mt-2 here */}
                                <h2 className="text-xl  text-blue-900">
                                  {type}
                                  <p className="text-indigo-400 font-semibold tracking-wide mt-1 flex items-center gap-1">
                                    Delivered in{" "}
                                    <span className="flex items-center gap-1">
                                      {type === "Surface" ? (
                                        <span>
                                          {rates["SurfaceTat"]}
                                          {rates["SurfaceTat"] === 1
                                            ? " Day"
                                            : " Days"}
                                        </span>
                                      ) : (
                                        <span>
                                          {rates["AirTat"]}{" "}
                                          {rates["AirTat"] === 1
                                            ? " Day"
                                            : " Days"}
                                        </span>
                                      )}
                                    </span>
                                  </p>
                                </h2>
                                <div className="text-right space-y-2 sm:space-y-3">
                                  <p className="text-3xl sm:text-4xl font-extrabold text-blue-900 drop-shadow-md">
                                    ₹{rates[type]?.total ?? "--"}
                                  </p>

                                  <a
                                    href={`https://wa.me/918874262636?text=${encodeURIComponent(
                                      `Hi, I am interested in shipping.\nPickup Pincode: ${pickupPincode}\nDelivery Pincode: ${deliveryPincode}\nWeight: ${weight} Kg\nDimensions: ${length} x ${width} x ${height} cm\nEstimated Price: ₹${
                                        rates[type]?.total ?? "--"
                                      }\nEstimated Delivery: ${
                                        type === "Surface"
                                          ? `${rates["SurfaceTat"]} ${
                                              rates["SurfaceTat"] === 1
                                                ? "Day"
                                                : "Days"
                                            } (Surface)`
                                          : `${rates["AirTat"]} ${
                                              rates["AirTat"] === 1
                                                ? "Day"
                                                : "Days"
                                            } (Air)`
                                      }`
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto mt-2 sm:mt-0 px-5 py-3 bg-blue-900 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all duration-200 shadow-md text-sm sm:text-base"
                                  >
                                    <FaWhatsapp className="text-lg sm:text-xl" />
                                    Book on WhatsApp
                                  </a>
                                </div>
                              </div>
                            </>
                          )}
                        </div>

                        {rates[type] && (
                          <div className="mt-4 text-sm text-gray-700">
                            <p>
                              {[
                                !rates[type].rtoCharge &&
                                  rates[type].codCharge > 0 &&
                                  `COD Charge: ₹${rates[type].codCharge}`,
                                rates[type].rtoCharge > 0 &&
                                  `RTO Charge: ₹${rates[type].rtoCharge}`,
                                rates[type].tsAmount > 0 &&
                                  `Shipping cost: ₹${rates[type].tsAmount}`,
                                rates[type].additionalGst > 0 &&
                                  `GST: ₹${rates[type].additionalGst}`,
                              ]
                                .filter(Boolean)
                                .join(" + ")}
                            </p>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}
                {/* Show COD error below cards */}
                {codError && (
                  <div className="text-red-500 font-semibold text-sm mt-4">
                    {codError}
                  </div>
                )}
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
