import { createContext } from "react";

export const appContext = createContext({
  refresh: false,
  setRefresh: () => {},
});
