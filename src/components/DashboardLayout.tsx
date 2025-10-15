import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen w-full bg-background">
      <Sidebar />
      <main className="ml-64 min-h-screen overflow-auto">
        <div className="container mx-auto p-6 space-y-6 animate-fade-in">
          {children}
        </div>
      </main>
    </div>
  );
};
