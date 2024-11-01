// src/hooks/useToggleVariedad.jsx
import axiosClient from '../services/axiosClient';

export const useToggleVariedad = () => {
  const activateVariedad = async (id) => {
    try {
      const response = await axiosClient.put(`variedades/activar/${id}`);
      console.log(response.data); // Verifica la respuesta
    } catch (error) {
      console.error('Error activating variety:', error);
    }
  };

  const deactivateVariedad = async (id) => {
    try {
      const response = await axiosClient.put(`variedades/desactivar/${id}`);
      console.log(response.data); // Verifica la respuesta
    } catch (error) {
      console.error('Error deactivating variety:', error);
    }
  };

  return { activateVariedad, deactivateVariedad };
};
