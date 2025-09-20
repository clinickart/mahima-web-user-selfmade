import React from "react";
import HOC from "../../components/layout/LoginLayout/HOC";

const stats = [
  {
    title: "Total Sales",
    value: "643,823",
    change: "+0.4%",
    changeColor: "text-green-500",
    subValue: "",
  },
  {
    title: "Total Users",
    value: "142,937",
    change: "-12%",
    changeColor: "text-red-500",
    subValue: "",
  },
  {
    title: "Total Buyers",
    value: "120,981",
    change: "+0.4%",
    changeColor: "text-green-500",
    subValue: "",
  },
  {
    title: "Total Orders",
    value: "120",
    change: "",
    changeColor: "",
    subValue: "0",
  },
  {
    title: "Total Customers",
    value: "85",
    change: "",
    changeColor: "",
    subValue: "0",
  },
  {
    title: "Return Orders",
    value: "5",
    change: "",
    changeColor: "",
    subValue: "0",
  },
];

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="bg-[#EFEFEF] rounded-lg p-4 shadow-sm">
          <h4 className="text-gray-600 text-sm">{stat.title}</h4>
          <p className="text-2xl font-bold mb-2">{stat.value}</p>
          {stat.change && (
            <p className={`text-sm font-medium ${stat.changeColor}`}>
              {stat.change}
            </p>
          )}
          {stat.subValue && (
            <p className="text-xs text-gray-500 pt-2">{stat.subValue}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default HOC(Dashboard);
