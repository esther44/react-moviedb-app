import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

import { Container } from '@material-ui/core';

import Movie from '../../components/Movie/Movie';
import './MovieDetail.scss';

import { img_500 } from '../../config/config';

const MovieDetail = () => {
  const [movie, setMovieDetail] = useState([]);

  const { id } = useParams();
  const request = axios.CancelToken.source();

  //Check if there are any previous pending requests
  if (typeof cancelToken != typeof undefined) {
    request.cancel('Operation canceled due to new request.');
  }

  const fetchMovie = async () => {
    try {
      /* La variable d'environnement n'a pas fonctionné ici, testé avec : ${process.env.MOVIE_DB_API_KEY} */
      /* Voir pour arrêter la requête GET en continue*/

      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=00977a659f33d44e5b2dd79293442174&language=en-US`,
        {
          cancelToken: request.token // <-- 2nd step
        }
      );
      return setMovieDetail(response.data);
    } catch (err) {
      console.log('Une erreur est survenue :', err);
    }
  };

  useEffect(() => {
    fetchMovie();
  });

  const sectionStyle = (backdropPath) => {
    return {
      backgroundImage: `url(${img_500}${backdropPath})`
    };
  };
  return (
    <div style={sectionStyle(movie.backdrop_path)} className='movie-detail'>
      <Container>
        <Movie movie={movie} />
      </Container>
    </div>
  );
};

export default MovieDetail;
