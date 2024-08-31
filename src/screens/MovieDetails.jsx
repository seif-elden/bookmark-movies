import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';

const imgPath = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=9813ce01a72ca1bd2ae25f091898b1c7`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.error('Error fetching movie details:', error));
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <Container className="my-5">
      <Row>
        <Col md={4}>
          <Image src={imgPath + movie.poster_path} fluid />
        </Col>
        <Col md={8}>
          <h2>{movie.original_title}</h2>
          <p>Release Date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
          <p>{movie.overview}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
