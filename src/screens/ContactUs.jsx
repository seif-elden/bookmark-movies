import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Our Address</Card.Title>
              <Card.Text>
                <FaMapMarkerAlt /> 123 Movie Street, Film City, CA 12345, USA
              </Card.Text>
              <Card.Text>
                <FaPhoneAlt /> +1 (555) 123-4567
              </Card.Text>
              <Card.Text>
                <FaEnvelope /> contact@movieapp.com
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Follow Us</Card.Title>
              <Card.Text>
                Stay connected with us through social media!
              </Card.Text>
              <div className="d-flex justify-content-start">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                  <FaFacebook size={30} className="me-3 text-primary" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                  <FaTwitter size={30} className="me-3 text-info" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                  <FaInstagram size={30} className="me-3 text-danger" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                  <FaLinkedin size={30} className="text-primary" />
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
