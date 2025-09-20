
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SidebarItem = React.memo(({ icon, label, path }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = location.pathname === path;

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div
      className={`flex items-center gap-3 cursor-pointer ${
        isActive
          ? "text-pink-500 font-bold"
          : "text-gray-800 hover:text-pink-500"
      }`}
      onClick={handleClick}
    >
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </div>
  );
});

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col h-screen sidebarBackgroundColor p-4 shadow-2xl text-sm font-medium text-gray-700">
        <div className="flex justify-between items-center pb-4 mb-4 w-full max-w-[260px]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 text-white flex items-center justify-center font-bold">
              K
            </div>
            <div>
              <div className="text-sm font-semibold">Hey, Kiara</div>
              <div
                className="text-xs text-gray-500 flex items-center cursor-pointer"
                onClick={() => navigate("/personal-details")}
              >
                <span> Account</span>{" "}
                <Icon
                  icon="iconamoon:arrow-right-2-light"
                  className="text-black text-lg"
                />
              </div>
            </div>
          </div>
          <div className="sidebarNotificationIconBackground rounded p-2 w-10 h-10 flex items-center justify-center">
            <Icon
              icon="basil:notification-on-solid"
              className="text-lg text-white"
            />
          </div>
        </div>
        <nav className="flex flex-col gap-4">
          <SidebarItem
            icon={<Icon icon="fa-solid:heart" />}
            label="Wishlist"
            path="/wishlist"
          />
          <SidebarItem
            icon={<Icon icon="bi:box-seam" />}
            label="Orders"
            path="/my-orders"
          />
          <SidebarItem
            icon={<Icon icon="fa-regular:star" />}
            label="Loyalty Program"
            path="/loyalty-program"
          />
          <SidebarItem
            icon={<Icon icon="fluent-color:star-24" />}
            label="Membership"
            path="/membership"
          />
          <SidebarItem
            icon={<Icon icon="fa-solid:user" />}
            label="My Beauty Profile"
            path="/build-my-profile"
          />
          <SidebarItem
            icon={<Icon icon="bi:wallet2" />}
            label="IZA Wallet"
            path="/wallet"
          />
          <SidebarItem
            icon={<Icon icon="fa-solid:map-marker-alt" />}
            label="Address"
            path="/address"
          />
          <SidebarItem
            icon={<Icon icon="fa-regular:credit-card" />}
            label="Payment"
            path="/payment"
          />
          <SidebarItem
            icon={<Icon icon="bi:ticket-perforated" />}
            label="Coupons"
            path="/coupons"
          />
          <SidebarItem
            icon={<Icon icon="bi:people" />}
            label="Refer and Earn"
            path="/refer-and-earn"
          />
          <SidebarItem
            icon={<Icon icon="bi:question-circle" />}
            label="Help Center"
            path="/help-center"
          />
          <SidebarItem
            icon={<Icon icon="fa-solid:info-circle" />}
            label="About"
            path="/about-us"
          />
          <SidebarItem
            icon={<Icon icon="fa-solid:user" />}
            label="Become a vendor"
            // path="/become-a-vendor"
          />
          <SidebarItem
            icon={<Icon icon="fa-solid:cog" />}
            label="Settings"
            path="/settings"
          />
          <div className="">
            <button className="flex items-center justify-center gap-2 bg-pink-500 text-white px-8 py-2 rounded-lg text-sm">
              <Icon icon="fa-solid:sign-out-alt" />
              <span>Logout</span>
            </button>
            <div className="flex items-center gap-2 mt-4">
              <span className="">Language</span>
              <span
                className="cursor-pointer hover:text-pink-500"
                onClick={() => navigate("/terms-and-conditions")}
              >
                T&C
              </span>
              <span
                className="cursor-pointer hover:text-pink-500"
                onClick={() => navigate("/privacy-policy")}
              >
                Privacy Policy
              </span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
