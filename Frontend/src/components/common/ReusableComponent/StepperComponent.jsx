import React from "react";
import { Icon } from "@iconify-icon/react";

const steps = ["Job Details", "Mandatory", "Address", "Invoicing"];

const CustomStepper = ({ activeStep = 0 ,steps=steps}) => {
  const stepWidth = 100 / steps.length;
  const halfStepWidth = stepWidth / 2;
  const progressWidth = activeStep * stepWidth;

  return (
    <div className="w-full px-4 md:px-12 py-6">
      <div className="relative flex items-center">
        <div
          className="absolute top-8/10 h-1 bg-gray-200 transform -translate-y-1/2 z-0"
          style={{
            left: `${halfStepWidth}%`,
            right: `${halfStepWidth}%`,
          }}
        />

        <div
          className="absolute top-8/10 h-1 bg-orange-500 transform -translate-y-1/2 z-10 transition-all duration-300"
          style={{
            left: `${halfStepWidth}%`,
            width: `${progressWidth}%`,
          }}
        />

        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center flex-1 z-20">
            <span
              className={`mb-2 text-xs md:text-sm font-semibold ${
                index === activeStep ? "text-orange-500" : "text-gray-500"
              }`}
            >
              {step.toUpperCase()}
            </span>

            {index < activeStep ? (
              <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white">
                <Icon icon="mdi:check" className="text-xs" />
              </div>
            ) : (
              <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-orange-500" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomStepper;
