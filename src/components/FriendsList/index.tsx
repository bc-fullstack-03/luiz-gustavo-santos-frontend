import { UserCircle } from '@phosphor-icons/react'
import * as S from './styles'
import { Button } from '..'
import { useMutation, useQuery } from '@tanstack/react-query'
import api from '@/services/api'
import { useAuth } from '@/hooks'
import { toast } from 'react-hot-toast'
import { queryClient } from '@/libs/react-query'
import { Link } from 'react-router-dom'

export type User = {
  id: string
  name: string
  email: string
  photoUrl: null
  followers: string[]
  following: string[]
}

export const FriendsList = () => {
  const { userId } = useAuth()

  const { data: users } = useQuery({
    queryKey: ['users'],
    queryFn: () => {
      return api.get<User[]>('/user/all')
    }
  })

  const followMutation = useMutation({
    mutationFn: (userId: string) => {
      return api.post(`/user/follow/${userId}`)
    }
  })

  const unFollowMutation = useMutation({
    mutationFn: (userId: string) => {
      return api.delete(`/user/unfollow/${userId}`)
    }
  })

  const handleFollow = (userId: string) => {
    followMutation.mutate(userId, {
      onSuccess: () => {
        toast.success('Seguindo')
        queryClient.invalidateQueries({ queryKey: ['users'] })
      }
    })
  }

  const handleUnFollow = (userId: string) => {
    unFollowMutation.mutate(userId, {
      onSuccess: () => {
        toast.success('Deixou de seguir')
        queryClient.invalidateQueries({ queryKey: ['users'] })
      }
    })
  }

  const checkIfUserIsFollowing = (user: User) => {
    if (userId) {
      return user.followers.includes(userId)
    }

    return false
  }

  return (
    <S.Wrapper>
      {users?.data
        .filter((item) => item.id !== userId)
        .map((user) => (
          <li key={user.id}>
            <S.Content>
              <S.Header>
                <UserCircle size={38} weight="thin" />
                <Link to={`/app/profile?user=${user.id}`}>
                  <strong>{user.name}</strong>
                </Link>
              </S.Header>
              <S.Followers>
                <span>{user.followers.length ?? 0} seguidores</span>
                <span>Seguindo {user.following.length ?? 0}</span>
              </S.Followers>
              <Button
                style={{ height: '4rem' }}
                disabled={
                  followMutation.isLoading || unFollowMutation.isLoading
                }
                onClick={() => {
                  if (checkIfUserIsFollowing(user)) {
                    handleUnFollow(user.id)
                  } else {
                    handleFollow(user.id)
                  }
                }}
              >
                {checkIfUserIsFollowing(user) ? 'Deixar de seguir' : 'Seguir'}
              </Button>
            </S.Content>
          </li>
        ))}
    </S.Wrapper>
  )
}
