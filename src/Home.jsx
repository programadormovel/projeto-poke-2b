import poke from "./assets/pokeapi_256.png";
import eevee from './assets/eevee.jpg';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Home.css'; // Vamos usar isso para o fundo vermelho
import PokeFlex from "./PokeFlex";
import PokeGrid from "./PokeGrid";

const Home = () => {
  return (
      <div className="Home">
          <h1>Home</h1>
          <PokeFlex />
          <PokeGrid />
      </div>
  );
};

export default Home;
