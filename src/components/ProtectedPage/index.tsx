import { Navigate, useLocation } from 'react-router'

import { useAuth } from '@/hooks'

type ProtectedPageProps = {
  children: JSX.Element
}

export const ProtectedPage: React.FC<ProtectedPageProps> = ({ children }) => {
  const { token, user } = useAuth()

  const location = useLocation()

  if (!token && !user?.id) {
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return children
}
