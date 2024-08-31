import { Container, Row, Col, Image, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col md={4}>
          <Image src="https://scontent.fcai19-7.fna.fbcdn.net/v/t1.6435-1/117911706_2604631786464795_5469609393608131138_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=e4545e&_nc_ohc=1V8UTfNqokYQ7kNvgFHjVnr&_nc_ht=scontent.fcai19-7.fna&oh=00_AYBVJlSe8TrXYOOKH6l7-FQ9TBAseLsANYbFgM1S6N0nJw&oe=66F81660" roundedCircle fluid />
        </Col>
        <Col md={8}>
          <h2>About Us</h2>
          <p>
            Welcome to our Movie App! We are passionate about bringing you the best in cinematic experiences, from classic films to the latest blockbusters. Our platform allows you to explore a vast collection of movies, get detailed information, and even add your own reviews. We believe in the power of storytelling and strive to create a space where movie lovers can connect and share their thoughts.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                Our mission is to provide a seamless and enjoyable experience for movie enthusiasts. We aim to offer a comprehensive database of movies with all the information you need, whether you're looking for the latest release or an old favorite.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>What We Offer</Card.Title>
              <Card.Text>
                From movie details, ratings, and trailers to user reviews and personalized recommendations, we offer everything a movie lover could want. Our platform is constantly updated to ensure you have access to the latest information.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
