import poke from "./assets/pokeapi_256.png";
import eevee from './assets/eevee.jpg';
import './PokeGrid.css'; 

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