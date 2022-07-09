import { Route, Routes } from 'react-router-dom';

import Header from "module/Header";
import NotFoundPage from 'pages/NotFoundPage';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movie/:id' element={<MovieDetailsPage />} />
        <Route path='*' element={<NotFoundPage/> } />
      </Routes>
    </div>
  );
};
