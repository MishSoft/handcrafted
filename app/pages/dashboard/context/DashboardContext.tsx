"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// Dashboard-ის კონტექსტის ტიპი
interface DashboardContextType {
  isOpenDropMenu: boolean;
  setIsOpenDropMenu: (open: boolean) => void;
}

// კონტექსტი
const DashboardContext = createContext<DashboardContextType | null>(null);

// DashboardProvider - ეს უნდა იყოს იმპორტი, რომელიც გამოიყენება layout-ებში
export function DashboardProvider({ children }: { children: ReactNode }) {
  const [isOpenDropMenu, setIsOpenDropMenu] = useState(true);

  return (
    <DashboardContext.Provider value={{ isOpenDropMenu, setIsOpenDropMenu }}>
      {children}
    </DashboardContext.Provider>
  );
}

// ჰუკი კონტექსტის გამოყენებისთვის
export function useDashboardContext() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error(
      "useDashboardContext must be used within a DashboardProvider"
    );
  }
  return context;
}
