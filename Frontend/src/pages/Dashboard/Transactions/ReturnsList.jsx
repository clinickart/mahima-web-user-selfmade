import React, { useState } from "react";
import HOC from "../../../components/layout/LoginLayout/HOC";
import {
  ReusablePaginationComponent,
  ReusableTableComponent,
} from "../../../components/common/ReusableComponent/ReusableComponent";
import { Icon } from "@iconify-icon/react";

const returns = [
  {
    transactionNumber: "430906237494",
    customerName: "Jane Cooper",
    purchasedProduct: "T-Men's UA Storm Armour Down 2.0 Jacket",
    date: "20 Oct 2022",
    phoneNumber: "+62878981239",
    paymentAmount: "$123",
    status: "Warning",
  },
  {
    transactionNumber: "387492287349",
    customerName: "Wade Warren",
    purchasedProduct: "Windproof Handbell Oversized Long Coat",
    date: "20 Oct 2022",
    phoneNumber: "+62878981239",
    paymentAmount: "$236",
    status: "Success",
  },
  {
    transactionNumber: "093420239402",
    customerName: "Williamson",
    purchasedProduct: "Women's Stripe Sweater",
    date: "20 Oct 2022",
    phoneNumber: "+62878981239",
    paymentAmount: "$726",
    status: "Success",
  },
  {
    transactionNumber: "934850829349",
    customerName: "Jenny Wilson",
    purchasedProduct: "Women's Turtleneck Sweater",
    date: "20 Oct 2022",
    phoneNumber: "+62878981239",
    paymentAmount: "$124",
    status: "Reject",
  },
  {
    transactionNumber: "293840029340",
    customerName: "Williamson",
    purchasedProduct: "Women's Clothing Azure",
    date: "20 Oct 2022",
    phoneNumber: "+62878981239",
    paymentAmount: "$149",
    status: "Success",
  },
  {
    transactionNumber: "394024029340",
    customerName: "Robert Fox",
    purchasedProduct: "One Set - Casual Hoodie with Buttons for Toddler",
    date: "20 Oct 2022",
    phoneNumber: "+62878981239",
    paymentAmount: "$152",
    status: "Success",
  },
];

const StatusCell = ({ value }) => {
  let colorClass = "";
  switch (value) {
    case "Warning":
      colorClass = "bg-yellow-100 text-yellow-800";
      break;
    case "Success":
      colorClass = "bg-green-100 text-green-800";
      break;
    case "Reject":
      colorClass = "bg-red-100 text-red-800";
      break;
    default:
      colorClass = "bg-gray-100 text-gray-800";
  }
  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium ${colorClass}`}
    >
      {value}
    </span>
  );
};

const ReturnsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 5;

  const filteredReturns = returns.filter(
    (returnItem) =>
      returnItem.transactionNumber
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      returnItem.customerName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      returnItem.purchasedProduct
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  const paginatedData = filteredReturns.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const columns = [
    {
      Header: "TRANSACTION NUMBER",
      accessor: "transactionNumber",
      sortable: true,
    },
    { Header: "CUSTOMER NAME", accessor: "customerName", sortable: true },
    { Header: "PURCHASED PRODUCT", accessor: "purchasedProduct" },
    { Header: "DATE", accessor: "date", sortable: true },
    { Header: "PHONE NUMBER", accessor: "phoneNumber" },
    { Header: "PAYMENT AMOUNT", accessor: "paymentAmount", sortable: true },
    {
      Header: "STATUS",
      accessor: "status",
      Cell: (row) => <StatusCell value={row.status} />,
      sortable: true,
    },
    {
      Header: "ACTION",
      accessor: "action",
      Cell: () => (
        <button className="text-[#D64860] hover:text-[#D64860] font-medium">
          Detail
        </button>
      ),
    },
  ];

  return (
    <div>
      <h5 className="text-lg font-semibold">Returns</h5>
      <div className="bg-white rounded-lg shadow p-4 mt-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-3">
          <h2 className="text-lg font-semibold">Returns List</h2>
          <div className="flex flex-wrap gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-9 pr-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Icon
                icon="mdi:magnify"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
            <button className="text-sm flex items-center gap-1 border border-[#D64860] text-[#D64860] px-3 py-1.5 rounded">
              <Icon icon="mdi:export" className="text-lg" />
              Export
            </button>
            <button className="text-sm flex items-center gap-1 bg-gray-200 px-3 py-1.5 rounded">
              Sort
              <Icon icon="mdi:sort" className="text-lg ml-1" />
            </button>
            <button className="text-sm flex items-center gap-1 bg-gray-200 px-3 py-1.5 rounded">
              <Icon icon="mdi:filter" className="text-lg ml-1" />
              Filters
            </button>
          </div>
        </div>

        <ReusableTableComponent data={paginatedData} columns={columns} />

        <div className="mt-3">
          <ReusablePaginationComponent
            totalItems={filteredReturns.length}
            itemsPerPage={itemsPerPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
};

export default HOC(ReturnsList);
