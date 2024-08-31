import { Container, Row, Col } from 'react-bootstrap';
import Movie from "../components/Movie";

/* eslint-disable react/prop-types */
const Movies = (props) => {
  if (!props.m) return <div>Loading ......</div>;

  return (
    <Container>
      <Row>
        {props.m.map((m) => (
          <Col key={m.id} sm={12} md={4} lg={4}>
            <Movie themovie={m} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Movies;
