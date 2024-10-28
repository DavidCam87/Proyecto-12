import { Link } from 'react-router-dom';
import './HouseCard.css';

const houseImages = {
  'House Arryn': '/assets/Arryn.jpg',
  'Greyjoy': '/assets/GreyJoy.jpg',
  'House Greyjoy': '/assets/GreyJoy.jpg',
  'House Martell': '/assets/Martell.jpg',
  'House Stark': '/assets/Stark.jpg',
  'House Targaryen': '/assets/Targaryen.jpg',
  'Targaryan': '/assets/Targaryen.jpg',
  'Tyrell': '/assets/Tyrell.jpg',
  'House Tyrell': '/assets/Tyrell.jpg',
  'Baratheon': '/assets/Baratheon.jpg',
  'House Baratheon': '/assets/Baratheon.jpg',
  'House Lannister': '/assets/Lannister.jpg',
  'Lannister': '/assets/Lannister.jpg',
  'House Lanister': '/assets/Lannister.jpg',
  'House Tully': '/assets/Tully.jpg',
  'House Clegane': '/assets/Clegane.jpg',
  'Bolton': '/assets/Bolton.jpg',
  'Mormont': '/assets/Mormont.jpg',
  'House Tarly': '/assets/Tarly.webp',
  'House Baelish': '/assets/Baelish.webp',
};

// eslint-disable-next-line react/prop-types
function HouseCard({ house = "Unknown House" }) {
  const houseImage = houseImages[house] || '/assets/Generica.jpg';

  return (
    <div className="house-card">
      <img src={houseImage} alt={`House of ${house}`} />
      <h4>{house}</h4>
      <Link to={`/houses/${encodeURIComponent(house)}`}>Ver Detalles</Link>
    </div>
  );
};

export default HouseCard;