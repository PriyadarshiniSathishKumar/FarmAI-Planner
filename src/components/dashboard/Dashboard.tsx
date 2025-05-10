
import React from "react";
import FarmMap from "./FarmMap";
import CropRecommendations from "./CropRecommendations";
import CalendarView from "./CalendarView";
import SustainabilityMetrics from "./SustainabilityMetrics";

interface DashboardProps {
  className?: string;
}

const Dashboard: React.FC<DashboardProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FarmMap />
        <CropRecommendations />
        <CalendarView />
        <SustainabilityMetrics />
      </div>
    </div>
  );
};

export default Dashboard;
