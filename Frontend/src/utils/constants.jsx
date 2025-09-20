 import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showNotification = ({
  message,
  type = "success",
  duration = 3000,
}) => {
  const validTypes = ["success", "error", "info", "warning"];
  const toastType = validTypes.includes(type) ? type : "success";

  toast[toastType](message, {
    autoClose: duration,
    position: "top-right",
    pauseOnHover: true,
    draggable: true,
  });
};

export const ToastProvider = () => <ToastContainer />;

