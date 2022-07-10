import {lazy, Suspense} from 'react'
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
const CastPage = lazy(() => import('pages/CastPage'));
const ReviewsPage = lazy(()=> import('pages/ReviewsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));


const UserRouters = () => {
    return (
        <Suspense fallback={<p>...Loading page</p>}>
            <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
        </Suspense>
        
    )
}

export default UserRouters;