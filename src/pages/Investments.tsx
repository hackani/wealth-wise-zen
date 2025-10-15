import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, PieChart } from "lucide-react";
import { PortfolioChart } from "@/components/PortfolioChart";
import { InvestmentBreakdown } from "@/components/InvestmentBreakdown";

const Investments = () => {
  const investments = [
    {
      name: "Tech Stocks",
      type: "Stocks",
      value: 45000,
      change: 12.5,
      changeAmount: 5000,
      color: "text-blue-500",
    },
    {
      name: "Crypto Portfolio",
      type: "Cryptocurrency",
      value: 28000,
      change: -5.2,
      changeAmount: -1500,
      color: "text-orange-500",
    },
    {
      name: "Gold Holdings",
      type: "Commodities",
      value: 15000,
      change: 3.8,
      changeAmount: 550,
      color: "text-yellow-500",
    },
    {
      name: "Real Estate Fund",
      type: "Real Estate",
      value: 85000,
      change: 8.2,
      changeAmount: 6450,
      color: "text-green-500",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Investment Portfolio</h1>
          <p className="text-muted-foreground mt-2">Track your investments and real-time profit & loss</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="p-6 bg-gradient-to-br from-card to-card/50 border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Investment</p>
                <p className="text-2xl font-bold text-foreground mt-1">$173,000</p>
              </div>
              <DollarSign className="w-8 h-8 text-primary" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-card to-card/50 border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total P&L</p>
                <p className="text-2xl font-bold text-green-500 mt-1">+$10,500</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-card to-card/50 border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Today's Change</p>
                <p className="text-2xl font-bold text-green-500 mt-1">+2.8%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-card to-card/50 border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Assets</p>
                <p className="text-2xl font-bold text-foreground mt-1">4</p>
              </div>
              <PieChart className="w-8 h-8 text-primary" />
            </div>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <PortfolioChart />
          <InvestmentBreakdown />
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Your Investments</h2>
          <div className="space-y-4">
            {investments.map((investment) => (
              <div
                key={investment.name}
                className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{investment.name}</h3>
                  <p className="text-sm text-muted-foreground">{investment.type}</p>
                </div>
                <div className="text-right mr-8">
                  <p className="font-bold text-foreground">${investment.value.toLocaleString()}</p>
                  <div className="flex items-center gap-1 text-sm">
                    {investment.change > 0 ? (
                      <>
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span className="text-green-500">+{investment.change}%</span>
                      </>
                    ) : (
                      <>
                        <TrendingDown className="w-4 h-4 text-red-500" />
                        <span className="text-red-500">{investment.change}%</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <p className={investment.change > 0 ? "text-green-500 font-semibold" : "text-red-500 font-semibold"}>
                    {investment.change > 0 ? "+" : ""}${Math.abs(investment.changeAmount).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Investments;
