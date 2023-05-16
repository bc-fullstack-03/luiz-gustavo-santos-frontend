import { EnvelopeSimple, Lock, User } from '@phosphor-icons/react'
import { string, z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useMutation } from '@tanstack/react-query'

import { signup } from '@/services/auth'
import { Button, Form, Input } from '@/components'

const createUserSchema = z.object({
  name: string().min(3, 'O nome deve ter no mínimo 3 letras'),
  email: string().nonempty('O email é obrigatório').email('Email inválido'),
  password: string().min(6, 'A senha deve conter no mínimo 6 caracteres')
})

type CreateUserFormData = z.infer<typeof createUserSchema>

const SignUp = () => {
  const navigate = useNavigate()
  const mutation = useMutation({ mutationFn: signup })

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<CreateUserFormData>({ resolver: zodResolver(createUserSchema) })

  const onSubmit: SubmitHandler<CreateUserFormData> = async ({
    email,
    name,
    password
  }) => {
    try {
      await mutation.mutateAsync({
        name,
        password,
        user: email
      })

      toast.success('Cadastrado com sucesso!')
      navigate('/')
    } catch (error) {
      toast.error('Ocorreu um erro ao salvar os dados')
      console.log('REGISTER', error)
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Seu nome"
        id="name"
        placeholder="Digite seu nome"
        {...register('name')}
        error={errors.name?.message}
        icon={<User weight="thin" size={24} />}
      />
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
        Cadastrar
      </Button>
    </Form>
  )
}

export default SignUp
