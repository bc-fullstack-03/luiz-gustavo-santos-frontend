import api from '../api'
import {
  LoginBody,
  LoginResponse,
  RegisterBody,
  RegisterResponse
} from './types'

export const signin = async ({ user, password }: LoginBody) => {
  return api.post<LoginResponse>('/security/login', {
    user,
    password
  })
}

export const signup = async ({ name, password, user }: RegisterBody) => {
  return api.post<RegisterResponse>('/security/register', {
    name,
    password,
    user
  })
}

export const signOut = () => {
  localStorage.removeItem('parrot:token')
  localStorage.removeItem('parrot:user')
}
