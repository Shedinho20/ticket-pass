import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetAllEvents } from '../../../network/Query/useGetAllEvents';

export const useEventsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const { pageNumber } = useParams();

  const { isLoadingEvents, events, pageSize, totalPages } = useGetAllEvents(currentPage);

  const onPageChange = (pageNumber: number) => {
    navigate(`/pageNumber=${pageNumber}`);
  };

  useEffect(() => {
    if (pageNumber) {
      setCurrentPage(parseInt(pageNumber));
    }
  }, [pageNumber]);

  return { onPageChange, pageSize, totalPages, events, isLoadingEvents, currentPage };
};
