import React, { useState } from "react";
import HOC from "../../../components/layout/LoginLayout/HOC";

import { Icon } from "@iconify-icon/react";
import {
  ReusablePaginationComponent,
  ReusableTableComponent,
} from "../../../components/common/ReusableComponent/ReusableComponent";
import { useNavigate } from "react-router-dom";

const invoices = [
  {
    userName: "Samanta Legend",
    emailAddress: "samanta@mail.com",
    invoiceId: "INV-2023-001",
    amount: "₹350",
    dateAdd: "May 6, 2012",
  },
  {
    userName: "Annette Black",
    emailAddress: "annette1@mail.com",
    invoiceId: "INV-2023-001",
    amount: "₹350",
    dateAdd: "Apr 28, 2016",
  },
  {
    userName: "Dianne Russell",
    emailAddress: "rdianne@mail.com",
    invoiceId: "INV-2023-001",
    amount: "₹150",
    dateAdd: "Nov 16, 2014",
  },
  {
    userName: "Devon Lane",
    emailAddress: "delane@mail.com",
    invoiceId: "INV-2023-001",
    amount: "₹750",
    dateAdd: "Mar 23, 2013",
  },
  {
    userName: "Marvin McKinney",
    emailAddress: "marvin5@mail.com",
    invoiceId: "INV-2023-001",
    amount: "₹550",
    dateAdd: "Nov 16, 2014",
  },
  {
    userName: "Jerome Bell",
    emailAddress: "beljer@mail.com",
    invoiceId: "INV-2023-001",
    amount: "₹550",
    dateAdd: "Mar 23, 2013",
  },
  {
    userName: "Savannah Nguyen",
    emailAddress: "savnguy@mail.com",
    invoiceId: "INV-2023-001",
    amount: "₹350",
    dateAdd: "Apr 15, 2020",
  },
];

const SummaryCard = ({ title, value, change }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold mt-1">{value}</p>
      <p
        className={`text-xs mt-1 ${
          change.includes("-") ? "text-red-500" : "text-green-500"
        }`}
      >
        {change}
      </p>
    </div>
  );
};

const Invoices = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 5;
  const navigate = useNavigate();

  const filteredInvoices = invoices.filter(
    (invoice) =>
      invoice.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.emailAddress.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.invoiceId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedData = filteredInvoices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const columns = [
    { Header: "USER NAME", accessor: "userName", sortable: true },
    { Header: "EMAIL ADDRESS", accessor: "emailAddress", sortable: true },
    { Header: "INVOICE ID", accessor: "invoiceId" },
    { Header: "AMOUNT", accessor: "amount" },
    { Header: "DATE ADD", accessor: "dateAdd", sortable: true },
  ];

  return (
    <div>
      <h5 className="text-lg font-semibold">User Role</h5>
      <div className="bg-white rounded-lg shadow p-4 mt-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold mb-4">Invoice List</h2>
          <button onClick={() => navigate("/invoice/create")} className="text-sm flex items-center gap-1 bg-[#D64860] text-white px-3 py-1.5 rounded">
            <Icon icon="mdi:plus" className="text-lg" />
            Create Invoice
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <SummaryCard title="Invoices Today" value="₹1,200" change="+10%" />
          <SummaryCard title="Total Sales Today" value="₹5,500" change="+5%" />
          <SummaryCard title="Customers Today" value="25" change="+15%" />
          <SummaryCard title="Orders Pending" value="5" change="-2%" />
        </div>

        <ReusableTableComponent data={paginatedData} columns={columns} />
        <div className="mt-3">
          <ReusablePaginationComponent
            totalItems={filteredInvoices.length}
            itemsPerPage={itemsPerPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
};

export default HOC(Invoices);
