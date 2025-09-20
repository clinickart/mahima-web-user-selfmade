import React, { useState } from "react";
import HOC from "../../../components/layout/LoginLayout/HOC";
import {
  ReusablePaginationComponent,
  ReusableTableComponent,
} from "../../../components/common/ReusableComponent/ReusableComponent";
import { Icon } from "@iconify-icon/react";
import images from "../../../lib/exportImages";

// Sample category data based on the image
const categories = [
  {
    name: "T-Shirt",
    description:
      "Discover easy and casual t-shirt for women and men with variety of colors, pattern and comfy materials.",
    status: "Active",
    image: images.homePage.login.dashboard.products.images[0].image,
  },
  {
    name: "Outer",
    description:
      "Discover a variety of outers to keep yourself warm with stylish and comfortable ways.",
    status: "Draft",
    image: images.homePage.login.dashboard.products.images[1].image,
  },
  {
    name: "Bag",
    description:
      "Discover a variety of bags that are suitable for men, women and children in all situations.",
    status: "Active",
    image: images.homePage.login.dashboard.products.images[2].image,
  },
  {
    name: "Accessories",
    description:
      "Complete your outfit with accessories - whether jewelry, hat, sunglasses, belt or scarf. To do so...",
    status: "Draft",
    image: images.homePage.login.dashboard.products.images[3].image,
  },
  {
    name: "Shirt",
    description:
      "Find most elegant and comfortable shirt from casual to formal wear.",
    status: "Active",
    image: images.homePage.login.dashboard.products.images[4].image,
  },
];

const Categories = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const paginatedData = categories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Custom Cell for Category (Image + Name)
  const CategoryCell = ({ value, image }) => (
    <div className="flex items-center gap-2">
      <img src={image} alt={value} className="w-10 h-10 object-cover rounded" />
      <span>{value}</span>
    </div>
  );

  // Custom Cell for Status (Colored Badge)
  const StatusCell = ({ value }) => {
    let colorClass = "";
    switch (value) {
      case "Active":
        colorClass = "bg-green-100 text-green-800";
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
      Header: "CATEGORY",
      accessor: "name",
      Cell: (row) => <CategoryCell value={row.name} image={row.image} />,
      sortable: true,
    },
    { Header: "DESCRIPTION", accessor: "description" },
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
      <h5 className="text-lg font-semibold">Categories</h5>
      <div className="bg-white rounded-lg shadow p-4 mt-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Categories List</h2>
          <div className="flex gap-2">
            <button className="text-sm flex items-center gap-1 bg-gray-200 px-3 py-1.5 rounded">
              Sort
              <Icon icon="mdi:sort" className="text-lg ml-1" />
            </button>
            <button className="text-sm flex items-center gap-1 bg-gray-200 px-3 py-1.5 rounded">
              <Icon icon="mdi:filter" className="text-lg ml-1" />
              Filters
            </button>
            <button className="text-sm flex items-center gap-1 bg-[#D64860] text-white px-3 py-1.5 rounded">
              <Icon icon="mdi:plus" className="text-lg ml-1" />
              Add Category
            </button>
            <button>
              <Icon
                icon="material-symbols-light:dashboard-outline-rounded"
                className="text-lg text-black"
              />
            </button>
            <button>
              <Icon icon="line-md:menu" className="text-lg text-[#D64860]" />
            </button>
          </div>
        </div>
        <ReusableTableComponent data={paginatedData} columns={columns} />
        <div className="mt-3">
          <ReusablePaginationComponent
            totalItems={categories.length}
            itemsPerPage={itemsPerPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
};

export default HOC(Categories);
