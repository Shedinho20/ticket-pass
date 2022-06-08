import React from 'react';
import { Spinner } from '../../atoms';
import { Container, FullCenter, Spacer } from '../../layouts';
import { EventItem, Pagination } from '../../molecules';
import styles from './event.module.css';
import { useEventsPage } from './useEventsPage';

export const EventsPage = () => {
  const { onPageChange, pageSize, totalPages, events, isLoadingEvents, currentPage } = useEventsPage();

  if (isLoadingEvents)
    return (
      <FullCenter>
        <Spinner />
      </FullCenter>
    );

  if (events.length < 1) return null;

  return (
    <Container pagePadding direction="column" align="center">
      <Container justify="center" extraClassNames={styles.container} gap={20}>
        {events.map((event, i) => (
          <EventItem key={i} event={event} />
        ))}
      </Container>
      <Spacer height={20} />
      <Container>
        <Pagination totalPages={totalPages} pageSize={pageSize} onPageChange={onPageChange} currentPage={currentPage} />
      </Container>
    </Container>
  );
};
