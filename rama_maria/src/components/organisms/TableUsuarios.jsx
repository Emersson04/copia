import React from 'react'
import { useTable } from '../../context/TableContext'
import PaginatedTable from './PaginatedTable'
import { useModal } from '../../context/ModalContext'
import UsuarioForm from '../molecules/UsuarioForm'
import { Button, Switch } from '@nextui-org/react';
import { useToggleUsuario } from '../../hooks/useToggleUsuario'
import UsuarioFormUpdate from '../molecules/UsuarioFormUpdate'



const TableUsuarios = ({ data }) => {
    const { refreshUsuarios } = useTable()
    const { openModal, setTitle } = useModal()

  
    
    const {activarUsuario, desactivarUsuario } = useToggleUsuario()

    const handleOpenModal = () => {
        openModal(<UsuarioForm/>)
        setTitle("Registrar Usuario")
    }

    const handleOpenUpdateModal = (row) => {
        openModal(<UsuarioFormUpdate row={row}/>)
        setTitle("Actualizar Usuario")
    }

    const handleToggle = async (identificacion, currenStatus) => {
        if (currenStatus === 'activo'){
            await desactivarUsuario(identificacion)
        } else {
            await activarUsuario(identificacion)
        }
        await refreshUsuarios()
    }

    const columns = ["IDENTIFICACION", "TELEFONO", "NOMBRE", "CORREO", "TIPO", "ESTADO", "ACCIONES"]
    console.log("table usuarios",data)
    return (
        <>
        <div className='my-2'>
            <Button onPress={handleOpenModal}>Registrar Usuario</Button>
        </div>
            <PaginatedTable
                columns={columns}
                data={data.map(row => ({
                    ...row,
                    acciones: (
                        <div className='flex gap-2'>
                            <Switch
                            size = 'sm'
                            defaultSelected={row.estado === 'activo'}
                            onChange={() => handleToggle(row.identificacion, row.estado)}
                            />
                            <Button onPress={() => handleOpenUpdateModal(row)}>
                                Editar
                            </Button>
                        </div>
                    )

                }))}
                searchProperty="nombre"
            />
        </>
    )
}

export default TableUsuarios