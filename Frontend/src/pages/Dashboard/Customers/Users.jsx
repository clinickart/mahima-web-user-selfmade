import React, { useState } from "react";
import HOC from "../../../components/layout/LoginLayout/HOC";
import { ReusablePaginationComponent, ReusableTableComponent } from "../../../components/common/ReusableComponent/ReusableComponent";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

const users = [
  {
    name: "Samanta Legend",
    email: "samanta@mail.com",
    address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    createdAt: "Sep 19, 2010",
    lastActivity: "May 6, 2012",
  },
  {
    name: "Annette Black",
    email: "annette1@mail.com",
    address: "3517 W. Gray St. Utica, Pennsylvania 57867",
    createdAt: "Aug 27, 2019",
    lastActivity: "April 28, 2016",
  },
  {
    name: "Dianne Russell",
    email: "rdianne@mail.com",
    address: "8502 Preston Rd. Inglewood, Maine 98380",
    createdAt: "Mar 02, 2019",
    lastActivity: "November 16, 2014",
  },
  {
    name: "Devon Lane",
    email: "delane@mail.com",
    address: "2464 Royal Ln. Mesa, New Jersey 45463",
    createdAt: "Jul 11, 2015",
    lastActivity: "March 23, 2013",
  },
  {
    name: "Marvin McKinney",
    email: "marvin5@mail.com",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    createdAt: "Apr 14, 2004",
    lastActivity: "November 16, 2014",
  },
  {
    name: "Jerome Bell",
    email: "belljer@mail.com",
    address: "8502 Preston Rd. Inglewood, Maine 98380",
    createdAt: "Sep 19, 2010",
    lastActivity: "March 23, 2013",
  },
];

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const paginatedData = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const columns = [
    {
      Header: "Name",
      accessor: "name",
      sortable: true,
    },
    {
      Header: "Email Address",
      accessor: "email",
      sortable: true,
    },
    {
      Header: "Complete Address",
      accessor: "address",
    },
    {
      Header: "Create At",
      accessor: "createdAt",
      sortable: true,
    },
    {
      Header: "Last Activity",
      accessor: "lastActivity",
      sortable: true,
    },
    {
      Header: "Action",
      accessor: "action",
      Cell: (row) => (
        <button className="text-[#D64860] hover:text-[#D64860]">Detail</button>
      ),
    },
  ];

  return (
    <div className="">
      <h5 className="text-lg font-semibold">Customers</h5>

      <div className="bg-white rounded-lg shadow p-4 mt-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Users</h2>
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

        <ReusableTableComponent data={users} columns={columns} />

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

export default HOC(Users);
