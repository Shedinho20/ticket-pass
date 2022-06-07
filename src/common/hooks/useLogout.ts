import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { LOGIN } from '../../routes/navigation';
import { userAtom } from '../../store/atoms/userAtom';

export const useLogout = () => {
  const navigate = useNavigate();
  const setAuth = useSetRecoilState(userAtom);

  const logout = () => {
    localStorage.clear();
    setAuth({});
    navigate(`auth/${LOGIN}`);
  };

  return logout;
};
