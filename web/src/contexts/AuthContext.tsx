import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../services/api'
import { useNavigate } from 'react-router-dom'

export interface UserDTO {
  id: string
  name: string
  email: string
  session_id: string
}

type AuthContextDataProps = {
  user: UserDTO
  handleSignIn: (email: string, password: string) => Promise<void>
  handleSignUp: (name: string, email: string, password: string) => Promise<void>
  isLoadingUserStorageData: boolean
  handleSignOut: () => void
}

export const AuthContext = createContext({} as AuthContextDataProps)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO)
  const [isLoadingUserStorageData, setIsLoadingUserStorageData] = useState(true)

  // const navigate = useNavigate()

  const handleSignIn = useCallback(async (email: string, password: string) => {
    try {
      setIsLoadingUserStorageData(true)
      const { data } = await api.post('/users/sessions', { email, password })

      if (data.user) {
        localStorage.setItem('@every_delivery:user', JSON.stringify(data.user))
        setUser(data.user)
      }

      // eslint-disable-next-line
    } catch (error) {
      throw error
    } finally {
      setIsLoadingUserStorageData(false)
    }
  }, [])

  const handleSignUp = useCallback(
    async (name: string, email: string, password: string) => {
      try {
        setIsLoadingUserStorageData(true)
        const { data } = await api.post('/users', {
          name,
          email,
          password,
        })

        if (data.user) {
          localStorage.setItem('@every_delivery:user', JSON.stringify(data))
          setUser(data.user)
        }
        // eslint-disable-next-line
    } catch (error) {
        throw error
      } finally {
        setIsLoadingUserStorageData(false)
      }
    },
    [],
  )

  // async function handleSignOut() {
  const handleSignOut = useCallback(async () => {
    try {
      setIsLoadingUserStorageData(true)
      setUser({} as UserDTO)
      localStorage.clear()

      // eslint-disable-next-line
    } catch (error) {
      throw error
    } finally {
      setIsLoadingUserStorageData(false)
    }
  }, [])

  // async function loadUserData() {
  const loadUserData = useCallback(async () => {
    try {
      setIsLoadingUserStorageData(true)

      const userData = localStorage.getItem('@every_delivery:user')

      if (userData) {
        setUser(JSON.parse(userData))
      }

      // eslint-disable-next-line
    } catch (error) {
      throw error
    } finally {
      setIsLoadingUserStorageData(false)
    }
  }, [])

  useEffect(() => {
    loadUserData()
  }, [loadUserData])

  return (
    <AuthContext.Provider
      value={{
        user,
        handleSignIn,
        handleSignUp,
        isLoadingUserStorageData,
        handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
