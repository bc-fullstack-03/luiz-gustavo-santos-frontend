import { createContext } from 'react'

const AuthContext = createContext({})

type AuthProviderProps = {
  children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}
