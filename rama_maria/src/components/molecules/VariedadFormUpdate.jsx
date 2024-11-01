// src/components/molecules/VariedadFormUpdate.jsx
import React, { useState, useEffect } from 'react';
import { Input, Button, Select, SelectItem } from '@nextui-org/react';
import useUpdateVariedad from '../../hooks/useUpdateVariedad';
import { useModal } from '../../context/ModalContext';
import { useTable } from '../../context/TableContext';

const VariedadFormUpdate = ({ row }) => {
  const [name, setName] = useState(row.nombre || '');
  const { updateVariedad, loading, error } = useUpdateVariedad();
  const { closeModal } = useModal();
  const { refreshVariedades } = useTable();

  useEffect(() => {
    setName(row.nombre);
  }, [row]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateVariedad(row.codigo, { nombre: name });
      await refreshVariedades();
      closeModal();
    } catch (err) {
      console.error('Error en el servidor:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        fullWidth
        clearable
        label="Nombre"
        placeholder="Ingresa el nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={loading}
      />
      
      <Button type="submit" color="primary" className="mt-4" disabled={loading}>
        {loading ? 'Actualizando...' : 'Actualizar'}
      </Button>
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </form>
  );
};

export default VariedadFormUpdate;
