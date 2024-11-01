// src/pages/AnalisisPage.jsx
import React from "react";
import { useTable } from '../../context/TableContext';
import MainLayout from '../layouts/MainLayout';
import TableAnalisis from '../organisms/TableAnalisis';
import { Spinner } from "@nextui-org/react";

export const AnalisisPage = () => {
  const { analisisData, loading } = useTable();

  if (loading) {
    return <Spinner />;
  }

  return (
    <MainLayout>
      <div className=''>
        <h1 className='text-3xl font-bold'>Bienvenido a Analisis</h1>
      </div>
      <TableAnalisis data={analisisData}/>
    </MainLayout>
  );
};
