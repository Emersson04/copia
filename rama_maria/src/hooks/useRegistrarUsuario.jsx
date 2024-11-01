import { useState } from "react";
import axiosClient from "../services/axiosClient";


const useRegistrarUsuario = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

const registrarUsuario = async (usuario) => {
    setLoading(true)
    try {
        const response = await axiosClient.post("usuarios/registrar", usuario)
        setLoading(false)
        return response.data
    
    } catch (error) {
        setError(error)
        setLoading(false)
        throw error
    }
}    

  return { registrarUsuario, loading, error }
}

export default useRegistrarUsuario