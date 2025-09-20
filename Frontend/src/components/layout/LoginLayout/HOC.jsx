import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import HeaderNavLogin from "./HeaderNavLogin";

const HOC = (WrappedComponent) => {
  const Layout = (props) => {
    const [isSidebarVisible, setSidebarVisible] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => setSidebarVisible((prev) => !prev);

    return (
      <div className="h-screen w-full overflow-hidden">
        <div className="sticky top-0 z-40">
          <HeaderNavLogin toggleSidebar={toggleSidebar} />
        </div>

        <div className="flex h-[calc(100vh-4rem)] max-w-7xl mx-auto relative">
          <div
            className={`fixed md:static top-0 left-0 h-full w-64 bg-white shadow-lg z-30 transform transition-transform duration-300 ease-in-out
              ${isSidebarVisible ? "translate-x-0" : "-translate-x-full"}
              md:translate-x-0`}
          >
            <Sidebar
              toggleSidebar={toggleSidebar}
              isSidebarVisible={isSidebarVisible}
            />
          </div>

          {isSidebarVisible && (
            <div
              className="fixed inset-0 bg-black bg-opacity-30 z-20 md:hidden"
              onClick={toggleSidebar}
            />
          )}

          <main className="flex-1 overflow-auto bg-[#f4f5f6] ff_manrope p-4">
            <WrappedComponent
              {...props}
              toggleSidebar={toggleSidebar}
              elements={props.elements}
            />
          </main>
        </div>
      </div>
    );
  };

  return Layout;
};

export default HOC;
