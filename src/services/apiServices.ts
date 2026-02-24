import axios from "axios"

/**
 * Funcion la cual crea una instancia de axios para no repetir la URL en cada peticion
 */

const api = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL,
      headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
})



export default api