import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { HOME, LOGIN } from '../routes/navigation';
import { userAtom } from '../store/atoms/userAtom';

export const ProtectedRoute: React.FC<{ authRequired?: boolean }> = ({ authRequired = false }) => {
  const auth = useRecoilValue(userAtom);

  if (authRequired) {
    return auth?.access_token ? <Outlet /> : <Navigate to={`auth/${LOGIN}`} />;
  }
  return !auth.access_token ? <Outlet /> : <Navigate to={`${HOME}`} />;
};
