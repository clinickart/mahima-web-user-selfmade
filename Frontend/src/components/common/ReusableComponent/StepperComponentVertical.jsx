import React from "react";
import { Icon } from "@iconify-icon/react";

const StepperComponentVertical = ({ activeStep = 0, steps = steps }) => {
  const progressHeight =
    activeStep > 0 ? `${(activeStep / (steps.length - 1)) * 100}%` : "0%";

  return (
    <div className="flex h-full px-4 py-6">
      <div className="relative flex flex-col items-start">
        <div
          className="absolute left-3 w-1 bg-gray-200 z-0"
          style={{
            top: "0.75rem",
            bottom: "0.75rem",
            height: "calc(100% - 2.5rem)",
          }}
        />

        <div
          className="absolute left-3 w-1 bg-orange-500 z-10 transition-all duration-300"
          style={{
            top: "0.75rem",
            height:
              activeStep === 0
                ? "0"
                : `calc(${progressHeight} - ${
                    (0.36 / (steps.length - 1)) * 100
                  }%)`,
          }}
        />

        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-start mb-8 last:mb-0 z-20"
            style={{ minHeight: "3rem" }}
          >
            <div className="flex flex-col items-center mr-4">
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

            <span
              className={`text-sm font-semibold mt-1 ${
                index === activeStep ? "text-orange-500" : "text-gray-500"
              }`}
            >
              {step.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepperComponentVertical;
