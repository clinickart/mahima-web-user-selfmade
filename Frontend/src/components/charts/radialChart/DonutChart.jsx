import React from "react";
import Chart from "react-apexcharts";

export const DonutStatusChart = () => {
  const options = {
    chart: {
      type: "radialBar",
      sparkline: {
        enabled: true,
      },
    },
    colors: ["#FF4C29", "#F176D2", "#FA8989"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 10,
          size: "30%",
        },
        track: {
          show: false,
        },
        dataLabels: {
          show: false,
        },
      },
    },
    labels: ["Active", "Renewal", "Cancel"],
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 640,
        options: {
          chart: {
            height: 180,
          },
        },
      },
    ],
  };

  const series = [75, 40, 10];

  return (
    <div className="w-full flex flex-col items-center sm:items-end">
      <div className="w-full max-w-full sm:max-w-sm">
        <Chart
          options={options}
          series={series}
          type="radialBar"
          width="100%"
          height={220}
        />
      </div>

      <div className="w-full sm:w-1/2 max-w-sm text-xs sm:text-sm text-white space-y-2 mt-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF4C29]"></span>
            <span>Active</span>
          </div>
          <span>10,069+</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F176D2]"></span>
            <span>Renewal</span>
          </div>
          <span>269+</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FA8989]"></span>
            <span>Cancel</span>
          </div>
          <span>42</span>
        </div>
      </div>
    </div>
  );
};
