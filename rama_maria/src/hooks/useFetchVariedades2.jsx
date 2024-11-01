import React, { useEffect, useState } from 'react'
import axiosClient from '../services/axiosClient'


export const useFetchVariedades2 = () => {

    const [variedades2, setVariedadesData2] = useState([])

    const peticionbakend = async()=> {
        try {
            let response = await axiosClient.get("variedades/listar")
            setVariedadesData2(response.data)

        } catch (error) {
            console.log("eror del servidor",error)
        }
    }

    useEffect(()=> {
        peticionbakend()
    })

  return {variedades2, peticionbakend}
}
