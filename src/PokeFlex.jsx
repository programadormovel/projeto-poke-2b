import poke from "./assets/pokeapi_256.png";
import eevee from './assets/eevee.jpg';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './PokeFlex.css'; // Vamos usar isso para o fundo vermelho

const PokeFlex = () => {
  return (
      <div className="PokeFlex">
          <h1>PokeFlex</h1>
          <img src={poke} />
          <img src={eevee} />
          <img src={poke} />
          <img src={eevee} />
          <img src={poke} />
          <img src={eevee} />
      </div>
  );
};

export default PokeFlex;