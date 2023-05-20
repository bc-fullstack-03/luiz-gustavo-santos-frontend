import { getItemLocalStorage } from '@/utils/getItemLocalStore'

export const useAuth = () => {
  const token = getItemLocalStorage('parrot:token')
  const userId = getItemLocalStorage('parrot:userId')

  return {
    token,
    userId
  }
}
