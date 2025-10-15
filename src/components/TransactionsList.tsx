import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Coffee, Home, Car, TrendingUp } from "lucide-react";

const transactions = [
  {
    id: 1,
    category: "Shopping",
    description: "Amazon Purchase",
    amount: -125.50,
    date: "Today, 2:30 PM",
    icon: ShoppingBag,
    type: "expense",
  },
  {
    id: 2,
    category: "Food",
    description: "Starbucks Coffee",
    amount: -8.75,
    date: "Today, 10:15 AM",
    icon: Coffee,
    type: "expense",
  },
  {
    id: 3,
    category: "Investment",
    description: "Dividend Payment",
    amount: 450.00,
    date: "Yesterday",
    icon: TrendingUp,
    type: "income",
  },
  {
    id: 4,
    category: "Bills",
    description: "Rent Payment",
    amount: -1500.00,
    date: "Dec 1",
    icon: Home,
    type: "expense",
  },
  {
    id: 5,
    category: "Transport",
    description: "Uber Ride",
    amount: -25.30,
    date: "Nov 30",
    icon: Car,
    type: "expense",
  },
];

export const TransactionsList = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Recent Transactions</h3>
          <p className="text-sm text-muted-foreground">Your latest activity</p>
        </div>
        <button className="text-sm text-primary hover:underline">View All</button>
      </div>

      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <div className="p-3 rounded-lg bg-primary/10">
              <transaction.icon className="w-5 h-5 text-primary" />
            </div>

            <div className="flex-1">
              <p className="font-medium">{transaction.description}</p>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="secondary" className="text-xs">
                  {transaction.category}
                </Badge>
                <span className="text-xs text-muted-foreground">{transaction.date}</span>
              </div>
            </div>

            <div className="text-right">
              <p
                className={`font-semibold ${
                  transaction.type === "income" ? "text-success" : "text-foreground"
                }`}
              >
                {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
