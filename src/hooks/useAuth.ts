import { getItemLocalStorage } from '@/utils/getItemLocalStore'

type StorageUserData = {
  id: string
  profile: string
  email: string
}

export const useAuth = () => {
  const token = getItemLocalStorage<string>('parrot:token')
  const user = getItemLocalStorage<StorageUserData>('parrot:user')

  return {
    token,
    user
  }
}
