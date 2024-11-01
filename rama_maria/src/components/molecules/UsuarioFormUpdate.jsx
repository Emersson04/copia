import React, { useEffect, useState } from 'react'
import { useTable } from '../../context/TableContext'
import { useModal } from '../../context/ModalContext'
import { Input, Button, Select, SelectItem } from '@nextui-org/react';
import useUpdateUsuario from '../../hooks/useUpdateUsuario';



const UsuarioFormUpdate = ({ row }) => {

    // const [identificacion, setIdentificacion] = useState(row.identificacion||'')
    const [telefono, setTelefono] = useState(row.telefono || '')
    const [nombre, setNombre] = useState(row.nombre || '')
    const [correo_electronico, setCorreoElectronico] = useState(row.correo_electronico || '')
    const [tipo_usuario, setTipoUsuario] = useState(row.tipo_usuario || '')
    const [password, setPassword] = useState(row.password || '')
    const { updateUsuario, loading, error } = useUpdateUsuario()
    const { refreshUsuarios } = useTable()
    const { closeModal } = useModal()

    useEffect(() => {
        // setIdentificacion(row.identificacion)
        setTelefono(row.telefono)
        setNombre(row.nombre)
        setCorreoElectronico(row.correo_electronico)
        setTipoUsuario(row.tipo_usuario)
        setPassword(row.password)
    }, [row])

    const datos = {
        telefono,
        nombre,
        correo_electronico,
        tipo_usuario,
        password
    }

    const roles = [
        { key: "1", label: "Administrador" },
        { key: "2", label: "Catador" },
        { key: "3", label: "Caficultor" }
    ]

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await updateUsuario(row.identificacion, datos)
            await refreshUsuarios()
            closeModal()
        } catch (error) {
            console.log('Error al registrar usuario', error)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
         

            <Input
                className='mb-2'
                fullWidth
                clearable
                label="Telefono"
                placeholder='Ingresa tu telefono'
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                disabled={loading}
            />

            <Input
                className='mb-2'
                fullWidth
                clearable
                label="Nombre"
                placeholder='Ingresa tu nombre'
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                disabled={loading}
            />

            <Input
                className='mb-2'
                fullWidth
                clearable
                label="Correo"
                placeholder='Ingresa tu correo'
                value={correo_electronico}
                onChange={(e) => setCorreoElectronico(e.target.value)}
                disabled={loading}
            />
            

            <select
                className='w-full border py-2'
                // label="Tipo Usuario"
                // placeholder='Ingresa tu tipo de usuario'
                value={tipo_usuario}
                onChange={(e) => setTipoUsuario(e.target.value)}
                disabled={loading}
            >
                {roles.map((rol) => (
                    <option key={rol.key}>
                        {rol.label}
                    </option>
                ))}
            </select>

            <Input
                className='mb-2'
                fullWidth
                clearable
                label="Contraseña"
                placeholder='Ingresa tu contraseña'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
            />

            <Button type='submit' color='primary' className='mt-4' disabled={loading}>
                {loading ? 'Actualizando...' : 'Actualizar'}
            </Button>
            {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
        </form>
    )
}

export default UsuarioFormUpdate