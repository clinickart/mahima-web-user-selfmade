import React, { useState } from "react";
import { Icon } from "@iconify-icon/react";
import HOC from "../../../components/layout/LoginLayout/HOC";
import {
  ReusablePaginationComponent,
  ReusableTableComponent,
} from "../../../components/common/ReusableComponent/ReusableComponent";

const userRoles = [
  {
    userName: "Samanta Legend",
    emailAddress: "samanta@mail.com",
    userRole: "Super Admin",
    phoneNumber: "(603) 555-0123",
    dateAdd: "May 6, 2012",
  },
  {
    userName: "Annette Black",
    emailAddress: "annette1@mail.com",
    userRole: "Admin",
    phoneNumber: "(239) 555-0108",
    dateAdd: "Apr 28, 2016",
  },
  {
    userName: "Dianne Russell",
    emailAddress: "rdianne@mail.com",
    userRole: "Cashier",
    phoneNumber: "(208) 555-0112",
    dateAdd: "Nov 16, 2014",
  },
  {
    userName: "Devon Lane",
    emailAddress: "delane@mail.com",
    userRole: "Admin",
    phoneNumber: "(219) 555-0114",
    dateAdd: "Mar 23, 2013",
  },
  {
    userName: "Marvin McKinney",
    emailAddress: "marvin5@mail.com",
    userRole: "Cashier",
    phoneNumber: "(208) 555-0112",
    dateAdd: "Nov 16, 2014",
  },
  {
    userName: "Jerome Bell",
    emailAddress: "beljer@mail.com",
    userRole: "Cashier",
    phoneNumber: "(704) 555-0127",
    dateAdd: "Mar 23, 2013",
  },
  {
    userName: "Savannah Nguyen",
    emailAddress: "savnguy@mail.com",
    userRole: "Admin",
    phoneNumber: "(225) 555-0118",
    dateAdd: "Apr 15, 2020",
  },
  {
    userName: "Annette Black",
    emailAddress: "annetebl@mail.com",
    userRole: "Cashier",
    phoneNumber: "(303) 555-0105",
    dateAdd: "Jun 22, 2018",
  },
  {
    userName: "Kristin Watson",
    emailAddress: "kristin120@mail.com",
    userRole: "Admin",
    phoneNumber: "(671) 555-0110",
    dateAdd: "Jul 14, 2019",
  },
];

const UserRole = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 5;

  const filteredUserRoles = userRoles.filter(
    (user) =>
      user.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.emailAddress.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.userRole.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedData = filteredUserRoles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const columns = [
    { Header: "USER NAME", accessor: "userName", sortable: true },
    { Header: "EMAIL ADDRESS", accessor: "emailAddress", sortable: true },
    { Header: "USER ROLE", accessor: "userRole", sortable: true },
    { Header: "PHONE NUMBER", accessor: "phoneNumber" },
    { Header: "DATE ADD", accessor: "dateAdd", sortable: true },
  ];

  return (
    <div>
      <h5 className="text-lg font-semibold">User Role</h5>

      <div className="bg-white rounded-lg shadow p-4 mt-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">List User Role</h2>
          <div className="flex gap-2">
            <div className="relative">
              {/* <input
                type="text"
                placeholder="Search"
                className="pl-9 pr-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              /> */}
            </div>
            <button className="text-sm flex items-center gap-1 bg-[#D64860] text-white px-3 py-1.5 rounded">
              <Icon icon="mingcute:user-add-line" className="text-lg" />
              Add User Role
            </button>
          </div>
        </div>

        <ReusableTableComponent data={paginatedData} columns={columns} />

        <div className="mt-3">
          <ReusablePaginationComponent
            totalItems={filteredUserRoles.length}
            itemsPerPage={itemsPerPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
};

export default HOC(UserRole);
