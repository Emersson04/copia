import React from 'react'
import axiosClient from '../services/axiosClient'

export const useRegistrarVariedad2 = () => {

    const registarVariedad2 = async (variedad) => {

        try {
            const response = await axiosClient.post("variedades/registrar", variedad)
            return response.data
        } catch (error) {
            console.log("error del servidor", error)
        }
    }

    return { registarVariedad2 }
}
