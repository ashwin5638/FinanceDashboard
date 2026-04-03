import { useFinance } from "../Context/financeContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import "./index.css";

const FinanceChart = () => {
  const { state } = useFinance();

  const data = state.transactions.filter(
    (item) => item.type === "Expense"
  );

  return (
    <div className="card spending-breakdown">
      <h2 className="breakdown-title">Spending Breakdown</h2>

      {data.length > 0 ? (
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={data} margin={{ top: 8, right: 16, left: -8, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(148, 163, 184, 0.15)" />
              <XAxis
                dataKey="category"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 12 }}
              />
              <Tooltip
                cursor={{ fill: "rgba(99, 102, 241, 0.1)" }}
                contentStyle={{
                  background: "rgba(15, 23, 42, 0.95)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "10px"
                }}
                labelStyle={{ color: "#f8fafc", fontWeight: 600 }}
              />
              <Bar dataKey="amount" fill="#6366f1" radius={[8, 8, 0, 0]} maxBarSize={44} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <p className="chart-empty-state">
          No expense data available.
        </p>
      )}
    </div>
  );
};

export default FinanceChart;