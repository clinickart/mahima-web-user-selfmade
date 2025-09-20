import React, { useState } from "react";
import HOC from "../../../components/layout/LoginLayout/HOC";
import {
  ReusablePaginationComponent,
  ReusableTableComponent,
} from "../../../components/common/ReusableComponent/ReusableComponent";
import { Icon } from "@iconify-icon/react";

const transactions = [
  {
    transactionNumber: "20129380132",
    customerName: "Jane Cooper",
    purchasedProduct: "Women's Clothing Azure",
    totalProduct: 2,
    paymentAmount: "$300",
    status: "Process",
  },
  {
    transactionNumber: "20129380133",
    customerName: "Wade Warren",
    purchasedProduct: "Windproof Handbell Oversized Long Coat",
    totalProduct: 3,
    paymentAmount: "$384",
    status: "Sent",
  },
  {
    transactionNumber: "20129380134",
    customerName: "Williamson",
    purchasedProduct: "Women's Turtleneck Sweater",
    totalProduct: 1,
    paymentAmount: "$122",
    status: "Packing",
  },
  {
    transactionNumber: "20129380135",
    customerName: "Jenny Wilson",
    purchasedProduct: "T-Men's UA Storm Armour Down Jacket",
    totalProduct: 2,
    paymentAmount: "$837",
    status: "Arrived",
  },
  {
    transactionNumber: "20129380134",
    customerName: "Williamson",
    purchasedProduct: "Women's Stripe Sweater",
    totalProduct: 4,
    paymentAmount: "$327",
    status: "Failed",
  },
  {
    transactionNumber: "20129380136",
    customerName: "Robert Fox",
    purchasedProduct: "Women's Clothing Azure",
    totalProduct: 1,
    paymentAmount: "$823",
    status: "Arrived",
  },
  {
    transactionNumber: "20129380136",
    customerName: "Robert Fox",
    purchasedProduct: "One Set - Casual Hoodie with Buttons for Toddler",
    totalProduct: 1,
    paymentAmount: "$387",
    status: "Arrived",
  },
];

const TransactionList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 5;

  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.transactionNumber.includes(searchTerm) ||
      transaction.customerName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      transaction.purchasedProduct
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  const paginatedData = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const StatusCell = ({ value }) => {
    let colorClass = "";
    switch (value) {
      case "Process":
        colorClass = "bg-blue-100 text-blue-800";
        break;
      case "Sent":
        colorClass = "bg-indigo-100 text-indigo-800";
        break;
      case "Packing":
        colorClass = "bg-yellow-100 text-yellow-800";
        break;
      case "Arrived":
        colorClass = "bg-green-100 text-green-800";
        break;
      case "Failed":
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

  const columns = [
    {
      Header: "TRANSACTION NUMBER",
      accessor: "transactionNumber",
      sortable: true,
    },
    { Header: "CUSTOMER NAME", accessor: "customerName", sortable: true },
    { Header: "PURCHASED PRODUCT", accessor: "purchasedProduct" },
    { Header: "TOTAL PRODUCT", accessor: "totalProduct", sortable: true },
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
      <h5 className="text-lg font-semibold">Transaction</h5>

      <div className="bg-white rounded-lg shadow p-4 mt-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Transaction List</h2>
          <div className="flex gap-2">
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
            totalItems={filteredTransactions.length}
            itemsPerPage={itemsPerPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
};

export default HOC(TransactionList);
