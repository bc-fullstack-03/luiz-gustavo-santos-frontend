import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useMutation, useQuery } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'react-hot-toast'
import { queryClient } from '@/libs/react-query'

import placeholderImage from '@/assets/images/placeholder.jpg'
import api from '@/services/api'
import { useAuth } from '@/hooks'
import { User } from '@/components/FriendsList'

import { Button, Container, Form, Header, Input } from '@/components'

import * as S from './styles'

const updateUserSchema = z.object({
  name: z.string().min(3, 'O nome deve ter no mínimo 3 letras'),
  password: z.string().optional().nullable()
})

type UpdateUserFormData = z.infer<typeof updateUserSchema>

const Profile = () => {
  const { userId: userLoggedId } = useAuth()
  const [searchParams] = useSearchParams()
  const searchParamUser = searchParams.get('user')

  const { data: user, isLoading } = useQuery({
    queryKey: ['user', searchParamUser],
    queryFn: () => api.get<User>(`/user/${searchParamUser}`),
    enabled: !!searchParamUser
  })

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors }
  } = useForm<UpdateUserFormData>({
    resolver: zodResolver(updateUserSchema)
  })

  const mutation = useMutation({
    mutationFn: (formData: UpdateUserFormData) =>
      api.put(`/user/${user?.data.id}`, formData)
  })

  const onSubmit: SubmitHandler<UpdateUserFormData> = (data) => {
    mutation.mutate(
      { name: data.name, password: data.password || null },
      {
        onSuccess: () => {
          toast.success('Dados atualizados com sucessos')
          queryClient.invalidateQueries({ queryKey: ['user'] })
        },
        onError: () => {
          toast.error('Ocorreru um erro ao atualizar os dados')
        }
      }
    )
  }

  useEffect(() => {
    if (user?.data) {
      setValue('name', user?.data.name)
      setValue('password', '')
    }
  }, [setValue, user?.data])

  if (isLoading) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <Header title="Perfil" />
      <Container>
        <S.Container>
          <S.InfoContainer>
            <S.PhotoContainer src={placeholderImage} alt="Usuario" />

            <div>
              <strong>{user?.data.name}</strong>
              <span>{user?.data.email}</span>
            </div>

            <S.Followers>
              <div>
                <span>Seguidores: {user?.data.followers.length}</span>
              </div>
              <div>
                <span>Seguindo: {user?.data.following.length}</span>
              </div>
            </S.Followers>
          </S.InfoContainer>

          <S.FormContaier visibilitHidden={userLoggedId !== user?.data.id}>
            <h3>Atualizar dados</h3>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <Input
                id="name"
                label="Nome"
                placeholder="Seu nome aqui"
                {...register('name')}
                error={errors.name?.message}
              />
              <Input
                id="name"
                label="Senha"
                placeholder="******"
                {...register('password')}
                error={errors.password?.message}
              />
              <Button style={{ marginTop: '1.6rem' }}>Salvar</Button>
            </Form>
          </S.FormContaier>
        </S.Container>
      </Container>
    </>
  )
}

export default Profile
