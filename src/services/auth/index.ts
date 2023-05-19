import api from '../api'
import { LoginBody, LoginResponse, RegisterBody } from './types'

export const signin = async ({ email, password }: LoginBody) => {
  return api.post<LoginResponse>('/authentication/login', {
    email,
    password
  })
}

export const signup = async ({ name, password, email }: RegisterBody) => {
  return api.post('/user/create', {
    name,
    password,
    email
  })
}

export const signOut = () => {
  localStorage.removeItem('parrot:token')
  localStorage.removeItem('parrot:userId')
}
