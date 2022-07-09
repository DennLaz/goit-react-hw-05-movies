import PropTypes from 'prop-types';

import styles from './movieDetails.module.css'


const MovieDetails = ({ title, overview, genres, poster_path, release_date, vote_average }) => {
    
    const genre = genres.map(el => el.name).join(', ');
    const releaseDate = release_date.slice(0, 4)
    const voteAverageOnPercentage = vote_average*10

    return (
        <div className='container'>
            <li>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
            <h3>{title }<span> ({releaseDate})</span></h3>
            <p>User Score: {`${voteAverageOnPercentage}%`}</p>
            <h4>Overview</h4>
            <p>{overview}</p>
            <h4>Genres</h4>
            <p>{genre}</p>
            </li>
        </div>
    )
}



export default MovieDetails;