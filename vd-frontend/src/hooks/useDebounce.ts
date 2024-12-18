import { useRef, useCallback } from "react"

/**
 * @function useDebounce
 * @returns This hook is responsible for delaying a provided
 * function with the provided delay.
 * 
 * Uses:
 * - Search component.
 */
export function useDebounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  const timeout = useRef<number | undefined>()
  const savedFunc = useRef(func)

  // Update the ref to always store the latest function
  savedFunc.current = func

  const debouncedFunc = useCallback(
    (...args: Parameters<T>) => {
      if (timeout.current) {
        clearTimeout(timeout.current)
      }

      timeout.current = window.setTimeout(() => {
        savedFunc.current(...args)
      }, delay)
    },
    [delay]
  )

  return debouncedFunc
}