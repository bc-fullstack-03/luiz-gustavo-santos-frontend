import { useQuery } from '@tanstack/react-query'

import api from '@/services/api'

export interface Profile {
  _id: string
  name: string
  user: string
}

export interface Post {
  _id: string
  title: string
  description: string
  profile: Profile
  comments: string[]
  likes: string[]
  image: boolean
  createdAt: Date
  updateAt: Date
}

export const fetchFeed = async () => {
  const { data } = await api.get<Post[]>('/feed')

  return data
}

export const useFeed = () => {
  return useQuery({
    queryKey: ['feed'],
    queryFn: () => fetchFeed()
  })
}
