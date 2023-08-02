import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
// import { NotFound } from '../NotFound/NotFound';

// const Home = lazy(() => import('../../pages/Home/Home'));
// const Movies = lazy(() => import('../../pages/Movies/Movies'));
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
          <Route index element={<p>Home</p>} />
          <Route path="/add-event" element={<p>add</p>} />
          <Route path="/event/:eventId" element={<p>details</p>} />
          <Route path="/edit-event/:eventId" element={<p>edit</p>} />
          <Route path="*" element={<p>not found</p>} />
        </Route>
      </Routes>
    </>
  );
};
