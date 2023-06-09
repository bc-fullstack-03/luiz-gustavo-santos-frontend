import axios, { AxiosError } from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8082/api/v1',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('parrot:token')

    if (!token) {
      return config
    }

    if (config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },

  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

export default api
