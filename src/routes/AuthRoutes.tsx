import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../components/pages';
import { ProtectedRoute } from '../utils/ProtectedRoutes';
import { LOGIN, NOTFOUND } from './navigation';

export const AuthRoute = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path={LOGIN} element={<LoginPage />} />
      </Route>
      <Route path={LOGIN} element={<LoginPage />} />
      <Route path={NOTFOUND} element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
