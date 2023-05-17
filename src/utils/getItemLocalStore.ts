export function getItemLocalStorage<T>(key: string): T | null {
  const localStorageData = localStorage.getItem(key)

  if (!localStorageData) {
    return null
  }

  if (typeof localStorageData === 'string') {
    return localStorageData as T
  }

  return JSON.parse(localStorageData) as T
}
