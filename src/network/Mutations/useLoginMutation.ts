import { AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';
import { ERROR_MESSAGE } from '../../common/error/error';
import { HOME } from '../../routes/navigation';
import { userAtom } from '../../store/atoms/userAtom';
import { loginService } from '../Services/auth';

export const useLoginMutation = () => {
  const navigate = useNavigate();
  const setAuth = useSetRecoilState(userAtom);

  const loginMutation = useMutation(loginService, {
    onSuccess: (data: AxiosResponse<any, any>) => {
      const localData = { ...data.data, exp: new Date(new Date().getTime() + data.data.expires_in) };

      localStorage.setItem('auth', JSON.stringify(localData));
      setAuth(localData);
      navigate(HOME);
    },
    onError: (error: Record<any, any>) => {
      console.log(error);
      toast.error(`${error?.response?.data?.message || ERROR_MESSAGE}`);
    }
  });

  const { isLoading: islogIn } = loginMutation;

  return { loginMutation, islogIn };
};
