import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetEvent } from '../../../network/Query/useGetEvent';

export const useEventDetials = () => {
  const [eventId, setEventId] = useState<number>();

  const { id } = useParams();

  const { isLoadingEvent, event } = useGetEvent(eventId as number);

  useEffect(() => {
    if (id) return setEventId(parseInt(id));
  }, [id]);

  return { isLoadingEvent, event };
};
