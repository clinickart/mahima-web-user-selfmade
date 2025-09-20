
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = ({ toggleSidebar, isSidebarVisible }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // State for expandable menus
  const [openMenu, setOpenMenu] = useState(null);

  const handleNavigate = (path) => {
    navigate(path);
    if (window.innerWidth < 768 && toggleSidebar) {
      toggleSidebar();
    }
  };

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { icon: "mdi:home-outline", label: "Dashboard", path: "/dashboard" },
    {
      icon: "mdi:account-group-outline",
      label: "Customers",
      subMenu: [
        { label: "Users", path: "/customers/users" },
        { label: "Buyers", path: "/customers/buyers" },
      ],
    },
    {
      icon: "mdi:cube-outline",
      label: "Products",
      subMenu: [
        { label: "List Products", path: "/products" },
        { label: "Categories", path: "/products/categories" },
      ],
    },
    {
      icon: "mdi:credit-card-outline",
      label: "Transaction",
      subMenu: [
        { label: "Manage Transactions", path: "/transactions/history" },
        { label: "Manage Refund", path: "/transactions/refunds" },
      ],
    },
    { icon: "mdi:account-outline", label: "User Role", path: "/user-role" },
    { icon: "mdi:file-document-outline", label: "Invoice", path: "/invoice" },
  ];

  return (
    <div className="w-60 bg-white h-screen py-6 flex flex-col pl-3">
      <nav className="space-y-1">
        {menuItems.map((item, index) => (
          <div key={index}>
            <div
              onClick={() =>
                item.subMenu
                  ? setOpenMenu(openMenu === index ? null : index)
                  : handleNavigate(item.path)
              }
              className={`flex items-center justify-between px-4 py-2 rounded-md cursor-pointer transition-colors
                ${
                  isActive(item.path)
                    ? "bg-red-50 text-red-500 font-medium"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
            >
              <div className="flex items-center gap-3">
                <Icon icon={item.icon} width="18" />
                <span className="text-sm">{item.label}</span>
              </div>
              {item.subMenu && (
                <Icon
                  icon={
                    openMenu === index ? "mdi:chevron-up" : "mdi:chevron-down"
                  }
                  width="16"
                />
              )}
            </div>
            {item.subMenu && openMenu === index && (
              <div className="ml-10 mt-1 space-y-1">
                {item.subMenu.map((sub, i) => (
                  <div
                    key={i}
                    onClick={() => handleNavigate(sub.path)}
                    className={`px-2 py-1 text-sm rounded-md cursor-pointer ${
                      isActive(sub.path)
                        ? "bg-red-50 text-red-500 font-medium"
                        : "text-gray-500 hover:bg-gray-100"
                    }`}
                  >
                    {sub.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
