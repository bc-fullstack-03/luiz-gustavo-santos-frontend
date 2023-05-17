import { Navigate, Outlet, useLocation } from 'react-router'

import { useAuth } from '@/hooks'

export const ProtectedPage = () => {
  const { token, user } = useAuth()

  const location = useLocation()

  if (!token && !user?.id) {
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return <Outlet />
}
