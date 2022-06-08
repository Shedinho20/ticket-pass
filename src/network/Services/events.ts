import { ICreatEvent } from '../../common/interfaces/event';
import { EVENTS } from '../apiEndpoint';
import { axiosService, useAxiosPrivate } from '../Config/axios.service';

export const getEventsService = async (currentPage: number) => {
  const config = {
    method: 'get',
    url: `${EVENTS}?page=${currentPage}`
  };

  const response = await axiosService(config);

  return response;
};

export const getEventService = async (id: number) => {
  if (!id) return;

  const config = {
    method: 'get',
    url: `${EVENTS}/${id}`
  };

  const response = await axiosService(config);

  return response;
};

export const useCreateEventService = () => {
  const axiosPrivate = useAxiosPrivate();

  const createEvent = async (payload: ICreatEvent) => {
    const data = new FormData();

    data.append('name', payload.name);
    data.append('description', payload.desc);
    data.append('startDate', payload.startDate);
    data.append('endDate', payload.endDate);
    data.append('image', payload.uploadeImage);

    const config = {
      method: 'post',
      url: EVENTS,
      data
    };

    const response = await axiosPrivate(config);
    return response;
  };

  return createEvent;
};
