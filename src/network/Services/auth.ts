import { ILogin } from '../../common/interfaces/auth';
import { LOGIN } from '../apiEndpoint';
import { axiosService } from '../Config/axios.service';

export const loginService = async (payload: ILogin) => {
  const data = new FormData();
  data.append('grant_type', 'password');
  data.append('client_id', '966c01ba-31b1-40a2-8f4c-fab8b1373bd7');
  data.append('username', payload.email);
  data.append('password', payload.password);

  const config = {
    method: 'post',
    url: LOGIN,
    data: data
  };

  const response = await axiosService(config);

  return response;
};
