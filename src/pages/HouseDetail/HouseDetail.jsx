import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './HouseDetail.css';

function HouseDetail() {
  const { family } = useParams();
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch('https://thronesapi.com/api/v2/Characters')
      .then(response => response.json())
      .then(data => {
        const houseMembers = data.filter(character => character.family === family);
        setMembers(houseMembers);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching house details:', error);
        setError('Hubo un problema al cargar los datos.');
        setLoading(false);
      });
  }, [family]);

  if (loading) return (
    <div className="cargando">
      <img src="https://cdn.dribbble.com/users/903590/screenshots/6412921/got.gif" alt="cargando" />
    </div>);
  if (error) return <p>{error}</p>;

  return (
    <div className="house-detail">
      <h2>Casa {family}</h2>
      <div className="members">
        {members.length > 0 ? (
          members.map(member => (
            <div key={member.id} className="member-card">
              <img src={member.imageUrl} alt={member.fullName} />
              <h4>{member.fullName}</h4>
              <p>{member.title}</p>
              <Link to={`/characters/${member.id}`}>Ver Detalles</Link>
            </div>
          ))
        ) : (
          <p>No se encontraron miembros para esta casa.</p>
        )}
      </div>
    </div>
  );
};

export default HouseDetail;