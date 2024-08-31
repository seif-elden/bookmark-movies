/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const AddMovie = ({addMovie}) => {
  const [movie, setMovie] = useState({
    id: '',
    original_title: '',
    release_date: '',
    vote_average: '',
    overview: '',
    poster_path: '', 
  });


  // because we canot really add a movie to the back end ... i just take an id from the use and fetch its deatails from back end and add it to my state  
  const handleChange = (e) => {
    const id = e.target.value;
    
    if (id) {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9813ce01a72ca1bd2ae25f091898b1c7`)
        .then(response => response.json())
        .then(data => setMovie(data))
        .catch(error => console.error('Error fetching movie details:', error));
    }else{
        setMovie({
            id: '',
            original_title: '',
            release_date: '',
            vote_average: '',
            overview: '',
            poster_path: '', 
          })
    }



    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., sending the data to an API.
    addMovie(movie);
    setMovie({
        id: '',
        original_title: '',
        release_date: '',
        vote_average: '',
        overview: '',
        poster_path: '', 
      })
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Add a New Movie</h2>
      
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formId">
              <Form.Label>Movie ID</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter movie ID"
                name="id"
                value={movie.id}
                onChange={handleChange}
                required

              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter movie title"
                name="original_title"
                value={movie.original_title}
                
                required
                disabled

              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formReleaseDate">
              <Form.Label>Release Date</Form.Label>
              <Form.Control
                type="date"
                name="release_date"
                value={movie.release_date}
                
                required
                disabled

              />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formRating">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter rating"
                name="vote_average"
                value={movie.vote_average}
                
                step="0.1"
                min="0"
                max="10"
                required
                disabled

              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3" controlId="formOverview">
              <Form.Label>Overview</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter movie overview"
                name="overview"
                value={movie.overview}
                
                required
                disabled

              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPosterUrl">
              <Form.Label>Poster URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter poster URL"
                name="poster_path"
                value={movie.poster_path}
                
                required
                disabled
              />
            </Form.Group>
          </Col>
        </Row>
        
        <Button variant="primary" type="submit">
          Add Movie
        </Button>
      </Form>
    </Container>
  );
};

export default AddMovie;
