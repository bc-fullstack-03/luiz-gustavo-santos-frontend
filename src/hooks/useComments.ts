import { useQuery } from '@tanstack/react-query'

import api from '@/services/api'

export type Comment = {
  id: string
  content: string
  userId: string
  username: string
  createdAt: string
  updatedAt: string
}

type GetCommentsResponse = {
  comment: Comment
}

const getComments = async (postId: string) => {
  const { data } = await api.get<GetCommentsResponse[]>('/post/comment', {
    params: {
      postId
    }
  })

  return data
}

export const useComments = (postId: string) => {
  return useQuery({
    queryKey: ['comments', postId],
    queryFn: () => getComments(postId)
  })
}
