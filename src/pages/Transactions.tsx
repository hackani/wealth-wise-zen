import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { TransactionsList } from "@/components/TransactionsList";
import { Button } from "@/components/ui/button";
import { Plus, Download, Upload, Filter } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Transactions = () => {
  const monthlyData = [
    { month: "Jan", income: 12000, expense: 8000 },
    { month: "Feb", income: 13500, expense: 9200 },
    { month: "Mar", income: 11800, expense: 8800 },
    { month: "Apr", income: 14200, expense: 9500 },
    { month: "May", income: 13000, expense: 9800 },
    { month: "Jun", income: 15500, expense: 10200 },
  ];

  const categoryBreakdown = [
    { category: "Food & Dining", amount: 2450, percentage: 28 },
    { category: "Shopping", amount: 1820, percentage: 21 },
    { category: "Transportation", amount: 1250, percentage: 14 },
    { category: "Entertainment", amount: 980, percentage: 11 },
    { category: "Bills & Utilities", amount: 1560, percentage: 18 },
    { category: "Others", amount: 690, percentage: 8 },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Transactions</h1>
            <p className="text-muted-foreground mt-2">Track and manage your financial transactions</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Upload className="w-4 h-4 mr-2" />
              Import
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Transaction
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="p-6 bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
            <p className="text-sm text-muted-foreground">Total Income</p>
            <p className="text-3xl font-bold text-green-500 mt-2">$80,000</p>
            <p className="text-sm text-muted-foreground mt-1">This year</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-red-500/10 to-red-500/5 border-red-500/20">
            <p className="text-sm text-muted-foreground">Total Expenses</p>
            <p className="text-3xl font-bold text-red-500 mt-2">$55,500</p>
            <p className="text-sm text-muted-foreground mt-1">This year</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <p className="text-sm text-muted-foreground">Net Savings</p>
            <p className="text-3xl font-bold text-primary mt-2">$24,500</p>
            <p className="text-sm text-muted-foreground mt-1">This year</p>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Income vs Expenses</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar dataKey="income" fill="#10b981" name="Income" radius={[8, 8, 0, 0]} />
              <Bar dataKey="expense" fill="#ef4444" name="Expenses" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Category Breakdown</h2>
            <div className="space-y-4">
              {categoryBreakdown.map((item) => (
                <div key={item.category} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground">{item.category}</span>
                    <span className="text-muted-foreground">${item.amount.toLocaleString()}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-purple-500 transition-all"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <TransactionsList />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Transactions;
