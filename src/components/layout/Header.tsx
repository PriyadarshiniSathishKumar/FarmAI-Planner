
import React from "react";
import { Leaf, CloudRain, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-earth-500 text-white shadow-md">
      <div className="container mx-auto py-4 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Leaf className="h-8 w-8 mr-2" />
            <Link to="/" className="text-2xl font-bold handwriting tracking-wider">
              FarmAI Planner
            </Link>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="flex items-center bg-earth-600/50 rounded-full px-3 py-1 text-sm">
              <CloudRain className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Weather:</span> Mostly Sunny
            </div>
            <div className="flex items-center bg-earth-600/50 rounded-full px-3 py-1 text-sm">
              <Sun className="h-4 w-4 mr-1" />
              <span>Ideal Planting Day</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
