import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userAtom } from '../../store/atoms/userAtom';
import { LOGIN } from '../apiEndpoint';

const baseURL = process.env.NODE_ENV === 'production' ? 'prod_url from env' : 'http://localhost:8000';

export const axiosService = axios.create({ baseURL });

const axiosPrivate = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' }
});

export const useAxiosPrivate = () => {
  const [auth, setAuth] = useRecoilState(userAtom);
  const navigate = useNavigate();

  axiosPrivate.interceptors.request.use(async (req: any) => {
    if (auth?.access_token && auth?.exp) {
      const expDate = new Date(auth.exp);

      if (expDate > new Date()) {
        req.headers.Authorization = `Bearer ${auth?.access_token}`;
        return req;
      }
    }

    localStorage.clear();
    setAuth({});
    navigate(`/auth/${LOGIN}`);
  });

  return axiosPrivate;
};
