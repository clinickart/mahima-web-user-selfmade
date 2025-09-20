import { lazy } from "react";

export const routes = {
  public: [
    {
      path: "/",
      component: lazy(() => import("../pages/HomePage/HomePage.jsx")),
    },
    {
      path: "/login",
      component: lazy(() => import("../pages/HomePage/Login/LoginPage.jsx")),
    },
    {
      path: "/sign-up",
      component: lazy(() => import("../pages/HomePage/SignUp/SignUpPage.jsx")),
    },
    {
      path: "/dashboard",
      component: lazy(() => import("../pages/Dashboard/Dashboard.jsx")),
    },
    {
      path: "/customers/users",
      component: lazy(() => import("../pages/Dashboard/Customers/Users.jsx")),
    },
    {
      path: "/customers/buyers",
      component: lazy(() => import("../pages/Dashboard/Customers/Buyers.jsx")),
    },
    {
      path: "/products",
      component: lazy(() => import("../pages/Dashboard/Products/Products.jsx")),
    },
    {
      path: "/products/add",
      component: lazy(() => import("../pages/Dashboard/Products/AddProduct.jsx")),
    },
    {
      path: "/products/categories",
      component: lazy(() =>
        import("../pages/Dashboard/Products/Categories.jsx")
      ),
    },
    {
      path: "/transactions/history",
      component: lazy(() =>
        import("../pages/Dashboard/Transactions/TransactionList.jsx")
      ),
    },
    {
      path: "/transactions/refunds",
      component: lazy(() =>
        import("../pages/Dashboard/Transactions/ReturnsList.jsx")
      ),
    },
    {
      path: "/user-role",
      component: lazy(() => import("../pages/Dashboard/Users/UserRole.jsx")),
    },
    {
      path: "/invoice",
      component: lazy(() => import("../pages/Dashboard/Invoices/Invoices.jsx")),
    },
    {
      path: "/invoice/create",
      component: lazy(() => import("../pages/Dashboard/Invoices/CreateInvoice.jsx")),
    },
    {
      path: "/invoice/preview",
      component: lazy(() => import("../pages/Dashboard/Invoices/InvoicePreview.jsx")),
    },

    {
      path: "/settings/manage-profile",
      component: lazy(() => import("../pages/Dashboard/Settings/ManageProfile.jsx")),
    },
  ],
  protected: [],
  notFound: {
    path: "*",
    component: lazy(() => import("../components/common/Loading/NotFound.jsx")),
  },
};
