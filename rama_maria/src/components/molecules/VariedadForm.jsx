// src/components/molecules/VariedadForm.jsx
import React, { useState } from 'react';
import { Input, Button } from '@nextui-org/react';
import useRegisterVariedad from '../../hooks/useRegisterVariedad';
import { useModal } from '../../context/ModalContext';
import { useTable } from '../../context/TableContext';

const VariedadForm = () => {
  const [name, setName] = useState('');
  const { registerVariedad, loading, error } = useRegisterVariedad();
  const { closeModal } = useModal();
  const { refreshVariedades } = useTable();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerVariedad({ nombre: name });
      await refreshVariedades();
      closeModal();
    } catch (err) {
      console.error('Error registering variety:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input 
        fullWidth 
        clearable 
        label="Nombre" 
        placeholder="Ingresa tu nombre" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={loading}
      />
      <Button type="submit" color="primary" className="mt-4" disabled={loading}>
        {loading ? 'Registrando...' : 'Registrar'}
      </Button>
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </form>
  );
};

export default VariedadForm;
