import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userAtom } from '../../store/atoms/userAtom';
import { useLogout } from './useLogout';

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const setAuth = useSetRecoilState(userAtom);
  const logout = useLogout();
  const navigate = useNavigate();

  useEffect(() => {
    const authLocal = localStorage.getItem('auth');
    if (authLocal) {
      const auth = JSON.parse(authLocal);
      const expDate = new Date(auth.exp);

      if (expDate < new Date()) {
        //we can hit the refesh endPoint here to try refreshing token (In this test, refesh endpoint is not provided, so we logout user)
        logout();
        setIsAuth(true);
      } else {
        setAuth(auth);
        setIsAuth(true);
      }
      return;
    }

    setAuth({});
    setIsAuth(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  return { isAuth };
};
