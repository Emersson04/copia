// src/context/TableContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import useFetchAnalisis from "../hooks/useFetchAnalisis";
import useFetchVariedades from "../hooks/useFetchVariedades";
import useFetchUsuarios from "../hooks/useFetchUsuarios";


const TableContext = createContext();


export const TableProvider = ({ children }) => {


  const { analisisData, loading: loadingAnalisis } = useFetchAnalisis();
  const { variedadesData, loading: loadingVariedades, fetchVariedadesData } = useFetchVariedades();
  const { usuariosData, loading: loadingUsuarios, fetchUsuariosData } = useFetchUsuarios();

  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    setLoading(loadingAnalisis || loadingVariedades || loadingUsuarios);
  }, [loadingAnalisis, loadingVariedades, loadingUsuarios]);

  
  const refreshVariedades = async () => {
    await fetchVariedadesData();
  };

    
  const refreshUsuarios = async () => {
    await fetchUsuariosData();
  };


  
  return (
    <TableContext.Provider value={{ analisisData, variedadesData, usuariosData, loading, refreshVariedades, refreshUsuarios }}>
      {children}
    </TableContext.Provider>
  );
};

//funcione que nos permite acceder a cada uno de los valores de contexto
export const useTable = () => {
  //se retorna que se pueda usar el contexto TableContext 
  return useContext(TableContext);
};
