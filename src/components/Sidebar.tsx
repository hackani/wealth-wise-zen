import { LayoutDashboard, TrendingUp, Wallet, Target, Lightbulb, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: TrendingUp, label: "Investments", path: "/investments" },
  { icon: Wallet, label: "Transactions", path: "/transactions" },
  { icon: Target, label: "Goals & Budget", path: "/goals-budget" },
  { icon: Lightbulb, label: "AI Insights", path: "/ai-insights" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-sidebar-border flex flex-col overflow-y-auto z-50">
      <div className="p-6 border-b border-sidebar-border">
        <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          FinanceHub
        </h1>
        <p className="text-xs text-sidebar-foreground/60 mt-1">Wealth Management</p>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                isActive
                  ? "bg-sidebar-accent text-sidebar-primary shadow-glow"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50"
              )
            }
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <div className="bg-gradient-primary rounded-lg p-4 text-white">
          <p className="text-sm font-semibold mb-1">Upgrade to Pro</p>
          <p className="text-xs opacity-90 mb-3">Unlock advanced analytics</p>
          <button className="w-full bg-white/20 hover:bg-white/30 rounded px-3 py-2 text-xs font-medium transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </aside>
  );
};
