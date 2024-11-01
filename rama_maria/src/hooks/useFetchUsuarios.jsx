// src/hooks/useFetchUsuarios.jsx
import { useState, useEffect } from "react";
import axiosClient from "../services/axiosClient";

const useFetchUsuarios = () => {
  const [usuariosData, setUsuariosData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsuariosData = async () => {
    try {
      const response = await axiosClient.get("usuarios/listar");
      setUsuariosData(response.data);
    } catch (error) {
      console.error("Error en el servidor:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsuariosData();
  }, []);

  return { usuariosData, loading, fetchUsuariosData };
};

export default useFetchUsuarios;
