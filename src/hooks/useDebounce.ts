import { useEffect, useState } from 'react'

export const useDebounce = (value: string, delay = 500) => {
  const [debouncedValue, setDebouncedVaule] = useState(value)

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedVaule(value)
    }, delay)

    return () => {
      clearTimeout(id)
    }
  }, [value, delay])

  return debouncedValue
}
