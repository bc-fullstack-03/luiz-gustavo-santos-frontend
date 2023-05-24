import { PaperPlaneRight, TrashSimple, UserCircle } from '@phosphor-icons/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { useComments } from '@/hooks/useComments'

import { Form, Input } from '..'

import * as S from './styles'
import { useMutation } from '@tanstack/react-query'
import api from '@/services/api'
import { queryClient } from '@/libs/react-query'
import { useAuth } from '@/hooks'

type CommentsProps = {
  postId: string
}

const commentSchema = z.object({
  comment: z.string().nonempty()
})

type CommentFormData = z.infer<typeof commentSchema>
type Variables = {
  comment: string
  postId: string
}

export const Comments: React.FC<CommentsProps> = ({ postId }) => {
  const { userId } = useAuth()
  const { data } = useComments(postId)

  const { handleSubmit, register, setValue } = useForm<CommentFormData>({
    resolver: zodResolver(commentSchema)
  })

  const crateCommentMutation = useMutation({
    mutationFn: (variables: Variables) => {
      return api.post('/post/comment', variables)
    }
  })

  const deleteCommentMutation = useMutation({
    mutationFn: (commentId: string) => {
      return api.delete(`/post/comment/${commentId}`, {
        data: {
          postId
        }
      })
    }
  })

  const onSubmit: SubmitHandler<CommentFormData> = async ({ comment }) => {
    crateCommentMutation.mutate(
      {
        comment,
        postId
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['comments', postId] })
          queryClient.invalidateQueries({ queryKey: ['post', postId] })

          setValue('comment', '')
        }
      }
    )
  }

  const handleDelteComment = (commentId: string) => {
    deleteCommentMutation.mutate(commentId, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['comments', postId] })
        queryClient.invalidateQueries({ queryKey: ['post', postId] })
      }
    })
  }

  return (
    <S.Wrapper>
      <div>
        <h3>Comentários</h3>
        {!data?.length && <p>Seja o primeiro a comentar</p>}
      </div>

      <S.CommentsList>
        {data?.map(({ comment }) => (
          <li key={comment.id}>
            <UserCircle size={24} weight="fill" />
            <S.Comment>
              <div>
                <strong>{comment.username}</strong>
                {userId === comment.userId && (
                  <TrashSimple
                    size={18}
                    weight="thin"
                    onClick={() => handleDelteComment(comment.id)}
                  />
                )}
              </div>

              <p>{comment.content}</p>
            </S.Comment>
          </li>
        ))}
      </S.CommentsList>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <S.FormContent>
          <Input
            id="comment"
            placeholder="Digite seu comentário"
            {...register('comment')}
          />
          <S.Button>
            <PaperPlaneRight size={48} weight="thin" />
          </S.Button>
        </S.FormContent>
      </Form>
    </S.Wrapper>
  )
}
