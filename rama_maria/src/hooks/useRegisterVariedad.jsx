// src/hooks/useRegisterVariedad.jsx
import { useState } from "react";
import axiosClient from "../services/axiosClient";


const useRegisterVariedad = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const registerVariedad = async (variedad) => {
    setLoading(true);
    try {
      const response = await axiosClient.post("variedades/registrar", variedad);
      setLoading(false);
      return response.data;
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  return { registerVariedad, loading, error };
};

export default useRegisterVariedad;
