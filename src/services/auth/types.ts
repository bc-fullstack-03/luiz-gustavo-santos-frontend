export type LoginBody = {
  user: string
  password: string
}

export type LoginResponse = {
  accessToken: string
}

export type RegisterBody = {
  name: string
  user: string
  password: string
}

export type RegisterResponse = {
  _id: string
  user: string
  createdAt: string
  updateAt: string
}
