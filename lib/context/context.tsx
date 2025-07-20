"use client";

import { createContext, useContext, useState } from "react";

type AppContextType = {
  context: string | null;
  setContext: (context: string | null) => void;
};

const AppContext = createContext<AppContextType>({
  context: null,
  setContext: () => {},
});

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [context, setContext] = useState<string | null>(null);

  return (
    <AppContext.Provider value={{ context, setContext }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
