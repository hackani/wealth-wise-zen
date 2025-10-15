import { DashboardLayout } from "@/components/DashboardLayout";
import { PortfolioCard } from "@/components/PortfolioCard";
import { PortfolioChart } from "@/components/PortfolioChart";
import { InvestmentBreakdown } from "@/components/InvestmentBreakdown";
import { TransactionsList } from "@/components/TransactionsList";
import { BudgetProgress } from "@/components/BudgetProgress";
import { AIInsights } from "@/components/AIInsights";
import { Wallet, TrendingUp, Target, DollarSign } from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's your financial overview
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <PortfolioCard
            title="Total Portfolio"
            value="$78,450"
            change={12.5}
            changeValue="$8,720"
            icon={<Wallet className="w-6 h-6 text-white" />}
            gradient
          />
          <PortfolioCard
            title="Today's Change"
            value="$1,234"
            change={2.8}
            changeValue="$342"
            icon={<TrendingUp className="w-6 h-6 text-primary" />}
          />
          <PortfolioCard
            title="Monthly Savings"
            value="$4,200"
            change={15.3}
            changeValue="$560"
            icon={<Target className="w-6 h-6 text-primary" />}
          />
          <PortfolioCard
            title="Available Balance"
            value="$12,340"
            change={-3.2}
            changeValue="-$420"
            icon={<DollarSign className="w-6 h-6 text-primary" />}
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PortfolioChart />
          <InvestmentBreakdown />
        </div>

        {/* Transactions and Budget Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TransactionsList />
          </div>
          <BudgetProgress />
        </div>

        {/* AI Insights */}
        <AIInsights />
      </div>
    </DashboardLayout>
  );
};

export default Index;
