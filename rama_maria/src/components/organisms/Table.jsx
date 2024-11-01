// src/components/organisms/Table.jsx
import React from 'react';
import TableRow from '../molecules/TableRow';
import { Table, TableHeader, TableColumn, TableBody } from "@nextui-org/react";

const TableOrganism = ({ data }) => {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id} row={row} />
        ))}
      </TableBody>
    </Table>
  );
};

export default TableOrganism;
