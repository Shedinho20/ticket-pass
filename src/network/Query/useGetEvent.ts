import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { ERROR_MESSAGE } from '../../common/error/error';
import { IEventDetail } from '../../common/interfaces/event';
import { getEventService } from '../Services/events';

export const useGetEvent = (id: number) => {
  const { data, isLoading: isLoadingEvent } = useQuery(['@getEvent', id], () => getEventService(id), {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    onError: (error: Record<string, any>) => {
      toast.error(`${error?.response?.data?.message || ERROR_MESSAGE}`);
    }
  });

  const event: IEventDetail = data?.data?.data;

  return { isLoadingEvent, event };
};
