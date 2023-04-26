import { useState, useEffect } from "react";

export const useSavedTheme = (key, initialState) => {
  const [state, setState] = useState(() => {
    const savedTheme = JSON.parse(localStorage.getItem(key));
    return savedTheme ? savedTheme : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
