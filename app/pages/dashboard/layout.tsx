import React from "react";
import { DashboardProvider } from "./context/DashboardContext";
import Header from "./components/Header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DashboardProvider>
      <Header />
      {children}
    </DashboardProvider>
  );
}
