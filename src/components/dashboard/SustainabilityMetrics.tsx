
import React from "react";
import { LineChart, SeedingIcon, Sprout, CloudRain } from "lucide-react";
import FarmCard from "../ui/FarmCard";
import { 
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

interface SustainabilityMetricsProps {
  className?: string;
}

// Mock data for charts
const carbonData = [
  { month: "Jan", carbon: 10 },
  { month: "Feb", carbon: 8 },
  { month: "Mar", carbon: 15 },
  { month: "Apr", carbon: 20 },
  { month: "May", carbon: 18 },
  { month: "Jun", carbon: 25 },
];

const yieldData = [
  { name: "Tomatoes", value: 30, color: "#FE8522" },
  { name: "Carrots", value: 15, color: "#F59E0B" },
  { name: "Beans", value: 25, color: "#84CC16" },
  { name: "Spinach", value: 20, color: "#10B981" },
  { name: "Other", value: 10, color: "#3B82F6" },
];

const COLORS = ["#FE8522", "#F59E0B", "#84CC16", "#10B981", "#3B82F6"];

const SustainabilityMetrics: React.FC<SustainabilityMetricsProps> = ({ className }) => {
  return (
    <FarmCard 
      title="Sustainability Metrics" 
      icon={<LineChart className="h-5 w-5" />}
      className={className}
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <div className="bg-earth-50 rounded-lg p-4 flex items-center shadow-sm">
            <div className="h-12 w-12 bg-earth-100 rounded-full flex items-center justify-center mr-4">
              <SeedingIcon className="h-6 w-6 text-earth-700" />
            </div>
            <div>
              <div className="text-sm text-stone-600">Climate Score</div>
              <div className="text-xl font-semibold">85 / 100</div>
            </div>
          </div>
          
          <div className="bg-stone-50 rounded-lg p-4 flex items-center shadow-sm">
            <div className="h-12 w-12 bg-soil-100 rounded-full flex items-center justify-center mr-4">
              <Sprout className="h-6 w-6 text-soil-700" />
            </div>
            <div>
              <div className="text-sm text-stone-600">Crop Diversity</div>
              <div className="text-xl font-semibold">7 Species</div>
            </div>
          </div>
          
          <div className="bg-clay-50 rounded-lg p-4 flex items-center shadow-sm">
            <div className="h-12 w-12 bg-clay-100 rounded-full flex items-center justify-center mr-4">
              <CloudRain className="h-6 w-6 text-clay-700" />
            </div>
            <div>
              <div className="text-sm text-stone-600">Water Efficiency</div>
              <div className="text-xl font-semibold">78%</div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-stone-700 mb-2">Carbon Reduction (KG)</h4>
            <div className="h-64 bg-white rounded-lg p-4 border border-stone-100 shadow-sm">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart
                  data={carbonData}
                  margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="carbon" 
                    stroke="#84CC16" 
                    activeDot={{ r: 8 }} 
                  />
                </RechartsLineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-stone-700 mb-2">Estimated Yield</h4>
            <div className="h-64 bg-white rounded-lg p-4 border border-stone-100 shadow-sm">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={yieldData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {yieldData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </FarmCard>
  );
};

export default SustainabilityMetrics;
