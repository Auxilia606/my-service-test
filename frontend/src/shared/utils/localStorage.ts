import { LocalStorageState } from "@shared/hooks/types";

export const getLocalStorageItem = <K extends keyof LocalStorageState>(
  key: K
): LocalStorageState[K] => {
  const rawValue = localStorage.getItem(key);

  if (!rawValue) return;

  return JSON.parse(rawValue);
};

export const setLocalStorageItem = <K extends keyof LocalStorageState>(
  key: K,
  value: LocalStorageState[K]
) => {
  if (value === undefined) return;

  localStorage.setItem(key, JSON.stringify(value));
};
