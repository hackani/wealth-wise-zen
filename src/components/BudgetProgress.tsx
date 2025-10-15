import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const budgets = [
  { category: "Food & Dining", spent: 850, limit: 1000, color: "hsl(250 70% 60%)" },
  { category: "Shopping", spent: 1200, limit: 1500, color: "hsl(280 70% 65%)" },
  { category: "Transportation", spent: 280, limit: 500, color: "hsl(142 76% 36%)" },
  { category: "Entertainment", spent: 450, limit: 600, color: "hsl(38 92% 50%)" },
];

export const BudgetProgress = () => {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Monthly Budget</h3>
        <p className="text-sm text-muted-foreground">Track your spending limits</p>
      </div>

      <div className="space-y-6">
        {budgets.map((budget) => {
          const percentage = (budget.spent / budget.limit) * 100;
          const isOverBudget = percentage > 100;

          return (
            <div key={budget.category}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">{budget.category}</span>
                <span className="text-sm text-muted-foreground">
                  ${budget.spent} / ${budget.limit}
                </span>
              </div>
              <Progress
                value={Math.min(percentage, 100)}
                className="h-2"
                style={
                  {
                    "--progress-color": isOverBudget ? "hsl(var(--destructive))" : budget.color,
                  } as React.CSSProperties
                }
              />
              {isOverBudget && (
                <p className="text-xs text-destructive mt-1">
                  Over budget by ${budget.spent - budget.limit}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-6 border-t">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Total Spent</span>
          <span className="text-lg font-bold">$2,780</span>
        </div>
        <div className="flex items-center justify-between mt-2 text-muted-foreground">
          <span className="text-xs">of $3,600 monthly budget</span>
          <span className="text-xs">77% used</span>
        </div>
      </div>
    </Card>
  );
};
