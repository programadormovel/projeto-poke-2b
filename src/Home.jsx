import poke from "./assets/pokeapi_256.png";
import eevee from './assets/eevee.jpg';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Home.css'; // Vamos usar isso para o fundo vermelho

const images = [poke, eevee, poke, eevee, poke, eevee, poke, eevee, poke, eevee, poke, eevee, poke, eevee];

const Home = () => {
  return (
    <div className="home-background">
      <Container className="py-4">
        <Row className="g-3 justify-content-center">
          {images.map((imgSrc, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={2} className="d-flex justify-content-center">
              <Image src={imgSrc} alt={`pokemon-${index}`} fluid rounded />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
