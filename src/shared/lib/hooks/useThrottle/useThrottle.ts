import { useCallback, useRef } from 'react'

export const useThrottle = (callback: (...args: any[]) => void, ms: number) => {
  const throttleRef = useRef(false)

  return useCallback(
    (...args) => {
      if (!throttleRef.current) {
        callback(...args)
        throttleRef.current = true

        setTimeout(() => {
          throttleRef.current = false
        }, ms)
      }
    },
    [callback, ms]
  )
}
