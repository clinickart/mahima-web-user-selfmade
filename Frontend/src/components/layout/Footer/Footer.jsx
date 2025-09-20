import React from "react";
import { Icon } from "@iconify-icon/react";
import images from "../../../lib/exportImages";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate=useNavigate();
  const FooterBanner = () => {
    return (
      <div className="bg-[#F5F5F5] pt-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 max-w-xl text-center md:text-left pl-[4%]">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-4">
            Smarter Dental Shopping <br className="hidden md:block" />
            Starts Here
          </h2>
          <p className="text-gray-400 text-sm md:text-base mb-6">
            Get high-quality dental materials trusted by clinics and
            students—now just a tap away. Download the ClinicKart app for a
            seamless, reliable, and affordable shopping experience.
          </p>

          <div className="flex justify-center md:justify-start gap-4 mb-5 min-w-[300px] lg:min-w-[450px]">
            <button className="bg-white text-black flex items-center gap-3 px-5 py-2 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-300">
              <Icon icon="devicon:apple" className="text-2xl" />
              <div className="flex flex-col items-start leading-tight text-sm">
                <span className="text-xs">Download on the</span>
                <span className="font-semibold text-sm">App Store</span>
              </div>
            </button>

            <button className="bg-black text-white flex items-center gap-3 px-5 py-2 rounded-xl shadow-md hover:shadow-lg transition-all">
              <Icon icon="simple-icons:googleplay" className="text-2xl" />
              <div className="flex flex-col items-start leading-tight text-sm">
                <span className="text-xs uppercase">Get it on</span>
                <span className="font-semibold text-sm">Google Play</span>
              </div>
            </button>
          </div>
        </div>

        <div className="flex items-end justify-center h-full">
          <img
            src={images.footer.banners?.[0]?.image}
            alt="ClinicKart App Preview"
            className="w-full object-contain md:object-bottom max-h-[500px]"
          />
        </div>
      </div>
    );
  };

  return (
    <footer className="bg-black text-white text-sm">
      <FooterBanner />
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-6 md:px-16 py-12 border-b border-gray-700">
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-2xl font-semibold">Contact Us Now</h2>
          <p className="text-gray-400 text-sm">
            Simplify Your Customer Relationships, Maximize Growth
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black mt-4 px-6 py-2 rounded-md font-medium flex items-center gap-2">
            Contact Now
            <Icon icon="emojione-monotone:right-arrow" className="text-lg" />
          </button>
        </div>

        <div className="text-center md:text-left w-full md:w-auto">
          <h3 className="font-medium mb-2">
            Subscribe To Clinic Kart Newsletter
          </h3>
          <div className="flex items-center bg-white rounded-md overflow-hidden max-w-md mx-auto md:mx-0">
            <input
              type="email"
              placeholder="Enter email address"
              className="flex-1 px-4 py-2 text-black outline-none"
            />
            <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 font-medium flex items-center gap-1">
              Subscribe Now
              <Icon icon="emojione-monotone:right-arrow" className="text-lg" />
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-16 py-10 grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-700">
        <div className="space-y-4 col-span-1">
          <div className="flex items-center gap-2">
            <img
              src={images?.navbar?.logo}
              alt="Clinic Kart"
              className="w-18"
            />
            <span className="font-normal text-xl">Clinic Kart</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:email-outline" />
            <span>clinickart@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:phone-outline" />
            <span>(704) 555–0127</span>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Menu</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Shop</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Contact Us</li>
            <li onClick={() => navigate("/about-us")} className="cursor-pointer">About Us</li>
            <li onClick={() => navigate("/blogs")} className="cursor-pointer">Blog</li>
            <li>Testimonials</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Help</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Returns</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Social Media</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-white text-xs py-4 px-6 md:px-16">
        <div className="flex flex-col md:flex-row justify-center mx-auto items-center gap-2">
          <span>Copyrights © Clinic Kart 2025</span>
          <div className="flex gap-4">
            <span onClick={() => navigate("/privacy-policy")} className="cursor-pointer" >Privacy Policy</span>
            <span onClick={() => navigate("/terms-and-conditions")} className="cursor-pointer" >
              Terms & Conditions
            </span>
            <span onClick={() => navigate("/refund")} className="cursor-pointer" >Refund Policy</span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <img src={images.footer.banners?.[1]?.image} alt="" className="w-[80%] mx-auto" />
      </div>
    </footer>
  );
};

export default Footer;
