import React from "react";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import images from "../../../lib/exportImages";
import { useNavigate } from "react-router-dom";

const HeaderNavLogin = () => {
  const navigate = useNavigate();
  return (
    <header className="max-w-7xl mx-auto w-full bg-white border-b border-gray-200 px-4 py-1 flex items-center justify-between">
      <div className="flex flex-col items-center gap-2 w-full lg:w-60 sm:flex-row sm:justify-start">
        <img
          src={images.navbar.logo}
          alt="Clinic Kart Logo"
          className="w-[120px] h-20 object-contain"
        />
      </div>

      <div className="flex-1 mx-6 hidden md:flex">
        <div className="relative w-full max-w-lg">
          <Icon
            icon="mdi:magnify"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
          />
          <input
            type="text"
            placeholder="What are you looking for"
            className="w-full border border-gray-200 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300 text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative">
          <Icon icon="mdi:bell-outline" className="text-lg text-gray-500" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1 rounded-full">
            1
          </span>
        </button>

        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/settings/manage-profile")}
        >
          <img
            src={
              "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            }
            alt="User Avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="hidden sm:block text-right">
            <p className="text-sm font-medium">Marvin McKinney</p>
            <p className="text-xs text-gray-500">Super Admin</p>
          </div>
          <Icon icon="mdi:chevron-down" className="w-4 h-4 text-gray-500" />
        </div>
      </div>
    </header>
  );
};

export default HeaderNavLogin;
