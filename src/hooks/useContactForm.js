import { useForm } from 'react-hook-form';

const useContactForm = (onSubmit) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // validación para que el usuario tenga al menos 18 años(buscado por internet para este ejercicio)
  const isAdult = (dateString) => {
    const birthDate = new Date(dateString);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    // Se ajusta la edad si el cumpleaños aún no ha ocurrido este año 
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
    }

    return age >= 18 || 'Debes tener al menos 18 años';
  };

  const validationRules = {
    name: { required: 'Nombre es obligatorio', maxLength: 50 },
    lastName: { required: 'Apellidos son obligatorios', maxLength: 50 },
    birthDate: {
      required: 'Fecha de nacimiento es obligatoria',
      validate: isAdult,
    },
    email: {
      required: 'Correo electrónico es obligatorio',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Correo electrónico no es válido',
      },
    },
    ideas: {
      required: 'Las ideas son obligatorias',
      maxLength: { value: 250, message: 'Máximo 250 caracteres' },
    },
  };

  const handleFormSubmit = (data) => {
    onSubmit(data);
    reset();
  };

  return {
    register,
    handleSubmit: handleSubmit(handleFormSubmit),
    errors,
    reset,
    validationRules,
  };
};

export default useContactForm;