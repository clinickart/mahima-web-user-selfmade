import React, { useState } from "react";
import HeaderNav from "../../../components/layout/NavBar/HeaderNav";
import images from "../../../lib/exportImages";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { useNavigate } from "react-router-dom";
const SignUpPage = () => {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const navigate =useNavigate();

  const handleNextProfileStep = () => {
    setStep((prev) => prev + 1);
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const StepIndicator = ({ steps, currentStep }) => {
    return (
      <div className="flex items-center justify-center mb-6 w-full">
        {steps?.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <React.Fragment key={step}>
              <div className="flex flex-col items-center text-center min-w-[80px]">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center

                  ${
                    isCurrent
                      ? "border-2 border-text-gray-200 text-gray-300"
                      : ""
                  }
                  ${
                    !isCompleted && !isCurrent
                      ? "border-2 border-gray-300 text-gray-400 bg-gray-300"
                      : ""
                  }
                `}
                >
                  {isCompleted ? (
                    <Icon
                      icon="teenyicons:tick-circle-solid"
                      className="text-xl text-[#C53958]"
                    />
                  ) : isCurrent ? (
                    <span className="text-xs">●</span>
                  ) : null}
                </div>
                <span
                  className={`mt-1 text-sm font-medium ${
                    isCompleted
                      ? "text-[#C53958]"
                      : isCurrent
                      ? "text-gray-700"
                      : "text-gray-400"
                  }`}
                >
                  {step}
                </span>
              </div>

              {index < steps.length - 1 && (
                <div className="flex-1 h-px bg-gray-300 mx-2"></div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    );
  };
  const Store_Stepper = ({
    steps = [
      "Information",
      "Address Details",
      "Bank Details",
      "Store Documents",
      "Setting Password",
    ],
    currentStep = 0,
  }) => {
    return (
      <div className="flex items-center justify-between w-full">
        {steps.map((label, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;

          return (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full border-2 text-sm font-medium
                  ${
                    isActive
                      ? "border-[#C53958] text-[#C53958]"
                      : isCompleted
                      ? "border-[#C53958] bg-[#C53958] text-white"
                      : "border-gray-300 text-gray-500"
                  }
                `}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
                <span
                  className={`mt-2 text-xs text-center w-20 leading-tight
                  ${isActive ? "text-[#C53958] font-medium" : "text-gray-500"}
                `}
                >
                  {label}
                </span>
              </div>

              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-px mx-2
                  ${isCompleted ? "bg-[#C53958]" : "bg-gray-300"}
                `}
                ></div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    );
  };

  return (
    <section className="mb-4 h-screen">
      <HeaderNav />

      <div className="max-w-7xl mx-auto px-4 py-8 flex justify-center items-center h-[calc(100vh-60px)]">
        {step === 1 && (
          <div className="border border-gray-100 rounded-lg max-w-lg p-6">
            <div className="flex flex-col justify-center w-full mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-left">
                Enter your full name and choose your business password
              </h2>
              <form className="w-full ">
                <div className="mb-3">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="clinicart@gmail.com"
                    className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="clinicart@gmail.com"
                    className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="clinicart@gmail.com"
                    className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="clinicart@gmail.com"
                    className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                <button
                  type="button"
                  onClick={nextStep}
                  className="w-full px-6 py-3 bg-[#C53958] text-white rounded-md hover:bg-[#c42b4d] mb-4"
                >
                  Next Steps
                </button>
                <p className="text-sm text-gray-600 mb-4 text-center">
                  By creating an account, you agree to Clinic Kart{" "}
                  <a href="#" className="text-blue-500 underline">
                    Conditions of Use
                  </a>
                  ,{" "}
                  <a href="#" className="text-blue-500 underline">
                    Privacy Notice
                  </a>
                  , and the{" "}
                  <a href="#" className="text-blue-500 underline">
                    Clinic Kart Vendors Terms and Conditions
                  </a>
                  . You agree that you are creating this business account on
                  behalf of your organization and have authority to bind your
                  organization.
                </p>
                <button
                  type="button"
                  onClick={() => alert("OTP Resent")}
                  className="text-[#C53958] text-sm font-medium underline"
                >
                  RESEND OTP
                </button>
              </form>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 max-w-lg">
            <h2 className="text-2xl font-bold mb-2">Verify email address</h2>
            <p className="text-gray-600 mb-4 text-sm">
              To verify your email, we've sent a One Time Password (OTP) to:{" "}
              <strong>clinicart@gmail.com</strong>
              <br />
              <button
                onClick={() => {}}
                className="text-blue-500 underline ml-1"
              >
                (Change)
              </button>
            </p>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Enter OTP
              </label>
              <input
                type="text"
                placeholder="clinicart@gmail.com"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <button
              onClick={nextStep}
              className="w-full px-6 py-3 bg-[#C53958] text-white rounded-md hover:bg-[#c42b4d] mb-4"
            >
              Create your Amazon account
            </button>
            <p className="text-sm text-gray-600 mb-4 text-left">
              By creating an account, you agree to Clinic Kart{" "}
              <a href="#" className="text-blue-500 underline">
                Conditions of Use
              </a>
              ,{" "}
              <a href="#" className="text-blue-500 underline">
                Privacy Notice
              </a>
              , and the{" "}
              <a href="#" className="text-blue-500 underline">
                Clinic Kart Vendors Terms and Conditions
              </a>
              . You agree that you are creating this business account on behalf
              of your organization and have authority to bind your organization.
            </p>
            <button
              onClick={() => alert("OTP Resent")}
              className="text-[#C53958] text-sm font-medium underline w-full text-left mb-2"
            >
              RESEND OTP
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 max-w-7xl lg:flex gap-5">
            <div className="flex-1 flex flex-col justify-center gap-3">
              <p className="text-pink-600 font-semibold mb-2">PROFILE SETUP</p>
              <h3 className="text-2xl font-bold mb-4">
                FOR AN EASY FORM FILLING PROCESS
              </h3>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, enim rerum dolor accusamus blanditiis eius nemo tempora
                voluptate optio aliquam totam fuga iusto placeat ratione libero,
                temporibus tenetur soluta praesentium!
              </p>
              <button
                onClick={nextStep}
                className="px-6 py-2 bg-[#C53958] text-white rounded-md hover:bg-[#C53958]/80 w-fit"
              >
                Let Begin's
              </button>
            </div>
            <div className="flex-1 flex justify-center items-center md:mt-5">
              <img
                src={images.homePage.signUp.profileSectionImage}
                alt="Easy Product Uploads"
                className="max-w-full"
              />
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 max-w-md mx-auto">
            <div className="p-6">
              <StepIndicator
                steps={["Category", "Location", "Company Name"]}
                currentStep={0}
              />
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#C53958] mb-2">
                PROFILE SETUP
              </h2>
              <h1 className="text-3xl font-bold text-black mb-4">
                ADD THE CATEGORY
              </h1>

              <p className="text-black mb-6">
                Rhoncus morbi et augue nec, in id ullamcorper at sit.
                Condimentum sit nunc in eros scelerisque sed. Commodo in viverra
                nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam
                sagittis, pulvinar. Fermentum scelerisque sit consectetur hac
                mi. Mollis leo eleifend utricies purus laculis.
              </p>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Type of Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 appearance-none bg-white"
                >
                  <option value="" disabled>
                    Select Category
                  </option>
                  <option value="Electronics">Electronics</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Home & Garden">Home & Garden</option>
                  <option value="Beauty">Beauty</option>
                  <option value="Sports">Sports</option>
                </select>
              </div>

              <button
                onClick={handleNextProfileStep}
                className="w-full px-6 py-3 bg-[#C53958] text-white rounded-md hover:bg-[#b8334d] transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        )}
        {step === 5 && (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 max-w-md mx-auto">
            <div className="p-6">
              <StepIndicator
                steps={["Category", "Location", "Company Name"]}
                currentStep={1}
              />
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#C53958] mb-2">
                PROFILE SETUP
              </h2>
              <h1 className="text-3xl font-bold text-black mb-4">
                ADD THE LOCATION
              </h1>

              <p className="text-black mb-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
                quod qui provident vero consequatur nesciunt? Tenetur in minus,
                ullam vero at dolorum, autem molestiae obcaecati possimus
                debitis ex praesentium quos.
              </p>

              <form action="">
                <div className="mb-4 flex flex-col">
                  <label htmlFor="" className="text-sm font-medium text-black">
                    Select City
                  </label>
                  <select
                    name="category"
                    id=""
                    className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 mt-3"
                  >
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <option value="category3">Category 3</option>
                  </select>
                </div>
                <div className="mb-4 flex flex-col">
                  <label htmlFor="" className="text-sm font-medium text-black">
                    Select Area
                  </label>
                  <select
                    name="location"
                    id=""
                    className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 mt-3"
                  >
                    <option value="location1">Location 1</option>
                    <option value="location2">Location 2</option>
                    <option value="location3">Location 3</option>
                  </select>
                </div>
              </form>

              <div className="flex gap-3">
                <button
                  onClick={handleNextProfileStep}
                  className="px-6 py-2 bg-[#C53958] text-white rounded-md hover:bg-[#c42b4d] transition-colors w-fit"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
        {step === 6 && (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 max-w-md mx-auto">
            <div className="p-6">
              <StepIndicator
                steps={["Category", "Location", "Company Name"]}
                currentStep={2}
              />
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#C53958] mb-2">
                PROFILE SETUP
              </h2>
              <h1 className="text-3xl font-bold text-black mb-4">
                ADD THE COMPANY NAME
              </h1>

              <p className="text-black mb-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
                quod qui provident vero consequatur nesciunt? Tenetur in minus,
                ullam vero at dolorum, autem molestiae obcaecati possimus
                debitis ex praesentium quos.
              </p>

              <form action="">
                <div className="mb-4 flex flex-col">
                  <label htmlFor="" className="text-sm font-medium text-black">
                    Company Name
                  </label>
                  <select
                    name="category"
                    id=""
                    className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 mt-3"
                  >
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <option value="category3">Category 3</option>
                  </select>
                </div>
              </form>

              <div className="flex gap-3">
                <button
                  onClick={handleNextProfileStep}
                  className="px-6 py-2 bg-[#C53958] text-white rounded-md hover:bg-[#c42b4d] transition-colors w-fit"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
        {step === 7 && (
          <div className="bg-white p-6 rounded-lg border border-gray-100 max-w-7xl mx-auto max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <Store_Stepper />
            </div>

            <h2 className="text-lg font-bold text-[#C53958] mb-2 uppercase">
              Store Information
            </h2>
            <h1 className="text-3xl font-bold text-black mb-4">
              Owner details, Open & Close hrs.
            </h1>

            <p className="text-gray-700 mb-6 max-w-2xl">
              Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum
              sit nunc in eros scelerisque sed. Commodo in viverra nunc,
              ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis,
              pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo
              eleifend ultricies purus iaculis.
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Basic Details
                </label>
                <input
                  type="text"
                  placeholder="Owner Full Name"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Store Name
                </label>
                <input
                  type="text"
                  placeholder="Store Full Name"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-1/2">
                  <label className="block text-lg font-semibold text-gray-500 mb-2">
                    UPLOAD LOGO OF STORE
                  </label>
                  <p className="text-gray-500 text-sm mb-3">
                    To further avoid delays and cancellations help delivery
                    partners reach you easily with this info
                  </p>
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center text-center lg:w-1/2">
                  <p className="text-gray-500 mb-2">Drag & drop photos here</p>
                  <p className="text-gray-400 text-sm">
                    Or select files from your mobile
                  </p>
                  <button
                    type="button"
                    className="mt-3 px-4 py-2 bg-gray-100 rounded-md text-sm font-medium"
                  >
                    Browse Files
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-800 uppercase">
                  Owner Contact Details
                </h3>
                <p className="text-gray-500 text-sm mb-3">
                  To get updates on payments, customer complaints, order
                  acceptance, etc.
                </p>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter email here"
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  <input
                    type="tel"
                    placeholder="Enter mobile number"
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-800 uppercase">
                  Opening & Closing Time
                </h3>
                <div className="space-y-3 mt-3">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="timing"
                      className="text-pink-500"
                    />
                    <span className="text-gray-700">
                      I open and close my restaurant at the same time on all
                      working days
                    </span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="timing"
                      className="text-pink-500"
                    />
                    <span className="text-gray-700">
                      I've separate daywise timings
                    </span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="button"
                  onClick={handleNextProfileStep}
                  className="px-6 py-2 bg-[#C53958] text-white rounded-md hover:bg-[#b8334d] transition-colors"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}
        {step === 8 && (
          <div className="bg-white p-6 rounded-lg border border-gray-100 max-w-7xl mx-auto max-h-[80vh] overflow-y-auto lg:min-w-5xl">
            <div className="p-6">
              <Store_Stepper currentStep={1} />
            </div>

            <h2 className="text-lg font-bold text-[#C53958] mb-2 uppercase">
              Address Details
            </h2>
            <h1 className="text-sm text-black mb-4">
              Provide accurate details to ensure timely delivery of food to your
              customers
            </h1>

            {/* Form */}
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Shop/Plot Number
                </label>
                <input
                  type="text"
                  placeholder="Enter details"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Floor
                </label>
                <input
                  type="text"
                  placeholder="Enter floor"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Building/Mall/Complex Name
                </label>
                <input
                  type="text"
                  placeholder="Enter details"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  City
                </label>
                <input
                  type="text"
                  placeholder="Enter details"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  State
                </label>
                <input
                  type="text"
                  placeholder="Enter details"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Pincode
                </label>
                <input
                  type="text"
                  placeholder="Enter details"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Add Store Location
                </label>
                <input
                  type="text"
                  placeholder="Enter details"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="button"
                  onClick={handleNextProfileStep}
                  className="px-6 py-2 bg-[#C53958] text-white rounded-md hover:bg-[#b8334d] transition-colors"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}
        {step === 9 && (
          <div className="bg-white p-6 rounded-lg border border-gray-100 max-w-7xl mx-auto max-h-[80vh] overflow-y-auto lg:min-w-5xl">
            <div className="p-6">
              <Store_Stepper currentStep={2} />
            </div>

            <h2 className="text-2xl font-bold text-black mb-2 uppercase">
              Bank Account Details
            </h2>
            <h1 className="text-sm text-black mb-4">
              Provide accurate details to ensure timely delivery of parcel to
              your customers
            </h1>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Bank Name
                </label>
                <input
                  type="text"
                  placeholder="Enter details"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Account Holder Name
                </label>
                <input
                  type="text"
                  placeholder="Enter details"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Branch Name
                </label>
                <input
                  type="text"
                  placeholder="Enter details"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  IFSC Code
                </label>
                <input
                  type="text"
                  placeholder="Enter details"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="button"
                  onClick={handleNextProfileStep}
                  className="px-6 py-2 bg-[#C53958] text-white rounded-md hover:bg-[#b8334d] transition-colors"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}
        {step === 10 && (
          <div className="bg-white p-6 rounded-lg border border-gray-100 max-w-7xl mx-auto max-h-[80vh] overflow-y-auto">
            {/* Stepper */}
            <div className="p-6">
              <Store_Stepper currentStep={3} />
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-bold text-black mb-2 uppercase">
              Personal Documents
            </h2>
            <h1 className="text-sm text-black mb-4">
              Upload focused photos of below documents for faster verification
            </h1>

            {/* Aadhar Card */}
            <div className="flex flex-col lg:flex-row gap-6 mb-6">
              <div className="w-full lg:w-1/2">
                <label className="block text-lg font-semibold text-gray-500 mb-2">
                  UPLOAD AADHAR CARD
                </label>
                <p className="text-gray-500 text-sm">
                  To further avoid delays and cancellations help delivery
                  partners reach you easily with this info
                </p>
              </div>
              <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center text-center lg:w-1/2">
                <p className="text-gray-500 mb-2">Drag & drop photos here</p>
                <p className="text-gray-400 text-sm">
                  Or select files from your mobiles
                </p>
                <button
                  type="button"
                  className="mt-3 px-4 py-2 bg-gray-100 rounded-md text-sm font-medium"
                >
                  Browse Files
                </button>
              </div>
            </div>

            {/* PAN Card */}
            <div className="flex flex-col lg:flex-row gap-6 mb-6">
              <div className="w-full lg:w-1/2">
                <label className="block text-lg font-semibold text-gray-500 mb-2">
                  UPLOAD PAN CARD
                </label>
                <p className="text-gray-500 text-sm">
                  To further avoid delays and cancellations help delivery
                  partners reach you easily with this info
                </p>
              </div>
              <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center text-center lg:w-1/2">
                <p className="text-gray-500 mb-2">Drag & drop photos here</p>
                <p className="text-gray-400 text-sm">
                  Or select files from your mobiles
                </p>
                <button
                  type="button"
                  className="mt-3 px-4 py-2 bg-gray-100 rounded-md text-sm font-medium"
                >
                  Browse Files
                </button>
              </div>
            </div>

            {/* Driving License */}
            <div className="flex flex-col lg:flex-row gap-6 mb-6">
              <div className="w-full lg:w-1/2">
                <label className="block text-lg font-semibold text-gray-500 mb-2">
                  UPLOAD DRIVING LICENSE
                </label>
                <p className="text-gray-500 text-sm">
                  To further avoid delays and cancellations help delivery
                  partners reach you easily with this info
                </p>
              </div>
              <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center text-center lg:w-1/2">
                <p className="text-gray-500 mb-2">Drag & drop photos here</p>
                <p className="text-gray-400 text-sm">
                  Or select files from your mobiles
                </p>
                <button
                  type="button"
                  className="mt-3 px-4 py-2 bg-gray-100 rounded-md text-sm font-medium"
                >
                  Browse Files
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="button"
                onClick={handleNextProfileStep}
                className="px-6 py-2 bg-[#C53958] text-white rounded-md hover:bg-[#b8334d] transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        )}
        {step === 11 && (
          <div className="bg-white p-6 rounded-lg border border-gray-100 max-w-7xl mx-auto max-h-[80vh] overflow-y-auto lg:min-w-5xl">
            <div className="p-6">
              <Store_Stepper currentStep={4} />
            </div>

            <h2 className="text-3xl font-bold text-black mb-2">
              Password Setting
            </h2>
            <p className="text-gray-600 mb-6">
              Set up a password which is stronger and you don’t forget it
            </p>

            {/* Form */}
            <form className="space-y-6">
              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter details"
                  className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 w-full"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Enter again"
                  className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 w-full"
                />
              </div>

              <div>
                <button
                  type="submit"
                  onClick={handleNextProfileStep}
                  className="px-6 py-2 bg-[#C53958] text-white rounded-md hover:bg-[#b8334d] transition-colors"
                >
                  Pay &amp; Login
                </button>
              </div>
            </form>
          </div>
        )}
        {step === 12 && (
          <div className="bg-white p-6 rounded-lg border border-gray-100 max-w-7xl mx-auto max-h-[80vh] overflow-y-auto lg:min-w-5xl">
            <h2 className="text-2xl font-bold text-black mb-2">
              Choose the Right Plan for Your Business
            </h2>

            <div className="flex flex-wrap gap-4 mb-8">
              {["1 Month", "3 Months", "6 Months", "12 Months"].map(
                (label, i) => (
                  <button
                    key={i}
                    className={`px-6 py-1 rounded-full ${
                      selectedDuration === label
                        ? "bg-gray-100 border border-gray-300"
                        : "bg-transparent border border-gray-200"
                    }`}
                    onClick={() => setSelectedDuration(label)}
                  >
                    {label}
                  </button>
                )
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-xl p-6 flex flex-col items-center">
                <h3 className="text-lg font-semibold">Basic</h3>
                <p className="text-3xl font-bold mt-2">
                  ₹19<span className="text-base font-normal">/month</span>
                </p>
                <button onClick={handleNextProfileStep} className="mt-4 px-6 py-2 bg-gray-100 rounded-md">
                  Choose Plan
                </button>
                <ul className="mt-6 space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <Icon
                      icon="qlementine-icons:check-tick-12"
                      className="text-xl text-gray-700"
                    />{" "}
                    <span>20 Images</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon
                      icon="qlementine-icons:check-tick-12"
                      className="text-xl text-gray-700"
                    />{" "}
                    <span>5 Videos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon
                      icon="entypo:cross"
                      className="text-xl text-red-700"
                    />{" "}
                    <span>Customer Contact</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon
                      icon="entypo:cross"
                      className="text-xl text-red-700"
                    />{" "}
                    <span>Customer Contact</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon
                      icon="entypo:cross"
                      className="text-xl text-red-700"
                    />{" "}
                    <span>Customer Contact</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon
                      icon="entypo:cross"
                      className="text-xl text-red-700"
                    />{" "}
                    <span>Customer Contact</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon
                      icon="entypo:cross"
                      className="text-xl text-red-700"
                    />{" "}
                    <span>Customer Contact</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon
                      icon="entypo:cross"
                      className="text-xl text-red-700"
                    />{" "}
                    <span>Customer Contact</span>
                  </li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 flex flex-col items-center relative">
                <span className="absolute top-2 right-2 bg-yellow-300 text-xs font-semibold px-2 py-1 rounded-full">
                  Most Popular
                </span>
                <h3 className="text-lg font-semibold">Advanced</h3>
                <p className="text-3xl font-bold mt-2">
                  ₹49<span className="text-base font-normal">/month</span>
                </p>
                <button onClick={handleNextProfileStep} className="mt-4 px-6 py-2 bg-gray-100 rounded-md">
                  Choose Plan
                </button>
                <ul className="mt-6 space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <Icon
                      icon="qlementine-icons:check-tick-12"
                      className="text-xl text-gray-700"
                    />{" "}
                    <span>50 Images</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon
                      icon="qlementine-icons:check-tick-12"
                      className="text-xl text-gray-700"
                    />{" "}
                    <span>10 Videos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon
                      icon="qlementine-icons:check-tick-12"
                      className="text-xl text-gray-700"
                    />{" "}
                    <span>Customer Contact</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon
                      icon="qlementine-icons:check-tick-12"
                      className="text-xl text-gray-700"
                    />{" "}
                    <span>Customer Contact</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon
                      icon="qlementine-icons:check-tick-12"
                      className="text-xl text-gray-700"
                    />{" "}
                    <span>Customer Contact</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon
                      icon="qlementine-icons:check-tick-12"
                      className="text-xl text-gray-700"
                    />{" "}
                    <span>Customer Contact</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon
                      icon="qlementine-icons:check-tick-12"
                      className="text-xl text-gray-700"
                    />{" "}
                    <span>Customer Contact</span>
                  </li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 flex flex-col items-center">
                <h3 className="text-lg font-semibold">Premium</h3>
                <p className="text-3xl font-bold mt-2">
                  ₹99<span className="text-base font-normal">/month</span>
                </p>
                <button onClick={handleNextProfileStep} className="mt-4 px-6 py-2 bg-gray-100 rounded-md">
                  Choose Plan
                </button>
                <ul className="mt-6 space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <Icon
                      icon="qlementine-icons:check-tick-12"
                      className="text-xl text-gray-700"
                    />{" "}
                    <span>100 Images</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon
                      icon="qlementine-icons:check-tick-12"
                      className="text-xl text-gray-700"
                    />{" "}
                    <span>20 Videos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon
                      icon="qlementine-icons:check-tick-12"
                      className="text-xl text-gray-700"
                    />{" "}
                    <span>Customer Contact</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon
                      icon="qlementine-icons:check-tick-12"
                      className="text-xl text-gray-700"
                    />{" "}
                    <span>Feature X</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon
                      icon="qlementine-icons:check-tick-12"
                      className="text-xl text-gray-700"
                    />{" "}
                    <span>Feature Y</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon
                      icon="qlementine-icons:check-tick-12"
                      className="text-xl text-gray-700"
                    />{" "}
                    <span>Feature Z</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon
                      icon="qlementine-icons:check-tick-12"
                      className="text-xl text-gray-700"
                    />{" "}
                    <span>Feature A</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon
                      icon="qlementine-icons:check-tick-12"
                      className="text-xl text-gray-700"
                    />{" "}
                    <span>Feature B</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon
                      icon="qlementine-icons:check-tick-12"
                      className="text-xl text-gray-700"
                    />{" "}
                    <span>Feature C</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-6 text-center">
              By subscribing, you agree to VendorCo’s Terms &amp; Conditions
            </p>
          </div>
        )}
        {step === 13 && (
          <div className="bg-white p-8 rounded-lg border border-gray-200 max-w-lg mx-auto text-center shadow-sm">
            <img
              src={images.homePage.signUp.paymentSuccessImage}
              alt="Payment Successful"
              className="w-50 mx-auto mb-4"
            />

            {/* Title */}
            <h2 className="text-xl font-bold text-gray-900">
              Payment Successful!
            </h2>

            {/* Description */}
            <p className="text-gray-600 mt-2 text-sm">
              Your Subscription plan has been activated.
              <br />
              Please login again to continue.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col gap-3">
              <button
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded-lg"
                onClick={() => navigate("/login")}
              >
                Login Again
              </button>
              <button
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg"
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
            </div>

            {/* Footer Note */}
            <p className="text-xs text-gray-500 mt-6">
              You can manage your billing preferences in the settings.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SignUpPage;
