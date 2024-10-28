/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './CharacterCard.css';

function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <img src={character.imageUrl} alt={`Imagen de ${character.fullName}`} />
      <h3>{character.fullName}</h3>
      <p>{character.title}</p>
      <Link to={`/characters/${character.id}`} className="details-link">
        Ver Detalles
      </Link>
    </div>
  );
}

export default CharacterCard;