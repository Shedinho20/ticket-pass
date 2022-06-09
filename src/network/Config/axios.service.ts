import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { useLogout } from '../../common/hooks/useLogout';
import { userAtom } from '../../store/atoms/userAtom';

const baseURL = process.env.NODE_ENV === 'production' ? 'prod_url from env' : 'http://localhost:8000';

export const axiosService = axios.create({ baseURL });

const axiosPrivate = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' }
});

export const useAxiosPrivate = () => {
  const auth = useRecoilValue(userAtom);
  const logout = useLogout();

  axiosPrivate.interceptors.request.use(async (req: any) => {
    if (auth?.access_token && auth?.exp) {
      const expDate = new Date(auth.exp);

      if (expDate > new Date()) {
        req.headers.Authorization = `Bearer ${auth?.access_token}`;
        return req;
      }
    }

    logout();
  });

  return axiosPrivate;
};
