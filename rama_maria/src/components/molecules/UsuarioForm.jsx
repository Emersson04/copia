import React, { useState } from 'react'
import useRegistrarUsuario from '../../hooks/useRegistrarUsuario'
import { useTable } from '../../context/TableContext'
import { useModal } from '../../context/ModalContext'
import { Input, Button, Select, SelectItem } from '@nextui-org/react';



const UsuarioForm = () => {

    const [identificacion, setIdentificacion] = useState('')
    const [telefono, setTelefono] = useState('')
    const [nombre, setNombre] = useState('')
    const [correo_electronico, setCorreoElectronico] = useState('')
    const [tipo_usuario, setTipoUsuario] = useState('')
    const [password, setPassword] = useState('')
    const { registrarUsuario, loading, error } = useRegistrarUsuario()
    const { refreshUsuarios } = useTable()
    const { closeModal } = useModal()

    const datos = {
        identificacion,
        telefono,
        nombre,
        correo_electronico,
        tipo_usuario,
        password
    }

    const roles = [
        {key: "1", label: "Administrador"},
        {key: "2", label: "Catador"},
        {key: "3", label: "Caficultor"}
    ]

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await registrarUsuario(datos)
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
                label="Identificacion"
                placeholder='Ingresa tu identificacion'
                value={identificacion}
                onChange={(e) => setIdentificacion(e.target.value)}
                disabled={loading}
            />

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
{/* 
            <Input
                className='mb-2'
                fullWidth
                clearable
                label="Tipo Usuario"
                placeholder='Ingresa tu tipo de usuario'
                value={tipo_usuario}
                onChange={(e) => setTipoUsuario(e.target.value)}
                disabled={loading}
            /> */}

            <Select 
                isRequired
                className='w-full'
                clearable
                label="Tipo Usuario"
                placeholder='Ingresa tu tipo de usuario'
                value={tipo_usuario}
                onChange={(e) => setTipoUsuario(e.target.value)}
                disabled={loading}
            >
                {roles.map((rol)=>(
                    <SelectItem key={rol.key}>
                        {rol.label}
                    </SelectItem>
                ))}
            </Select>

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
                {loading ? 'Registrando...' : 'Registrar'}
            </Button>
            {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
        </form>
    )
}

export default UsuarioForm