import React, { useState } from "react";
import HOC from "../../../components/layout/LoginLayout/HOC";
import {
  ReusablePaginationComponent,
  ReusableTableComponent,
} from "../../../components/common/ReusableComponent/ReusableComponent";
import { Icon } from "@iconify-icon/react";

const users = [
  {
    name: "Samanta Legend",
    email: "samanta@mail.com",
    phoneNumber: "(307) 555-0133",
    address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    createdAt: "Sep 19, 2010",
    lastActivity: "May 6, 2012",
  },
  {
    name: "Jenny Wilson",
    email: "jenny@mail.com",
    phoneNumber: "(205) 555-0100",
    address: "2715 Ash Dr. San Jose, South Dakota 83475",
    createdAt: "Oct 25, 2019",
    lastActivity: "Oct 25, 2019",
  },
  {
    name: "Ronald Richards",
    email: "rrichards@mail.com",
    phoneNumber: "(207) 555-0119",
    address: "8502 Preston Rd. Inglewood, Maine 98380",
    createdAt: "May 20, 2015",
    lastActivity: "May 20, 2015",
  },
  {
    name: "Annette Black",
    email: "blackann@mail.com",
    phoneNumber: "(252) 555-0126",
    address: "6391 Elgin St. Celina, Delaware 10299",
    createdAt: "Aug 24, 2013",
    lastActivity: "Aug 24, 2013",
  },
  {
    name: "Kristin Watson",
    email: "kristinw@mail.com",
    phoneNumber: "(217) 555-0113",
    address: "8502 Preston Rd. Inglewood, Maine 98380",
    createdAt: "Sep 9, 2013",
    lastActivity: "Sep 9, 2013",
  },
  {
    name: "Jacob Jones",
    email: "jjones2@mail.com",
    phoneNumber: "(702) 555-0122",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    createdAt: "Aug 2, 2013",
    lastActivity: "Aug 2, 2013",
  },
];

const Buyers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const paginatedData = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const columns = [
    { Header: "NAME", accessor: "name", sortable: true },
    { Header: "EMAIL ADDRESS", accessor: "email", sortable: true },
    { Header: "PHONE NUMBER", accessor: "phoneNumber", sortable: true },
    { Header: "COMPLETE ADDRESS", accessor: "address" },
    { Header: "LAST TRANSACTION", accessor: "lastActivity", sortable: true },
    {
      Header: "ACTION",
      accessor: "action",
      Cell: () => (
        <button className="text-[#D64860] hover:text-[#D64860]">Detail</button>
      ),
    },
  ];

  return (
    <div>
      <h5 className="text-lg font-semibold">Customers</h5>

      <div className="bg-white rounded-lg shadow p-4 mt-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Buyers</h2>
          <div className="flex gap-2">
            <button className="text-sm flex items-center gap-1 bg-gray-200 px-2 py-1 rounded">
              Sort
              <Icon icon="mdi:sort" className="text-lg ml-2" />
            </button>
            <button className="text-sm flex items-center gap-1 bg-gray-200 px-2 py-1 rounded">
              <Icon icon="mdi:filter" className="text-lg ml-2" />
              Filters
            </button>
          </div>
        </div>

        <ReusableTableComponent data={paginatedData} columns={columns} />

        <div className="mt-3">
          <ReusablePaginationComponent
            totalItems={users.length}
            itemsPerPage={itemsPerPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
};

export default HOC(Buyers);
