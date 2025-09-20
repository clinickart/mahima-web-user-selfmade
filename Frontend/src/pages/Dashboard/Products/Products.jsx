import React, { useState } from "react";
import HOC from "../../../components/layout/LoginLayout/HOC";
import {
  ReusablePaginationComponent,
  ReusableTableComponent,
} from "../../../components/common/ReusableComponent/ReusableComponent";
import { Icon } from "@iconify-icon/react";
import images from "../../../lib/exportImages";
import { useNavigate } from "react-router-dom";

const products = [
  {
    name: "T-Men's UA Storm Armour Down 2.0 Jacket",
    category: "Outer",
    status: "Active",
    stock: 401,
    price: "$178",
    image: images.homePage.login.dashboard.products.images[0].image,
  },
  {
    name: "Windproof Handbell Oversized Long Coat",
    category: "Outer",
    status: "Scheduled",
    stock: 738,
    price: "$178",
    image: images.homePage.login.dashboard.products.images[1].image,
  },
  {
    name: "Women's Stripe Sweater",
    category: "Sweater",
    status: "Active",
    stock: 432,
    price: "$178",
    image: images.homePage.login.dashboard.products.images[2].image,
  },
  {
    name: "Women's Turtleneck Sweater",
    category: "Sweater",
    status: "Draft",
    stock: 0,
    price: "$178",
    image: images.homePage.login.dashboard.products.images[3].image,
  },
  {
    name: "One Set - Casual Hoodie with Buttons for Toddler",
    category: "Kids",
    status: "Active",
    stock: 334,
    price: "$178",
    image: images.homePage.login.dashboard.products.images[4].image,
  },

];

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate=useNavigate();
  const itemsPerPage = 4;
  const paginatedData = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const ProductCell = ({ value, image }) => (
    <div className="flex items-center gap-2">
      <img src={image} alt={value} className="w-10 h-10 object-cover rounded" />
      <span>{value}</span>
    </div>
  );

  const StatusCell = ({ value }) => {
    let colorClass = "";
    switch (value) {
      case "Active":
        colorClass = "bg-green-100 text-green-800";
        break;
      case "Scheduled":
        colorClass = "bg-blue-100 text-blue-800";
        break;
      case "Draft":
        colorClass = "bg-yellow-100 text-yellow-800";
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
      Header: "PRODUCT",
      accessor: "name",
      Cell: (row) => <ProductCell value={row.name} image={row.image} />,
      sortable: true,
    },
    { Header: "CATEGORY", accessor: "category", sortable: true },
    {
      Header: "STATUS",
      accessor: "status",
      Cell: (value) => <StatusCell value={value?.status} />,
      sortable: true,
    },
    { Header: "STOCK", accessor: "stock", sortable: true },
    { Header: "PRICE", accessor: "price", sortable: true },
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
      <h5 className="text-lg font-semibold">Products</h5>
      <div className="bg-white rounded-lg shadow p-4 mt-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Product List</h2>
          <div className="flex gap-2">
            <button className="text-sm flex items-center gap-1 bg-gray-200 px-3 py-1.5 rounded">
              Sort
              <Icon icon="mdi:sort" className="text-lg ml-1" />
            </button>
            <button className="text-sm flex items-center gap-1 bg-gray-200 px-3 py-1.5 rounded">
              <Icon icon="mdi:filter" className="text-lg ml-1" />
              Filters
            </button>
            <button onClick={() => navigate("/products/add")} className="text-sm flex items-center gap-1 bg-[#D64860] text-white px-3 py-1.5 rounded">
              <Icon icon="mdi:plus" className="text-lg ml-1" />
              Add Product
            </button>
          </div>
        </div>
        <ReusableTableComponent data={paginatedData} columns={columns} />
        <div className="mt-3">
          <ReusablePaginationComponent
            totalItems={products.length}
            itemsPerPage={itemsPerPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
};

export default HOC(Products);
