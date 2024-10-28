import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h2 className="not-found__message">404 - Página No Encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <a href="/" className="not-found__link">Volver a la página principal</a>
    </div>
  );
};

export default NotFound;