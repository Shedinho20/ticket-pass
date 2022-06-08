import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IEvent } from '../../../common/interfaces/event';
import { EVENTS_DETAILS } from '../../../routes/navigation';
import { getDate } from '../../../utils/helpers';
import { Button } from '../../atoms/Button/Button';
import { Container, Spacer } from '../../layouts';
import styles from './event.module.css';

interface eventItemProps {
  event: IEvent;
}

export const EventItem = (props: eventItemProps) => {
  const navigate = useNavigate();

  const {
    event: { endDate, id, image, name, startDate }
  } = props;

  return (
    <Container extraClassNames={styles.container} direction="column">
      <div className={styles.imgContainer}>
        <img loading="lazy" src={image} alt={`event_image_${1}`} />
      </div>
      <div className={styles.content}>
        <p>
          Event Name: <span>{name}</span>
        </p>
        <Spacer height={10} />
        <p>
          Start date: <span>{getDate(startDate)}</span>
        </p>
        <Spacer height={10} />
        <p>
          End date: <span>{getDate(endDate)}</span>
        </p>
        <Spacer height={15} />
        <Container justify="center">
          <Button onClick={() => navigate(`/${EVENTS_DETAILS}/${id}`)}>View</Button>
        </Container>
      </div>
    </Container>
  );
};
