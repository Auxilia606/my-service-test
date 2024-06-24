import { useCallback, useEffect } from "react";

import { getLocalStorageItem, setLocalStorageItem } from "@shared/utils";

import { LocalStorageState } from "./types";

import { SetterOrUpdater } from "recoil";

export const useLocalStorage = <K extends keyof LocalStorageState>(
  target: K,
  setter: SetterOrUpdater<Required<LocalStorageState>[K]>
) => {
  const setLocalStorageValue = useCallback(
    (value: LocalStorageState[K]) => {
      setLocalStorageItem(target, value);
    },
    [target]
  );

  useEffect(() => {
    const value = getLocalStorageItem(target);

    if (!value) return;

    setter(value);
  }, [setter, target]);

  return { setLocalStorageValue };
};
