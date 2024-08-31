/* eslint-disable react/prop-types */
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const imgPath = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/";

const Movie = ({ themovie }) => {
  return (
    <Link to={`/movie/${themovie.id}`} className="text-decoration-none">
      <Card className="mb-4">
        <Card.Img variant="top" src={imgPath + themovie.poster_path} alt={themovie.original_title} />
        <Card.Body>
          <Card.Title>{themovie.original_title}</Card.Title>
          <Card.Text>
            Rating: {themovie.vote_average}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Movie;
