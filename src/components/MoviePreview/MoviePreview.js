import './MoviePreview.scss';
import { img_300, unvailable } from '../../config/config';
import { Link } from 'react-router-dom';

// Showing a specific movie in the list of all movies
const MoviePreview = ({ movie }) => {
  return (
    <Link to={'/movies/' + movie.id} key={movie.key} className='movie-preview'>
      <img
        className='poster'
        src={movie.poster_path ? `${img_300}${movie.poster_path}` : unvailable}
        alt={movie.title}
      />
      <h2 className='title'>{movie.title}</h2>
    </Link>
  );
};

export default MoviePreview;
