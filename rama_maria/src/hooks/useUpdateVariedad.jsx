// src/hooks/useUpdateVariedad.jsx
import { useState } from "react";
import axiosClient from "../services/axiosClient";

const useUpdateVariedad = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateVariedad = async (codigo, updatedData) => {
    setLoading(true);
    try {
      const response = await axiosClient.put(`variedades/actualizar/${codigo}`, updatedData);
      setLoading(false);
      console.log(response.data)
      return response.data;
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  return { updateVariedad, loading, error };
};

export default useUpdateVariedad;
