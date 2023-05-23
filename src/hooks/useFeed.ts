import { useQuery } from '@tanstack/react-query'

import api from '@/services/api'
import { Comment } from './useComments'
export interface Post {
  id: string
  content: string
  image: string
  userId: string
  userName: string
  comments: Comment[]
  likes: number
  createdAt: Date
  updateAt: Date
}

type GetPostResponse = {
  content: Post[]
  pageNumber: number
  pageSize: number
  totalPages: number
  totalElements: number
}

export const fetchFeed = async (page = 1) => {
  const { data } = await api.get<GetPostResponse>('/post', {
    params: {
      page
    }
  })

  return data
}

export const useFeed = (page = 1) => {
  return useQuery({
    queryKey: ['feed', page],
    queryFn: () => fetchFeed(page)
  })
}
