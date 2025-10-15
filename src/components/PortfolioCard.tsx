import { TrendingUp, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  title: string;
  value: string;
  change: number;
  changeValue: string;
  icon: React.ReactNode;
  gradient?: boolean;
}

export const PortfolioCard = ({
  title,
  value,
  change,
  changeValue,
  icon,
  gradient = false,
}: PortfolioCardProps) => {
  const isPositive = change >= 0;

  return (
    <Card
      className={cn(
        "p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        gradient && "bg-gradient-primary text-white border-0"
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={cn("p-3 rounded-lg", gradient ? "bg-white/20" : "bg-primary/10")}>
          {icon}
        </div>
      </div>

      <h3 className={cn("text-sm font-medium mb-2", gradient ? "text-white/80" : "text-muted-foreground")}>
        {title}
      </h3>
      
      <div className="space-y-2">
        <p className="text-3xl font-bold">{value}</p>
        
        <div className="flex items-center gap-2">
          {isPositive ? (
            <TrendingUp className="w-4 h-4 text-success" />
          ) : (
            <TrendingDown className="w-4 h-4 text-destructive" />
          )}
          <span
            className={cn(
              "text-sm font-semibold",
              isPositive ? "text-success" : "text-destructive",
              gradient && "text-white"
            )}
          >
            {isPositive ? "+" : ""}{change}% ({changeValue})
          </span>
        </div>
      </div>
    </Card>
  );
};
