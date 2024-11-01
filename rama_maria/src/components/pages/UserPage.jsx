import React from 'react'
import MainLayout from '../layouts/MainLayout'
import TableUsuarios from '../organisms/TableUsuarios'
import { useTable } from '../../context/TableContext';

export const UserPage = () => {
    const { usuariosData, loading } = useTable();
    
    return (
        <>
            <MainLayout>
              <TableUsuarios  data={usuariosData}/>
            </MainLayout>
        </>
    )
}

