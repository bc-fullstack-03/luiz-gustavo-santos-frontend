import axios, { AxiosError } from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4000/v1',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

api.interceptors.request.use(
  async (config) => {
    const token = JSON.parse(localStorage.getItem('parrot:token') as string)

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