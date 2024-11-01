import axiosClient from "../services/axiosClient"


export const useToggleUsuario = () => {

    const activarUsuario = async (identificacion) => {
        try {
            const response = await axiosClient.put(`usuarios/activar/${identificacion}`)
            console.log(response.data)
        } catch (error) {
            console.log('Error al activar el usuario', error)
        }
    }

    const desactivarUsuario = async (identificacion) => {
        try {
            const response = await axiosClient.put(`usuarios/desactivar/${identificacion}`)
            console.log(response.data)
        } catch (error) {
            console.log('Error al activar el usuario', error)
        }
    }
  return { activarUsuario, desactivarUsuario }
}
