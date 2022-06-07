import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../common/hooks/useAuth';
import { AuthRoute } from './AuthRoutes';
import { HomeRoutes } from './HomeRoutes';

export const MainRoutes = () => {
  const { isAuth } = useAuth();

  if (!isAuth) return null;

  return (
    <Routes>
      <Route path="auth/*" element={<AuthRoute />} />
      <Route path="/*" element={<HomeRoutes />} />
    </Routes>
  );
};
