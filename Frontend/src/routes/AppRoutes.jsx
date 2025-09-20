import React, { Suspense, useContext } from "react";
import ProtectedRoute from "./ProtectedRoute";
import { routes } from "./routesConfig";
import { LoadingSpinner } from "../components/common/Loading/LoadingSpinner";
import { useAuth } from "../context/useAuth";
import { Routes, Route } from "../lib/exports";
import { AuthContext } from "../context/AuthContext";

const AppRoutes = () => {
  const { isAuthenticated, loading: authLoading } = useContext(AuthContext);

  if (authLoading) return <LoadingSpinner />;

  const renderRoutes = (routeList, isProtected = false) =>
    routeList.map(({ path, component: Component }) => (
      <Route
        key={path}
        path={path}
        element={
          isProtected ? (
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Component />
            </ProtectedRoute>
          ) : (
            <Component />
          )
        }
      />
    ));

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {renderRoutes(routes.public)}
        {renderRoutes(routes.protected, true)}
        <Route path="*" element={<routes.notFound.component />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
