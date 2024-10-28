import './ContactForm.css';
import useContactForm from '../../hooks/useContactForm';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function ContactForm({ onSubmit }) {
  const { register, handleSubmit, errors, validationRules } = useContactForm(onSubmit);
  const [charCount, setCharCount] = useState(0);

  const handleTextareaChange = (e) => {
    setCharCount(e.target.value.length);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label id='name'>Nombre</label>
        <input {...register('name', validationRules.name)} />
        {errors.name && <p className='error'>{errors.name.message}</p>}
      </div>
      <div>
        <label>Apellidos</label>
        <input {...register('lastName', validationRules.lastName)} />
        {errors.lastName && <p className='error'>{errors.lastName.message}</p>}
      </div>
      <div>
        <label>Fecha de Nacimiento</label>
        <input type="date" {...register('birthDate', validationRules.birthDate)} />
        {errors.birthDate && <p className='error'>{errors.birthDate.message}</p>}
      </div>
      <div>
        <label>Email</label>
        <input type="email" {...register('email', validationRules.email)} />
        {errors.email && <p className='error'>{errors.email.message}</p>}
      </div>
      <div>
        <label>Ideas</label>
        <p className='coment'>Comentanos tus ideas para mejorar nuestra web y que sea la mejor!!!</p>
        <textarea {...register('ideas', validationRules.ideas)} placeholder={validationRules.ideas.maxLength.message}
          onChange={handleTextareaChange}
        />
        <p className="char-count">{charCount} / {validationRules.ideas.maxLength.value} caracteres</p>
        {errors.ideas && <p className='error'>{errors.ideas.message}</p>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default ContactForm;