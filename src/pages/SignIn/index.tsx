import { EnvelopeSimple, Lock } from '@phosphor-icons/react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-hot-toast'

import { useAuth } from '@/hooks'
import { signin } from '@/services/auth'

import { Button, Form, Input } from '@/components'

const loginUserSchema = z.object({
  email: z
    .string()
    .nonempty('O email é obrigatório')
    .email('Formato de email inválido'),
  password: z.string().nonempty('A senha é obrgatória')
})

type LoginUserFormData = z.infer<typeof loginUserSchema>

const SignIn = () => {
  const navigate = useNavigate()
  const mutation = useMutation({ mutationFn: signin })
  const { token, userId } = useAuth()

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<LoginUserFormData>({ resolver: zodResolver(loginUserSchema) })

  const onSubmit: SubmitHandler<LoginUserFormData> = async ({
    email,
    password
  }) => {
    try {
      const { data } = await mutation.mutateAsync({ password, email })
      localStorage.setItem('parrot:token', data.token)
      localStorage.setItem('parrot:userId', data.id)

      toast.success('Login com sucesso!')
      navigate('/app/feed')
    } catch (error) {
      toast.error('Credenciais inválidas')
      console.log('LOGIN_ERROR', error)
    }
  }

  if (token && userId) {
    return <Navigate to="/app/feed" replace={false} />
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Endereço de e-mail"
        placeholder="Digite seu e-mail"
        id="email"
        type="email"
        {...register('email')}
        error={errors.email?.message}
        icon={<EnvelopeSimple weight="thin" size={24} />}
      />
      <Input
        label="Sua senha"
        placeholder="*******"
        type="password"
        id="password"
        {...register('password')}
        error={errors.password?.message}
        icon={<Lock weight="thin" size={24} />}
      />
      <Button
        type="submit"
        style={{ marginTop: '2rem' }}
        disabled={mutation.isLoading}
      >
        Entrar
      </Button>
    </Form>
  )
}

export default SignIn
