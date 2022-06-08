import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { ERROR_MESSAGE } from '../../common/error/error';
import { useScrollToTop } from '../../common/hooks/useScrollToTop';
import { IEvent } from '../../common/interfaces/event';
import { getEventsService } from '../Services/events';

export const useGetAllEvents = (currentPage: number) => {
  const { data, isLoading: isLoadingEvents } = useQuery(
    ['@getEvents', currentPage],
    () => getEventsService(currentPage),
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      onError: (error: Record<string, any>) => {
        toast.error(`${error?.response?.data?.message || ERROR_MESSAGE}`);
      }
    }
  );

  const events: IEvent[] = data?.data?.data;

  useScrollToTop(events);

  const pageSize = data?.data.meta.per_page;
  const totalPages = data?.data.meta.total;

  return { pageSize, totalPages, isLoadingEvents, events };
};
