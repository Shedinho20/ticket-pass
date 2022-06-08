import React from 'react';
import { getDate } from '../../../utils/helpers';
import { Spinner } from '../../atoms';
import { Container, FullCenter, Spacer } from '../../layouts';
import styles from './eventdetails.module.css';
import { useEventDetials } from './useEventDetials';

export const EventDetailsPage = () => {
  const { isLoadingEvent, event } = useEventDetials();

  if (isLoadingEvent || !event)
    return (
      <FullCenter>
        <Spinner />
      </FullCenter>
    );

  const { description, endDate, startDate, image, name } = event;

  return (
    <Container extraClassNames={styles.container} direction="column">
      <div className={styles.imgContainer}>
        <img src={image} alt="event-details" />
      </div>
      <Spacer height={40} />
      <h3>{name}</h3>
      <Container extraClassNames={styles.content} pagePadding direction="column">
        <p>
          Description : <span>{description}</span>
        </p>
        <Spacer height={10} />
        <p>
          Start date : <span>{getDate(startDate)}</span>
        </p>
        <Spacer height={10} />
        <p>
          End date : <span>{getDate(endDate)}</span>
        </p>
      </Container>
    </Container>
  );
};
