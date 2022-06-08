import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useScroll } from '../common/hooks/useScroll';
import { Nav, TopNav } from '../components/molecules';
import { CreateEventPage, EventDetailsPage, EventsPage } from '../components/pages';
import { ProtectedRoute } from '../utils/ProtectedRoutes';
import { CREATE_EVENT, EVENTS_DETAILS, HOME } from './navigation';
import styles from './route.module.css';

export const HomeRoutes = () => {
  const { isBottom } = useScroll();

  return (
    <div>
      <TopNav />
      <div className={styles.navContainer}>{!isBottom && <Nav />}</div>
      <Routes>
        <Route path={`${HOME}/pageNumber=:pageNumber`} element={<EventsPage />} />
        <Route path={HOME} element={<EventsPage />} />
        <Route path={`${EVENTS_DETAILS}/:id`} element={<EventDetailsPage />} />

        <Route element={<ProtectedRoute authRequired={true} />}>
          <Route path={CREATE_EVENT} element={<CreateEventPage />} />
        </Route>

        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </div>
  );
};
