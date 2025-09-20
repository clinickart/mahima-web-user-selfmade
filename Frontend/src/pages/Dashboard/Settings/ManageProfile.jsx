import React, { useState } from "react";
import HOC from "../../../components/layout/LoginLayout/HOC";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

const ManageProfile = () => {
  const [profile, setProfile] = useState({
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Marvin McKinney",
    role: "Super Admin",
    countryCode: "+1",
    phoneNumber: "762394289312",
    address: "8502 Preston Rd. Inglewood, Maine 98380",
    email: "samantalegend@mail.com",
    password: "********",
  });

  const handleChange = (field, value) => {
    setProfile({ ...profile, [field]: value });
  };

  return (
    <div className=" min-h-screen">
      <h5 className="text-lg font-semibold">Settings</h5>
      <div className="bg-white rounded-lg p-6 space-y-6 mt-3">
        <h2 className="text-lg font-semibold">Manage Profile</h2>

        <div className="flex items-center gap-2">
          <div className="mr-3">
            <p>Avatar</p>
            <p className="text-xs text-gray-500">
              Only *.png, *.jpg and *.jpeg image <br /> files are accepted
            </p>
          </div>
          <div className="relative">
            <img
              src={profile.avatar}
              alt="Avatar"
              className="w-20 h-20 border border-gray-200 rounded-lg object-cover"
            />
            <button className="absolute top-1 right-1 bg-white p-1 rounded-lg shadow hover:bg-gray-100 flex items-center justify-center">
              <Icon icon="mdi:edit" className="text-lg" />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-500">Name</label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full border border-gray-200 rounded-lg p-2 mt-1"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-500">Role</label>
            <input
              type="text"
              value={profile.role}
              onChange={(e) => handleChange("role", e.target.value)}
              className="w-full border border-gray-200 rounded-lg p-2 mt-1"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-500">
              Phone Number
            </label>
            <div className="flex gap-2 mt-1">
              <select
                value={profile.countryCode}
                onChange={(e) => handleChange("countryCode", e.target.value)}
                className="border border-gray-200 rounded-lg p-2"
              >
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+91">+91</option>
              </select>
              <input
                type="text"
                value={profile.phoneNumber}
                onChange={(e) => handleChange("phoneNumber", e.target.value)}
                className="flex-1 border border-gray-200 rounded-lg p-2"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-500">Address</label>
            <input
              type="text"
              value={profile.address}
              onChange={(e) => handleChange("address", e.target.value)}
              className="w-full border border-gray-200 rounded-lg p-2 mt-1"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 space-y-6">
        <h2 className="text-lg font-semibold">Manage Account</h2>
        <div className="flex flex-col gap-4 text-sm">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">EMAIL</p>
              <p>{profile.email}</p>
            </div>
            <button className="border border-[#C53958] text-[#C53958] px-3 py-1 rounded-lg hover:bg-[#C53958] hover:text-white">
              Change Email
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">PASSWORD</p>
              <p>{profile.password}</p>
            </div>
            <button className="border border-[#C53958] text-[#C53958] px-3 py-1 rounded-lg hover:bg-[#C53958] hover:text-white">
              Change Password
            </button>
          </div>
          <div className="pt-2 flex items-center justify-between gap-2">
            <p className="text-[#C53958]">Logout</p>
            <button className="bg-[#FF5630] text-white px-4 py-2 rounded-lg hover:bg-[#FF5630]/80">
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HOC(ManageProfile);
