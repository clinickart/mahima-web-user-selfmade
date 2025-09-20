import React from "react";
import Chart from "react-apexcharts";

export const OrderStatsChart = () => {
  const options = {
    chart: {
      fontFamily: "Outfit, sans-serif",
      height: 350,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    colors: ["#465FFF"],
    xaxis: {
      categories: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      labels: {
        show: true,
      },
    },
    yaxis: {
      labels: {
        show: true,
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return `${val}`;
      },
      style: {
        fontSize: "14px",
        colors: ["#fff"],
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      enabled: true,
    },
    markers: {
      size: 6,
    },
  };

  const series = [
    {
      name: "Orders",
      data: [30, 40, 25, 50, 49, 60, 70],
    },
  ];

  return (
    <div className="max-w-full overflow-x-auto">
      <div id="orderStatsChart">
        <Chart options={options} series={series} type="line" height={350} />
      </div>
    </div>
  );
};


export const ViewerShipChart = () => {
  const options = {
    chart: {
      type: "line",
      toolbar: { show: false },
      zoom: { enabled: false },
      background: "transparent",
      fontFamily: "Outfit, sans-serif",
    },
    stroke: {
      width: 2,
      curve: "smooth",
    },
    colors: ["#FF5733", "#F5CBA7"],
    markers: {
      size: 4,
      colors: ["#FF5733", "#F5CBA7"],
      strokeColors: "#161717",
      strokeWidth: 2,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: { colors: "#ccc" },
      },
      axisBorder: {
        color: "#444",
        show: true,
      },
    },
    yaxis: {
      labels: {
        style: { colors: "#ccc" },
        formatter: (val) => `${val}K`,
      },
      axisBorder: {
        show: true,
        color: "#444",
      },
    },
    legend: {
      show: true,
      labels: {
        colors: "#ccc",
      },
    },
    tooltip: {
      theme: "dark",
      y: {
        formatter: (val) => `${val}K`,
      },
    },
    grid: {
      show: false,
    },
  };

  const series = [
    {
      name: "Total Views",
      data: [200, 190, 180, 230, 900, 500, 850, 1000, 750, 950, 980, 1000],
    },
    {
      name: "Unique Viewers",
      data: [150, 160, 170, 180, 600, 400, 700, 900, 720, 900, 950, 970],
    },
  ];

  return (
    <div className="w-full">
      <Chart options={options} series={series} type="line" height={300} />
    </div>
  );
};

