import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { AIInsights } from "@/components/AIInsights";
import { Sparkles, TrendingUp, AlertCircle, CheckCircle, Target, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const AIInsightsPage = () => {
  const spendingPatterns = [
    {
      insight: "Your food expenses increased by 23% this month compared to last month",
      type: "warning",
      icon: AlertCircle,
      color: "text-orange-500",
    },
    {
      insight: "You've been consistently under budget for transportation for 3 months",
      type: "success",
      icon: CheckCircle,
      color: "text-green-500",
    },
    {
      insight: "Weekend spending is 40% higher than weekday spending",
      type: "info",
      icon: TrendingUp,
      color: "text-blue-500",
    },
  ];

  const investmentRecommendations = [
    {
      title: "Diversify into Index Funds",
      description: "Consider allocating 20% of your portfolio to low-cost index funds for stable long-term growth",
      risk: "Low",
      potentialReturn: "8-12% annually",
    },
    {
      title: "Rebalance Stock Portfolio",
      description: "Your tech stocks allocation is at 65%. Consider rebalancing to reduce concentration risk",
      risk: "Medium",
      potentialReturn: "Optimize risk",
    },
    {
      title: "Gold Allocation Increase",
      description: "With current market volatility, consider increasing gold holdings to 10-15% of portfolio",
      risk: "Low",
      potentialReturn: "5-8% annually",
    },
  ];

  const savingsTips = [
    "Set up automatic transfers of $500 monthly to your emergency fund",
    "Cancel unused subscriptions - identified 3 inactive subscriptions totaling $47/month",
    "Switch to annual billing for streaming services to save $120/year",
    "Cook at home 2 more times per week to save approximately $240/month",
    "Consider refinancing your car loan - current rates 1.5% lower than your rate",
  ];

  const financialHealth = {
    score: 78,
    metrics: [
      { name: "Savings Rate", value: 85, status: "Excellent" },
      { name: "Debt Management", value: 72, status: "Good" },
      { name: "Investment Diversity", value: 68, status: "Good" },
      { name: "Budget Adherence", value: 80, status: "Excellent" },
      { name: "Emergency Fund", value: 64, status: "Fair" },
    ],
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">AI Financial Insights</h1>
          <p className="text-muted-foreground mt-2">
            Personalized recommendations powered by AI analysis of your financial data
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="p-6 bg-gradient-to-br from-primary/20 to-purple-500/20 border-primary/30">
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="w-6 h-6 text-primary" />
              <h3 className="font-semibold text-foreground">Financial Health Score</h3>
            </div>
            <p className="text-4xl font-bold text-primary mt-2">{financialHealth.score}/100</p>
            <p className="text-sm text-muted-foreground mt-1">Above average - Keep it up!</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
            <div className="flex items-center gap-3 mb-2">
              <Target className="w-6 h-6 text-green-500" />
              <h3 className="font-semibold text-foreground">Savings Potential</h3>
            </div>
            <p className="text-4xl font-bold text-green-500 mt-2">$847</p>
            <p className="text-sm text-muted-foreground mt-1">Identified monthly savings</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
            <div className="flex items-center gap-3 mb-2">
              <Lightbulb className="w-6 h-6 text-blue-500" />
              <h3 className="font-semibold text-foreground">Active Tips</h3>
            </div>
            <p className="text-4xl font-bold text-blue-500 mt-2">12</p>
            <p className="text-sm text-muted-foreground mt-1">Actionable recommendations</p>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Spending Pattern Analysis</h2>
          <div className="space-y-4">
            {spendingPatterns.map((pattern, index) => {
              const Icon = pattern.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <Icon className={`w-6 h-6 ${pattern.color} flex-shrink-0 mt-1`} />
                  <p className="text-foreground">{pattern.insight}</p>
                </div>
              );
            })}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Investment Recommendations</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {investmentRecommendations.map((recommendation, index) => (
              <div key={index} className="p-4 bg-muted/30 rounded-lg space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-foreground">{recommendation.title}</h3>
                  <Badge variant={recommendation.risk === "Low" ? "secondary" : "default"}>
                    {recommendation.risk} Risk
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{recommendation.description}</p>
                <p className="text-sm text-primary font-medium">{recommendation.potentialReturn}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Smart Savings Tips</h2>
          <div className="space-y-3">
            {savingsTips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">{index + 1}</span>
                </div>
                <p className="text-foreground">{tip}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Financial Health Breakdown</h2>
          <div className="space-y-4">
            {financialHealth.metrics.map((metric) => (
              <div key={metric.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground font-medium">{metric.name}</span>
                  <span className="text-muted-foreground">{metric.status}</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-purple-500 transition-all"
                    style={{ width: `${metric.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <AIInsights />
      </div>
    </DashboardLayout>
  );
};

export default AIInsightsPage;
