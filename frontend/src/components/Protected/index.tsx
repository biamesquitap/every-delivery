import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

interface ProtectedProps {
  children: JSX.Element
}

export function Protected({ children }: ProtectedProps) {
  const { user } = useAuth()
  const isSignedIn = Object.keys(user).length !== 0

  if (!isSignedIn) return <Navigate to={{ pathname: '/login' }} />

  return children
}
