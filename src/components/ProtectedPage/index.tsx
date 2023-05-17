import { Navigate, useLocation } from 'react-router'

import { useAuth } from '@/hooks'
import { Dashboard } from '..'

export const ProtectedPage = () => {
  const { token, user } = useAuth()

  const location = useLocation()

  if (!token && !user?.id) {
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return <Dashboard />
}
