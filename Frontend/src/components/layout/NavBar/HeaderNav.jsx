import React, { useState } from "react";
import { Icon } from "@iconify-icon/react";
import { useNavigate } from "react-router-dom";
import images from "../../../lib/exportImages";
import {
  ReusableModal,
  ReusablePopover,
} from "../../common/ReusableComponent/ReusableComponent";

const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto px-2 py-2">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold shrink-0
              ${
                index === currentStep
                  ? "bg-[#20C374] text-white"
                  : index < currentStep
                  ? "bg-[#C53958] text-white"
                  : "bg-white text-[#C53958]"
              }`}
          >
            {index + 1}
          </div>
          <span
            className={`ml-1 text-xs sm:text-sm font-medium whitespace-nowrap text-black`}
          >
            {step}
          </span>
          {index < steps.length - 1 && (
            <div
              className={`w-6 sm:w-12 h-[2px] mx-1 sm:mx-2
                ${index < currentStep ? "bg-green-500" : "bg-gray-300"}`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};


const HeaderNav = ({steps = ["Account Creation", "Business Details", "Finish"], currentStep = 0}) => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [view, setView] = useState("login");

  return (
    <>
      <div className="bg-[#F8DA2D] py-1 px-3 flex justify-between items-center">
        <img
          src={images.navbar.logo}
          alt="Logo"
          className="h-16 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <Stepper steps={steps} currentStep={currentStep} />
      </div>
    </>
  );
};

export default HeaderNav;
