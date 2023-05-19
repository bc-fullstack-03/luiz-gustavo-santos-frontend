export type LoginBody = {
  email: string
  password: string
}

export type LoginResponse = {
  id: string
  token: string
}

export type RegisterBody = {
  name: string
  email: string
  password: string
}
