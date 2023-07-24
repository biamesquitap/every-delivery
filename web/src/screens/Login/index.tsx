import { Header } from '../../components/Header'
import { AuthContext } from '../../contexts/AuthContext'
import {
  Container,
  FormContainer,
  LoginContainer,
  MessageError,
  RegisterLink,
} from './styles'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Input } from '../../components/Input'
import deliver from '../../assets/entregador.svg'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'

const signInCredentials = z.object({
  email: z
    .string()
    .nonempty('Campo obrigatório')
    .email({ message: 'Digite um email válido' }),
  password: z
    .string()
    .nonempty('Campo obrigatório')
    .min(1, { message: 'Mínimo de 8 caracteres' }),
})

export type SignInCredentials = z.infer<typeof signInCredentials>

export function Login() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<SignInCredentials>({
    resolver: zodResolver(signInCredentials),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const navigate = useNavigate()
  const { handleSignIn } = useContext(AuthContext)
  const [errorMessage, setErrorMessage] = useState('')

  async function submitLogin(loginSubmit: SignInCredentials) {
    try {
      setErrorMessage('')
      loginSubmit.email = loginSubmit.email.toLowerCase()
      await handleSignIn(loginSubmit.email, loginSubmit.password)
      navigate('/')
    } catch (error) {
      console.log(error)
      setErrorMessage('Email ou senha incorreto!')
    }
  }

  return (
    <Container>
      <Header />
      <LoginContainer>
        <img src={deliver} alt="" />

        <FormContainer onSubmit={handleSubmit(submitLogin)}>
          <Input
            type="text"
            control={control}
            name="email"
            formState={errors.email}
            labelContent="E-mail"
          />

          <Input
            type="password"
            control={control}
            name="password"
            formState={errors.password}
            labelContent="Senha"
            hintContent="Mínimo de 8 dígitos"
          />

          <Button type="submit" value="Entrar na conta" />

          {errorMessage && <MessageError>{errorMessage}</MessageError>}

          <Link to="/register">
            <RegisterLink>
              Ainda não tenho conta. Quero me cadastrar
            </RegisterLink>
          </Link>
        </FormContainer>
      </LoginContainer>
    </Container>
  )
}
