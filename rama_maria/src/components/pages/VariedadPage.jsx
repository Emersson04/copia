// src/pages/VariedadPage.jsx
import React, { useEffect } from "react";
import { useTable } from '../../context/TableContext';
import MainLayout from '../layouts/MainLayout';
import TableVariedades from '../organisms/TableVariedades';
import { Spinner } from "@nextui-org/react";


export const VariedadPage = () => {
  const { variedadesData, loading } = useTable();


  if (loading) {
    return <Spinner />;
  }

  return (
    <MainLayout>
      <TableVariedades data={variedadesData}/>
    </MainLayout>
  );
};
