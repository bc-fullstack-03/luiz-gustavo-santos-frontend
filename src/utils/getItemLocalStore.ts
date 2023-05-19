export function getItemLocalStorage(key: string): string | null {
  const localStorageData = localStorage.getItem(key)

  if (!localStorageData) {
    return null
  }

  return localStorageData
}
