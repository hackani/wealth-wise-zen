import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Target, Home, Car, Plane, TrendingUp } from "lucide-react";
import { BudgetProgress } from "@/components/BudgetProgress";
import { Progress } from "@/components/ui/progress";

const GoalsBudget = () => {
  const savingsGoals = [
    {
      id: 1,
      title: "Emergency Fund",
      target: 50000,
      current: 32000,
      icon: Target,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      id: 2,
      title: "Dream House",
      target: 500000,
      current: 125000,
      icon: Home,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      id: 3,
      title: "New Car",
      target: 45000,
      current: 28000,
      icon: Car,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      id: 4,
      title: "Europe Tour",
      target: 15000,
      current: 8500,
      icon: Plane,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
  ];

  const monthlyBudget = {
    total: 8750,
    spent: 6234,
    categories: [
      { name: "Food & Dining", limit: 2000, spent: 1650 },
      { name: "Shopping", limit: 1500, spent: 1320 },
      { name: "Transportation", limit: 1000, spent: 780 },
      { name: "Entertainment", limit: 800, spent: 650 },
      { name: "Bills & Utilities", limit: 2000, spent: 1834 },
      { name: "Others", limit: 1450, spent: 1000 },
    ],
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Goals & Budget</h1>
            <p className="text-muted-foreground mt-2">Track your savings goals and monthly budget</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Goal
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="p-6 bg-gradient-to-br from-card to-card/50 border-primary/20">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground">Monthly Budget</p>
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <p className="text-2xl font-bold text-foreground">${monthlyBudget.total.toLocaleString()}</p>
            <Progress value={(monthlyBudget.spent / monthlyBudget.total) * 100} className="mt-3" />
            <p className="text-xs text-muted-foreground mt-2">
              ${monthlyBudget.spent.toLocaleString()} spent • $
              {(monthlyBudget.total - monthlyBudget.spent).toLocaleString()} remaining
            </p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
            <p className="text-sm text-muted-foreground">Total Goals</p>
            <p className="text-2xl font-bold text-foreground mt-2">{savingsGoals.length}</p>
            <p className="text-sm text-green-500 mt-1">3 in progress</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <p className="text-sm text-muted-foreground">Target Amount</p>
            <p className="text-2xl font-bold text-foreground mt-2">
              ${savingsGoals.reduce((sum, goal) => sum + goal.target, 0).toLocaleString()}
            </p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
            <p className="text-sm text-muted-foreground">Saved So Far</p>
            <p className="text-2xl font-bold text-foreground mt-2">
              ${savingsGoals.reduce((sum, goal) => sum + goal.current, 0).toLocaleString()}
            </p>
          </Card>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Savings Goals</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {savingsGoals.map((goal) => {
              const percentage = (goal.current / goal.target) * 100;
              const Icon = goal.icon;
              return (
                <Card key={goal.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-lg ${goal.bgColor}`}>
                        <Icon className={`w-6 h-6 ${goal.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{goal.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-primary">{percentage.toFixed(0)}%</span>
                  </div>
                  <Progress value={percentage} className="h-3" />
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>${(goal.target - goal.current).toLocaleString()} remaining</span>
                    <span>{percentage >= 100 ? "Goal achieved!" : "In progress"}</span>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        <BudgetProgress />

        <Card className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Category-wise Budget</h2>
          <div className="space-y-4">
            {monthlyBudget.categories.map((category) => {
              const percentage = (category.spent / category.limit) * 100;
              const isOverBudget = percentage > 100;
              return (
                <div key={category.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground font-medium">{category.name}</span>
                    <span className={isOverBudget ? "text-red-500" : "text-muted-foreground"}>
                      ${category.spent.toLocaleString()} / ${category.limit.toLocaleString()}
                    </span>
                  </div>
                  <Progress value={Math.min(percentage, 100)} className={isOverBudget ? "bg-red-500/20" : ""} />
                  {isOverBudget && (
                    <p className="text-xs text-red-500">Over budget by ${(category.spent - category.limit).toLocaleString()}</p>
                  )}
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default GoalsBudget;
