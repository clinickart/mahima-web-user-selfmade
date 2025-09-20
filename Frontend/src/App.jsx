import React, { useEffect } from "react"; 
import AppRoutes from "./routes/AppRoutes";
import { ToastProvider } from "./utils/constants";
import ScrollToTop from "./components/common/ReusableComponent/ReusableComponent";

const App = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ToastProvider />
      <ScrollToTop />
      <AppRoutes />

    </div>
  );
};

export default App;
