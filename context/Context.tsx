"use client";
import { createContext, useContext, useState } from "react";

interface AppContextType {
  isOpenDropMenu: boolean;
  setIsOpenDropMenu: (e: boolean) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isOpenDropMenu, setIsOpenDropMenu] = useState(false);

  return (
    <AppContext.Provider value={{ isOpenDropMenu, setIsOpenDropMenu }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
