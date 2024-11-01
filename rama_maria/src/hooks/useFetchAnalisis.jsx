import { useState, useEffect } from "react";
import axiosClient from "../services/axiosClient";


const useFetchAnalisis = () => {
  const [analisisData, setAnalisisData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalisisData = async () => {
      try {
        const response = await axiosClient.get("analisis/listar");
        setAnalisisData(response.data);
      } catch (error) {
        console.error("Error fetching analysis data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalisisData();
  }, []);

  return { analisisData, loading };
};

export default useFetchAnalisis;
