// src/components/organisms/TableAnalisis.jsx
import React from 'react';
import PaginatedTable from './PaginatedTable';

const TableAnalisis = ({ data }) => {
  const columns = ["CODIGO", "FECHA", "ANALISTA", "IDENTIFICACION", "MUESTRA", "TIPO ANALISIS", "ESTADO", "CODE TIPO"];

  return (
    <PaginatedTable
    columns={columns}
    data={data.map(row => ({
        ...row,

    }))}
    searchProperty="codigo"
    />
  );
};

export default TableAnalisis;
