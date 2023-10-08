import { createContext } from "react";

export const appContext = createContext({
  refresh: false,
  setRefresh: () => {},
  mode: true,
  setMode: () => {}
});

