import { createContext } from "react";

export const appContext = createContext({
  refresh: false,
  setRefresh: () => {},
  backgroundColor: true,
  setBackgroundColor: () => {}
});

