import { Icon } from "@iconify-icon/react/dist/iconify.js";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";

export const ReusablePaginationComponent = ({
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const changePage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    onPageChange?.(page);
  };

  const getPageNumbers = () => {
    const maxVisible = 5;
    const half = Math.floor(maxVisible / 2);

    let start = Math.max(currentPage - half, 1);
    let end = start + maxVisible - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(end - maxVisible + 1, 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-6 px-4 text-sm text-gray-600">
      <span className="mb-2 md:mb-0">{`Page ${currentPage} of ${totalPages}`}</span>

      <div className="flex items-center gap-2">
        <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-8 h-8 rounded flex items-center justify-center bg-[#D64860] text-white disabled:opacity-50 cursor-pointer"
        >
          <Icon icon="iconamoon:arrow-left-2" className="text-sm" />
        </button>

        {getPageNumbers()?.map((page) => (
          <button
            key={page}
            onClick={() => changePage(page)}
            className={`w-8 h-8 rounded flex items-center justify-center text-sm transition-colors cursor-pointer ${
              currentPage === page
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-8 h-8 rounded flex items-center justify-center bg-[#D64860] text-white disabled:opacity-50 cursor-pointer"
        >
          <Icon icon="iconamoon:arrow-right-2" className="text-sm" />
        </button>
      </div>
    </div>
  );
};

export const ReusableTableComponent = ({ data = [], columns = [] }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [sortedData, setSortedData] = useState(data);
  const [sortDirection, setSortDirection] = useState({});
  const [sortKey, setSortKey] = useState(null);

  useEffect(() => {
    setSortedData(data);
  }, [data]);

  const handleRowSelect = (e, rowIndex) => {
    if (e.target.checked) {
      setSelectedRows((prev) => [...prev, rowIndex]);
    } else {
      setSelectedRows((prev) => prev.filter((index) => index !== rowIndex));
    }
  };

  const handleSelectAll = (e) => {
    setSelectedRows(e.target.checked ? data.map((_, i) => i) : []);
  };

  const handleSort = (key) => {
    const newDirection =
      sortKey === key && sortDirection[key] === "asc" ? "desc" : "asc";
    setSortDirection({ [key]: newDirection });
    setSortKey(key);

    const sorted = [...data].sort((a, b) => {
      if (a[key] < b[key]) return newDirection === "asc" ? -1 : 1;
      if (a[key] > b[key]) return newDirection === "asc" ? 1 : -1;
      return 0;
    });

    setSortedData(sorted);
  };

  return (
    <div className="overflow-x-auto bg-[#fff] rounded-sm">
      <table className="min-w-full text-xs white text-">
        <thead className="bg-[#f4f5f6] text-black font-semibold text-sm">
          <tr>
            {columns.map((col) => (
              <th
                key={col.accessor}
                onClick={() => col.sortable && handleSort(col.accessor)}
                className={`p-4 text-left font-medium ${
                  col.sortable ? "cursor-pointer hover:text-red-400" : ""
                }`}
              >
                <div className="flex items-center gap-1">
                  {col.Header}
                  {sortKey === col.accessor && (
                    <Icon
                      icon={`uil:arrow-${
                        sortDirection[col.accessor] === "asc" ? "up" : "down"
                      }`}
                      className="text-base"
                    />
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              {columns?.map((col) => (
                <td
                  key={col.accessor}
                  className="p-4 text-gray-600 font-semibold"
                >
                  {col.Cell ? col.Cell(row) : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const ReusableModal = ({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
  hideCloseButton = false,
}) => {
  console.log("modalClick");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
    full: "max-w-full w-full mx-4",
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.2)_100%)] backdrop-blur-[1px]"
        onClick={onClose}
      />

      <div
        className={`relative bg-white rounded-lg shadow-xl ${sizeClasses[size]} w-full`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          {title && (
            <h2 id="modal-title" className="text-2xl font-bold text-gray-800">
              {title}
            </h2>
          )}
          {!hideCloseButton && (
            <button
              className="text-gray-500 transition-colors hover:text-gray-700"
              onClick={onClose}
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        {title && <hr className="border-t border-gray-200" />}

        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const ReusableSlider = ({ items = [], settings = {} }) => {
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    ...settings,
  };

  return (
    <Slider {...defaultSettings} className="w-full">
      {items?.map((item, index) => (
        <div key={index} className="px-2">
          {item}
        </div>
      ))}
    </Slider>
  );
};

export const DualImageCard = ({
  images = [],
  alts = ["Image 1", "Image 2"],
  className = "",
  percentages = [50, 50],
  index = 0,
}) => {
  const [activeIndex, setActiveIndex] = useState(index);

  if (images.length !== 2 || percentages.length !== 2) {
    console.warn("DualImageCard requires exactly 2 images and 2 percentages.");
    return null;
  }

  const inactiveIndex = 1 - activeIndex;

  return (
    <div className={`w-full mx-auto ${className}`}>
      <div className="flex flex-col md:flex-row gap-4 items-stretch justify-center">
        <div
          className="w-full md:h-[400px] h-auto"
          style={{ flexBasis: `${percentages[activeIndex]}%` }}
        >
          <img
            src={images[activeIndex]}
            alt={alts[activeIndex]}
            className="rounded-lg w-full h-full object-cover transition-all duration-300"
          />
        </div>

        <div
          className="w-full md:h-[400px] h-auto flex flex-col gap-4 items-center"
          style={{ flexBasis: `${percentages[inactiveIndex]}%` }}
        >
          <img
            src={images[inactiveIndex]}
            alt={alts[inactiveIndex]}
            className="rounded-lg w-full h-full object-cover transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export const AccordionFilter = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" bg-white p-2 rounded cursor-pointer">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-3 font-medium text-left"
      >
        <span className={`${isOpen ? "text-[#F8069D]" : ""}`}>{title}</span>
        <Icon
          icon="ic:round-keyboard-arrow-down"
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && <div className="pb-3 text-sm text-gray-700">{children}</div>}
    </div>
  );
};

export const ReusableOffcanvas = ({
  isOpen,
  onClose,
  children,
  direction = "right",
  widthClass = "w-full lg:w-xl",
  height = "h-64",
  backdrop = true,
  className = "",
}) => {
  const panelRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const baseClasses = `fixed z-50 bg-transparent shadow-xl transition-transform duration-300 ease-in-out ${widthClass}`;

  const positions = {
    left: `top-0 left-0 h-full ${widthClass} transform ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    }`,
    right: `top-0 right-0 h-full ${widthClass} transform ${
      isOpen ? "translate-x-0" : "translate-x-full"
    }`,
    top: `top-0 left-0 w-full ${height} transform ${
      isOpen ? "translate-y-0" : "-translate-y-full"
    }`,
    bottom: `bottom-0 left-0 w-full ${height} transform ${
      isOpen ? "translate-y-0" : "translate-y-full"
    }`,
  };

  return (
    <>
      {backdrop && isOpen && (
        <div className="fixed inset-0 bg-transparent z-40" />
      )}
      <div ref={panelRef} className={`${baseClasses} ${positions[direction]}`}>
        <div className={`overflow-auto h-full ${className}`}>{children}</div>
      </div>
    </>
  );
};
export const ReusableOffcanvasSideBar = ({
  isOpen,
  onClose,
  children,
  direction = "right",
  widthClass = "w-full lg:w-sm",
  height = "h-64",
  backdrop = true,
  className = "",
}) => {
  const panelRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const baseClasses = `fixed z-50 bg-transparent shadow-xl transition-transform duration-300 ease-in-out ${widthClass}`;

  const positions = {
    left: `top-0 left-0 h-full ${widthClass} transform ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    }`,
    right: `top-0 right-0 h-full mt-0 lg:h-[96]vh] lg:mt-[4vh] bg-red-500 max-w-[300px] transform ${
      isOpen ? "translate-x-0" : "translate-x-full"
    }`,
    top: `top-0 left-0 w-full ${height} transform ${
      isOpen ? "translate-y-0" : "-translate-y-full"
    }`,
    bottom: `bottom-0 left-0 w-full ${height} transform ${
      isOpen ? "translate-y-0" : "translate-y-full"
    }`,
  };

  return (
    <>
      {backdrop && isOpen && (
        <div className="fixed inset-0 z-40 bg-transparent" />
      )}
      <div ref={panelRef} className={`${baseClasses} ${positions[direction]}`}>
        <div className={`overflow-auto h-full ${className}`}>{children}</div>
      </div>
    </>
  );
};

export const ReusablePopover = ({
  content,
  children,
  direction = "bottom",
  className = "",
  directionClass = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  const getDirectionClasses = () => {
    switch (direction) {
      case "top":
        return "bottom-full left-1/2 transform -translate-x-1/2 mb-2";
      case "right":
        return "left-full top-1/2 transform -translate-y-1/2 ml-2";
      case "left":
        return "right-full top-1/2 transform -translate-y-1/2 mr-2";
      case "bottom-right":
        return "top-full left-1/2 transform -translate-x-1/2 mt-2";
      case "bottom-left":
        return `top-5 right-2 transform -translate-x-0 mt-2 ${directionClass}`;
      default:
        return "top-full left-1/2 transform -translate-x-1/2 mt-2";
    }
  };

  return (
    <div className="relative inline-block">
      <div ref={buttonRef}>
        <div onClick={togglePopover}>{children}</div>
      </div>
      {isOpen && (
        <div
          ref={popoverRef}
          className={`absolute z-50 ${getDirectionClasses()} ${className}`}
        >
          <div className="bg-white border border-gray-200 rounded shadow-lg p-2">
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}
