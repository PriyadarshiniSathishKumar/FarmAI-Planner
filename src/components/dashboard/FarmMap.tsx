
import React, { useState } from "react";
import { Map, Layers, Plant } from "lucide-react";
import FarmCard from "../ui/FarmCard";
import { Crop, FarmPlot } from "@/types";
import { Button } from "@/components/ui/button";
import { getCropById, crops } from "@/data/crops";

interface FarmMapProps {
  className?: string;
}

const FarmMap: React.FC<FarmMapProps> = ({ className }) => {
  const [selectedCrop, setSelectedCrop] = useState<Crop | null>(null);
  const [farmLayout, setFarmLayout] = useState<FarmPlot[]>([
    { id: "plot-1", cropId: "tomato", x: 0, y: 0, width: 2, height: 2 },
    { id: "plot-2", cropId: "carrot", x: 2, y: 0, width: 2, height: 1 },
    { id: "plot-3", cropId: "basil", x: 2, y: 1, width: 1, height: 1 },
    { id: "plot-4", cropId: "marigold", x: 3, y: 1, width: 1, height: 1 },
    { id: "plot-5", cropId: "beans", x: 0, y: 2, width: 2, height: 2 },
    { id: "plot-6", cropId: "cucumber", x: 2, y: 2, width: 2, height: 2 },
  ]);

  const getCropColor = (cropId: string | null): string => {
    if (!cropId) return "bg-stone-200";
    
    const crop = getCropById(cropId);
    if (!crop) return "bg-stone-200";
    
    switch (crop.category) {
      case "vegetable":
        return "bg-earth-300";
      case "fruit":
        return "bg-clay-200";
      case "grain":
        return "bg-soil-200";
      case "legume":
        return "bg-stone-200";
      case "herb":
        return "bg-earth-200";
      case "flower":
        return "bg-clay-100";
      default:
        return "bg-stone-200";
    }
  };
  
  const handlePlotClick = (plot: FarmPlot) => {
    if (plot.cropId) {
      const crop = getCropById(plot.cropId);
      setSelectedCrop(crop || null);
    } else {
      setSelectedCrop(null);
    }
  };
  
  return (
    <FarmCard 
      title="Farm Layout" 
      icon={<Map className="h-5 w-5" />}
      className={className}
    >
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 min-h-[300px]">
          <div className="relative bg-soil-50 border-2 border-soil-300 w-full h-[300px] rounded-lg overflow-hidden">
            <div className="absolute inset-0 soil-texture opacity-10"></div>
            
            <div className="relative p-2">
              <div className="text-sm text-soil-700 mb-2 font-medium">Interactive Layout</div>
              
              <div className="grid grid-cols-4 gap-2">
                {farmLayout.map((plot) => (
                  <div
                    key={plot.id}
                    className={`${getCropColor(plot.cropId)} rounded-md p-2 flex items-center justify-center cursor-pointer shadow-sm transition-transform hover:scale-[1.02] col-span-${plot.width} row-span-${plot.height}`}
                    style={{
                      gridColumn: `span ${plot.width}`,
                      gridRow: `span ${plot.height}`,
                    }}
                    onClick={() => handlePlotClick(plot)}
                  >
                    {plot.cropId && (
                      <div className="text-center">
                        <Plant className="h-6 w-6 mx-auto" />
                        <span className="text-xs font-medium mt-1 block">
                          {getCropById(plot.cropId)?.name || "Unknown"}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-3 flex justify-center space-x-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="text-xs py-1 h-7"
                >
                  Edit Layout
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="text-xs py-1 h-7"
                >
                  Add Plot
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-[250px]">
          <div className="bg-stone-50 rounded-lg p-3 h-full">
            <h4 className="font-medium mb-2 flex items-center">
              <Layers className="h-4 w-4 mr-1 text-earth-600" />
              Plot Information
            </h4>
            
            {selectedCrop ? (
              <div className="space-y-3">
                <div>
                  <span className="font-medium block">{selectedCrop.name}</span>
                  <span className="text-xs text-stone-600 italic">{selectedCrop.scientificName}</span>
                </div>
                
                <div>
                  <div className="flex items-center space-x-1 text-sm">
                    <div>Water: </div>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div 
                          key={i}
                          className={`w-3 h-3 rounded-full mx-0.5 ${
                            i < selectedCrop.waterNeeds 
                              ? 'bg-blue-400' 
                              : 'bg-stone-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1 text-sm mt-1">
                    <div>Sun: </div>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div 
                          key={i}
                          className={`w-3 h-3 rounded-full mx-0.5 ${
                            i < selectedCrop.sunNeeds 
                              ? 'bg-yellow-400' 
                              : 'bg-stone-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <span className="text-xs font-medium block mb-1">Companion Plants:</span>
                  <div className="flex flex-wrap gap-1">
                    {selectedCrop.companionPlants.map(id => {
                      const companion = getCropById(id);
                      return companion ? (
                        <span 
                          key={id} 
                          className="bg-earth-100 text-earth-800 text-xs px-2 py-0.5 rounded-full"
                        >
                          {companion.name}
                        </span>
                      ) : null;
                    })}
                  </div>
                </div>
                
                <div className="text-xs">
                  <p>{selectedCrop.description}</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-[180px] text-sm text-stone-500">
                <Plant className="h-8 w-8 mb-2 opacity-40" />
                <p>Select a plot to view crop details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </FarmCard>
  );
};

export default FarmMap;
