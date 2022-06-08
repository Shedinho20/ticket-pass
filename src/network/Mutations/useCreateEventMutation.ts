import { AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ERROR_MESSAGE } from '../../common/error/error';
import { HOME } from '../../routes/navigation';
import { useCreateEventService } from '../Services/events';

export const useCreateEventMutation = () => {
  const createEvent = useCreateEventService();
  const navigate = useNavigate();

  const creatEventMutation = useMutation(createEvent, {
    onSuccess: (data: AxiosResponse<any, any>) => {
      toast.success('Event created successfully');
      navigate(HOME);
    },
    onError: (error: Record<string, any>) => {
      toast.error(`${error?.response?.data?.message || ERROR_MESSAGE}`);
    }
  });

  const { isLoading, mutate: createvent } = creatEventMutation;

  return { createvent, isLoading };
};
