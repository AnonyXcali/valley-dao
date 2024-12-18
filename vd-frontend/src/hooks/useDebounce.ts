import { useRef, useCallback } from "react";

export function useDebounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  const timeout = useRef<number | undefined>();
  const savedFunc = useRef(func);

  // Update the ref to always store the latest function
  savedFunc.current = func;

  const debouncedFunc = useCallback(
    (...args: Parameters<T>) => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }

      timeout.current = window.setTimeout(() => {
        savedFunc.current(...args); // Use the latest function reference
      }, delay);
    },
    [delay]
  );

  return debouncedFunc;
}