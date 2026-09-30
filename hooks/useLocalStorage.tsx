"use client";

import { useCallback } from "react";

interface UseLocalStorageParams {
  key: string;
  initialValue: string;
}

export function useLocalStorage({ key, initialValue }: UseLocalStorageParams) {
  const getLocalStorage = useCallback(() => {
    if (typeof window === "undefined") return initialValue;

    const item = window.localStorage.getItem(`@slot:${key}`);
    if (item === null) {
      window.localStorage.setItem(`@slot:${key}`, initialValue);
      return initialValue;
    }

    return item;
  }, [initialValue, key]);

  const setLocalStorage = useCallback(
    (value: string) => {
      if (typeof window === "undefined") return;
      window.localStorage.setItem(`@slot:${key}`, value);
    },
    [key],
  );

  return {
    getLocalStorage,
    setLocalStorage,
  };
}
