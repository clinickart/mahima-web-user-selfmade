import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderNav from "../../../components/layout/NavBar/HeaderNav";
import images from "../../../lib/exportImages";



const LoginPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const handleContinue = () => {
    if (email.trim() !== "") {
      setStep(2);
    }
  };

  const handleVerify = () => {
    if (otp.trim().length === 6) {
      setStep(3);
    }
  };

  const steps = ["Enter Email", "Verify OTP", "Success"];

  return (
    <section className="mb-4 h-screen">
      <HeaderNav />
      <div className="max-w-7xl mx-auto px-4 py-8 flex justify-center items-center h-[calc(100vh-60px)]">
        <div className="w-full bg-white p-6 rounded-lg">
          {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-gray-100 p-4">
              <div className="flex flex-col justify-center w-full md:w-[80%] mx-auto">
                <h2 className="text-2xl font-bold mb-2">Welcome, John Doe</h2>
                <p className="text-black mb-4">
                  Enter your email. Work email preferred.
                </p>
                <input
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <button
                  onClick={handleContinue}
                  className="w-full px-6 py-2 bg-[#C53958] text-white rounded-md hover:bg-[#C53958]/80 mb-3"
                >
                  Continue
                </button>
                <button
                  onClick={() => navigate(-1)}
                  className="w-full px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                >
                  Back
                </button>
              </div>
              <div className="hidden md:block rounded-lg">
                <img
                  src={images.homePage.about}
                  alt="Business features illustration"
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-bold mb-2">
                Verify Your Email Address
              </h2>
              <p className="text-sm mb-4">
                We've sent a One Time Password (OTP) to: <br />
                <span className="font-semibold">{email}</span> <br />
                <button
                  onClick={() => setStep(1)}
                  className="text-blue-500 underline ml-1"
                >
                  (Change)
                </button>
              </p>
              <p className="mb-2 font-bold">
                Please enter the 6-digit code below to verify your email
              </p>
              <input
                type="text"
                inputMode="numeric"
                placeholder="Enter 6-digit code"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength={6}
                className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button
                onClick={handleVerify}
                className="w-full px-6 py-2 bg-[#C53958] text-white rounded-md hover:bg-[#C53958]/80 mb-3"
              >
                Verify & Continue
              </button>
              <p className="text-sm text-gray-600 mb-4">
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
                onClick={() => alert("OTP Resent")}
                className="text-red-500 text-sm font-medium"
              >
                RESEND OTP
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="max-w-md mx-auto text-center bg-[linear-gradient(180deg,#E0F8F3_0%,rgba(243,251,249,0.12)_100%)] p-6 rounded-lg">
              <img
                src={images.homePage.login.successImage}
                alt="Success"
                className="w-52 mx-auto mb-4"
              />
              <h2 className="text-xl font-bold mb-2">
                Email Verified Successfully!
              </h2>
              <p className="text-gray-700 mb-4">
                You're all set. Welcome aboard! You can now explore your Vendor
                Dashboard and start managing your listings, orders, and more.
              </p>
              <button
                onClick={() => navigate("/dashboard")}
                className="px-6 py-2 bg-yellow-400 rounded-md hover:bg-yellow-500 font-semibold w-[80%] mx-auto"
              >
                Explore Dashboard
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
