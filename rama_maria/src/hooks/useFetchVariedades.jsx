import { useState, useEffect } from "react";
import axiosClient from "../services/axiosClient";

const useFetchVariedades = () => {
  const [variedadesData, setVariedadesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchVariedadesData = async () => {
    try {
      const response = await axiosClient.get("variedades/listar");
      //filtros para almacenar la respuesta de una peticion 
      const allData = response.data;
      // const activeData = allData.filter(item => item.estado === 'activo');
      // const inactiveData = allData.filter(item => item.estado === 'inactivo');

      setVariedadesData(allData);
      // setVariedadesData(activeData);
      // setVariedadesData(inactiveData);

    } catch (error) {
      console.error("Error en el servidor:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVariedadesData();
  }, []);

  return { 
    variedadesData, 
    loading, 
    fetchVariedadesData 
  };
};

export default useFetchVariedades;