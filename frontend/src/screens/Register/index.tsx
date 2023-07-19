import { Header } from '../../components/Header'

import { BodyContainer, Container, RegisterFormContainer } from './styles'
import { useContext } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useForm, Controller } from 'react-hook-form'
import { ToastContainer } from 'react-toastify'
import { Input } from '../../components/Input'
import { AuthContext } from '../../contexts/AuthContext'
import {
  ErrorMessage,
  LabelForm,
  MaskInput,
} from '../../components/Input/styles'
import { Button } from '../../components/Button'
import deliver from '../../assets/entregador.svg'
import { useNavigate } from 'react-router-dom'

const newUser = z
  .object({
    name: z.string().nonempty('Campo obrigatório'),
    email: z
      .string()
      .nonempty('Campo obrigatório')
      .email({ message: 'Coloque um email válido' }),
    password: z
      .string()
      .nonempty('Campo obrigatório')
      .min(8, { message: 'No mínimo 8 caracteres' }),
    repeatPassword: z
      .string()
      .nonempty('Campo obrigatório')
      .min(8, 'Mínimo 8 caracteres'),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: 'As senhas nao coincidem',
    path: ['repeatPassword'], // path of error
  })

type newUserFormInputs = z.infer<typeof newUser>

export function Register() {
  const { handleSignUp } = useContext(AuthContext)
  const navigate = useNavigate()

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<newUserFormInputs>({
    resolver: zodResolver(newUser),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
  })

  async function submitRegister(data: newUserFormInputs) {
    try {
      // data.birth_date = formatStringData(data.birth_date)
      data.email = data.email.toLowerCase()
      await handleSignUp(data.name, data.email, data.password)
      navigate('/')
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  return (
    <Container>
      <Header />

      <BodyContainer>
        <ToastContainer />
        <img src={deliver} alt="" />
        <RegisterFormContainer onSubmit={handleSubmit(submitRegister)}>
          <Input
            type="text"
            name="name"
            labelContent="Nome"
            control={control}
            formState={errors.name}
          />

          <Input
            type="text"
            name="email"
            labelContent="E-mail"
            control={control}
            formState={errors.email}
          />

          <Input
            type="password"
            control={control}
            name="password"
            formState={errors.password}
            labelContent="Senha"
            hintContent="Mínimo de 8 dígitos"
          />

          <Input
            type="password"
            control={control}
            name="repeatPassword"
            formState={errors.repeatPassword}
            labelContent="Confirmar Senha"
            hintContent="Mínimo de 8 dígitos"
          />

          <Button value="criar conta" type="submit" />
          <Button
            value="Fazer login"
            type="button"
            color="#00875F"
            handleClick={() => navigate('/login')}
          />
        </RegisterFormContainer>
      </BodyContainer>
    </Container>
  )
}
