import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
// import { NotFound } from '../NotFound/NotFound';

const HomePage = lazy(() => import('../page/HomePage/HomePage'));
const AddEventPage = lazy(() => import('../page/AddEventPage/AddEventPage'));
// const MovieDetails = lazy(() =>
//   import('../../pages/MovieDetails/MovieDetails')
// );
// const Cast = lazy(() => import('../Cast/Cast'));
// const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/add-event" element={<AddEventPage />} />
          <Route path="/event/:eventId" element={<p>details</p>} />
          <Route path="/edit-event/:eventId" element={<p>edit</p>} />
          <Route path="*" element={<p>not found</p>} />
        </Route>
      </Routes>
    </>
  );
};
