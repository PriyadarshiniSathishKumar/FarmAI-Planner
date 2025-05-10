
import React from "react";
import { Leaf, Sprout } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-50 text-stone-900 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <Leaf className="h-5 w-5 mr-2 text-earth-500" />
              <span className="font-bold">FarmAI Planner</span>
            </div>
            <p className="text-sm text-stone-600 mt-1">
              Sustainable farming planning for everyone
            </p>
          </div>
          
          <div className="flex items-center">
            <div className="flex items-center text-sm text-stone-600 mr-6">
              <Sprout className="h-4 w-4 mr-1 text-earth-500" />
              <span>SDG 2: Zero Hunger</span>
            </div>
            <div className="flex items-center text-sm text-stone-600">
              <Sprout className="h-4 w-4 mr-1 text-earth-500" />
              <span>SDG 13: Climate Action</span>
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-stone-200 text-center text-xs text-stone-500">
          &copy; {new Date().getFullYear()} FarmAI Planner. All rights reserved.
          <div className="mt-1">
            Making agriculture planning accessible, sustainable, and fun for all.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
