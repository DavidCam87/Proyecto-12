import './Contact.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import { useAppReducer } from '../../hooks/useAppReducer';

function Contact() {
  const { state, addIdea } = useAppReducer();

  const onSubmit = (data) => {
    addIdea(data);
  };

  return (
    <div className="contact-page">
      <h2>Contáctanos</h2>
      <ContactForm onSubmit={onSubmit} />
      <div className="ideas-list">
        <h3>Ideas Recibidas</h3>
        <ul>
          {state.ideas.map((idea, index) => (
            <li key={index}>{idea.ideas}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;