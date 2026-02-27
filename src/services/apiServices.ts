import axios from "axios"

/**
 * Funcion la cual crea una instancia base personalizada. Utilizamos el metodo "create" de Axios.
 * * El "api.interceptor" captura el objeto config que contiene la URL señalada anteriormente.
 * Busca la clave API y si existe inyecta en el header la autorizacion retornando el objeto config.
 * @param import.meta.env.VITE_BASE_URL - URL base.
 * @param import.meta.env.VITE_API_KEY - API Key
 * @returns config
 */

const api = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL,
      params: {
            lenguage: 'es-ES'
      }
})
api.interceptors.request.use((config) => {
      const token = import.meta.env.VITE_API_KEY;

      if (token) {
            config.headers.Authorization = `Bearer ${import.meta.env.VITE_API_KEY}`
      }
      return config;
}, (error) => {
      return Promise.reject(error)
}

)
export default api