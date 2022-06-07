import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Nav, TopNav } from '../components/molecules';
import { CreateEventPage, EventDetailsPage, EventsPage } from '../components/pages';
import { ProtectedRoute } from '../utils/ProtectedRoutes';
import { CREATE_EVENT, EVENTS_DETAILS, HOME } from './navigation';
import styles from './route.module.css';

export const HomeRoutes = () => {
  return (
    <div>
      <TopNav />
      <div className={styles.navContainer}>
        <Nav />
      </div>
      <Routes>
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
