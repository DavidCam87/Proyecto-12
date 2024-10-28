import { useEffect, useState } from 'react';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import HouseCard from '../../components/HouseCard/HouseCard';
import './Home.css';

function Home() {
  const [characters, setCharacters] = useState([]);
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://thronesapi.com/api/v2/Characters');
        const data = await response.json();

        const shuffledCharacters = data.sort(() => 0.5 - Math.random()).slice(0, 6);
        setCharacters(shuffledCharacters);

        const uniqueHouses = [...new Set(data.map(char => char.family))];
        const shuffledHouses = uniqueHouses.sort(() => 0.5 - Math.random()).slice(0, 6);
        setHouses(shuffledHouses);

      } catch (error) {
        setError('Hubo un problema al cargar los datos.');
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return (
    <div className="cargando">
      <img src="https://cdn.dribbble.com/users/903590/screenshots/6412921/got.gif" alt="cargando" />
    </div>);
  if (error) return <p>{error}</p>;

  return (
    <div className="home">
      <h2>Bienvenido al Mundo de Juego de Tronos</h2>
      <div className="sections">
        <section className='charactersHome'>
          <h3>Personajes</h3>
          <div className="cards">
            {characters.map(character => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        </section>
        <section className='housesHome'>
          <h3>Casas</h3>
          <div className="cards">
            {houses.map(house => (
              <HouseCard key={house} house={house} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;