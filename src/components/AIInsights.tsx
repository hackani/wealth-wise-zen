import { Card } from "@/components/ui/card";
import { Lightbulb, TrendingUp, AlertCircle, Target } from "lucide-react";

const insights = [
  {
    icon: Lightbulb,
    type: "Tip",
    title: "Save more on dining",
    description: "You spent 15% more on dining this month. Consider meal prepping to save $150/month.",
    color: "text-warning",
    bg: "bg-warning/10",
  },
  {
    icon: TrendingUp,
    type: "Opportunity",
    title: "Investment opportunity",
    description: "Your portfolio is heavily weighted in stocks. Consider diversifying with 10% in bonds.",
    color: "text-success",
    bg: "bg-success/10",
  },
  {
    icon: AlertCircle,
    type: "Alert",
    title: "Budget warning",
    description: "You're approaching your shopping budget limit. $300 remaining for this month.",
    color: "text-destructive",
    bg: "bg-destructive/10",
  },
  {
    icon: Target,
    type: "Goal",
    title: "On track for savings",
    description: "Great job! You're 85% toward your monthly savings goal of $2,000.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

export const AIInsights = () => {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">AI Financial Insights</h3>
        <p className="text-sm text-muted-foreground">Personalized tips and recommendations</p>
      </div>

      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="flex gap-4 p-4 rounded-lg border border-border hover:shadow-md transition-all"
          >
            <div className={`p-3 rounded-lg ${insight.bg}`}>
              <insight.icon className={`w-5 h-5 ${insight.color}`} />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-xs font-semibold uppercase ${insight.color}`}>
                  {insight.type}
                </span>
              </div>
              <h4 className="font-semibold mb-1">{insight.title}</h4>
              <p className="text-sm text-muted-foreground">{insight.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
