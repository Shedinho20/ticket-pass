import { ILogin } from '../../common/interfaces/auth';
import { LOGIN } from '../apiEndpoint';
import { axiosService } from '../Config/axios.service';

export const loginService = async (payload: ILogin) => {
  const data = new FormData();
  data.append('grant_type', process.env.REACT_APP_GRANT_TYPE as string);
  data.append('client_id', process.env.REACT_APP_CLIENT_ID as string);
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
