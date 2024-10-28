import { useEffect, useState } from 'react';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import './Characters.css';

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://thronesapi.com/api/v2/Characters')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCharacters(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
        setError('Hubo un problema al cargar los personajes');
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="cargando">
      <img src="https://cdn.dribbble.com/users/903590/screenshots/6412921/got.gif" alt="cargando" />
    </div>);
  if (error) return <p>{error}</p>;

  return (
    <div className="characters">
      <h2>Personajes</h2>
      <div className="cards">
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default Characters;