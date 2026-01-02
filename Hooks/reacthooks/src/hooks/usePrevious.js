import { useDebugValue, useEffect, useRef } from "react";

function usePrevious(value) {
  const ref = useRef;

  useDebugValue("--- CUSTOM HOOK E USEDEBUGVALUE ---")
  useDebugValue("O número anterior é: " + value)

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}

export { usePrevious };
