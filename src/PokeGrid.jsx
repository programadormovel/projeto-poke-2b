import poke from "./assets/pokeapi_256.png";
import eevee from './assets/eevee.jpg';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './PokeGrid.css'; // Vamos usar isso para o fundo vermelho

const PokeGrid = () => {
  return (
      <div className="PokeGrid">
          <h1>PokeGrid</h1>
          <img src={poke} />
          <img src={eevee} />
          <img src={poke} />
          <img src={eevee} />
          <img src={poke} />
          <img src={eevee} />
      </div>
  );
};

export default PokeGrid;