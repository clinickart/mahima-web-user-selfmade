import React from "react";
import Chart from "react-apexcharts";

export const BarChartOne = () => {
  const options = {
    chart: {
      type: "bar",
      height: 180,
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "40%",
        borderRadius: 2,
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      show: false,
    },
    xaxis: {
      categories: ["July", "Aug", "Sep", "Oct", "Nov", "Dec"],
      labels: {
        style: {
          colors: "#ccc",
          fontSize: "12px",
        },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
    legend: {
      show: false,
    },
    fill: {
      colors: ["#C0C0C0"], // light grey/white bars
      opacity: 1,
    },
    tooltip: {
      enabled: false,
    },
  };

  const series = [
    {
      name: "Subscriptions",
      data: [40, 55, 35, 75, 60, 42],
    },
  ];

  return (
    <div className="w-full">
      <Chart options={options} series={series} type="bar" height={180} />
    </div>
  );
};

export default BarChartOne;
