import { useState } from "react"
import axiosClient from "../services/axiosClient"


const useUpdateUsuario = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const updateUsuario = async (identificacion, updateData) => {
        setLoading(true)
        try {
            const response = await axiosClient.put(`usuarios/actualizar/${identificacion}`, updateData)
            setLoading(false)
            console.log(response.data)
            return response.data

        } catch (error) {
            setError(error)
            setLoading(false)
            throw error
        }
    }
    return { updateUsuario, loading, error }
}

export default useUpdateUsuario