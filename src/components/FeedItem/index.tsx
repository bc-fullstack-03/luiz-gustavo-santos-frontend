import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Chat, Heart, Trash, UserCircle } from '@phosphor-icons/react'
import { formatDistance } from 'date-fns'
import ptBrLoacale from 'date-fns/locale/pt-BR'

import { useAuth } from '@/hooks'
import { Post } from '@/hooks/useFeed'

import * as S from './styles'
import { ModalConfirmation } from '..'
import { useMutation } from '@tanstack/react-query'
import api from '@/services/api'
import { toast } from 'react-hot-toast'
import { queryClient } from '@/libs/react-query'

type FeedItemProps = {
  post: Post
}

export const FeedItem: React.FC<FeedItemProps> = ({ post }) => {
  const [liked, setLiked] = useState(true)
  const { userId } = useAuth()

  const mutation = useMutation({
    mutationFn: (postId: string) => api.delete(`/post/${postId}`)
  })

  const handleDelte = (postId: string) => {
    mutation.mutate(postId, {
      onSuccess: () => {
        toast.success('Post deletado')
        queryClient.invalidateQueries({ queryKey: ['feed'] })
      }
    })
  }

  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <S.BoxName>
            <UserCircle weight="thin" size={40} />
            <div>
              <h3>{post.userName}</h3>
              <time>
                {formatDistance(new Date(post.createdAt), new Date(), {
                  addSuffix: true,
                  locale: ptBrLoacale
                })}
              </time>
            </div>
          </S.BoxName>

          {userId === post.userId && (
            <ModalConfirmation
              title="Deseja deletar esse post?"
              description="Essa é uma ação que não poderá se desfeita."
              triggerButton={<Trash size={24} weight="thin" />}
              onConfirm={() => handleDelte(post.id)}
            />
          )}
        </S.Header>
        <S.Body>
          <p>{post.content}</p>
          {post.image && <S.Image src={post.image} alt="Imagem" />}
        </S.Body>
        <S.Footer>
          <Link to={`/app/post/${post.id}`}>
            <S.WrapperIcon>
              <Chat weight="thin" size={24} />
              {post.comments.length}
            </S.WrapperIcon>
          </Link>

          <S.WrapperIcon
            isLiked={liked}
            onClick={() => setLiked((prev) => !prev)}
          >
            <Heart weight={liked ? 'fill' : 'thin'} size={24} />
            {post.likes}
          </S.WrapperIcon>
        </S.Footer>
      </S.Container>
    </S.Wrapper>
  )
}
