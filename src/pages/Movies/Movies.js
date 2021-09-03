import axios from 'axios';
import { useEffect, useState } from 'react';

import { Container } from '@material-ui/core';

import MoviePreview from '../../components/MoviePreview/MoviePreview';
import './Movies.scss';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    /* Environment variable didn't work here, tested with : ${process.env.MOVIE_DB_API_KEY} */
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=00977a659f33d44e5b2dd79293442174&language=en-US&sort_by=popularity.desc`
    );
    setMovies(data.results);
  };

  useEffect(() => {
    // Get movies list in English sorted by popularity
    fetchMovies();
  });
  return (
    <div>
      <Container>
        <div className='movies'>
          {movies?.map((movie) => (
            <MoviePreview movie={movie} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Movies;
