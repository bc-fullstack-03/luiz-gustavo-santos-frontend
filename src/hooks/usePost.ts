import { useQuery } from '@tanstack/react-query'

import api from '@/services/api'

import { Post } from './useFeed'

const getPost = async (id?: string) => {
  const { data } = await api.get<Post>(`/post/${id}`)

  return data
}

export const usePost = (id?: string) => {
  return useQuery({
    queryKey: ['post', id],
    queryFn: () => getPost(id),
    enabled: !!id
  })
}
