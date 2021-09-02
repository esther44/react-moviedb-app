import './Movie.scss';

import Rating from '@material-ui/lab/Rating';
import moment from 'moment';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { img_300, unvailable } from '../../config/config';

const Movie = ({ movie }) => {
  if (movie) {
    const backgroundImg = movie.poster_path ? `${img_300}${movie.poster_path}` : unvailable;
    const genres = movie.genres;
    if (genres) {
      var genresList = genres.map(function (genre) {
        return <li className='list-item'>{genre.name}</li>;
      });

      if (movie.vote_average) {
        var rating = ((movie.vote_average * 5) / 10);
      }
      if (movie.budget) {
        var budget = new Intl.NumberFormat('en-us', {
          style: 'currency',
          currency: 'USD'
        }).format(movie.budget);
      }
    }
    return (
      <div>
        <Link to={'/movies'} className='back-arrow'>
          <ArrowBackIcon />
        </Link>
        <div className='movie-content' key={movie.key}>
          <div className='card-content'>
            <h2 className='title'>{movie.title}</h2>
          </div>
          <figure>
            <img
              src={backgroundImg}
              alt={movie.title}
              className='content-img'
            />
            <figcaption className='content-text'>
              <p>{movie.original_title}</p>
              <p>{movie.overview}</p>
              <div className='content-result'>
                <h3 className='sub-title'>Genre :</h3>
                <ul className='list'>{genresList}</ul>
              </div>
              <div className='content-result'>
                <h3 className='sub-title'>Realease date :</h3>
                <span>
                  {moment(movie.release_date).calendar()}
                </span>
              </div>
              <div className='content-result'>
                <h3 className='sub-title'>Budget :</h3>
                <span>{budget}</span>
              </div>
              <div className='content-result'>
                <h3 className='sub-title'>Rating :</h3>
                <Rating
                  name='rating'
                  value={rating ? rating : 0}
                  defaultValue='5'
                  precision={0.5}
                  readOnly
                  className='rating'
                />
                ({rating}/5)
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    );
  } else {
    return (
      <div className='container center'>
        <p>Loading movie...</p>
      </div>
    );
  }
};
export default Movie;
