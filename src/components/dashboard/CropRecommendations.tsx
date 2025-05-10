
import React, { useState } from "react";
import { ThumbsUp, Seedling } from "lucide-react";
import FarmCard from "../ui/FarmCard";
import { Crop, SoilType, ClimateZone } from "@/types";
import { crops } from "@/data/crops";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select";

interface CropRecommendationsProps {
  className?: string;
}

const CropRecommendations: React.FC<CropRecommendationsProps> = ({ className }) => {
  const [soilType, setSoilType] = useState<SoilType>("loamy");
  const [climateZone, setClimateZone] = useState<ClimateZone>("temperate");
  const [recommendedCrops, setRecommendedCrops] = useState<Crop[]>([]);
  
  // Get top 5 recommended crops based on soil and climate
  const getRecommendations = () => {
    const filtered = crops.filter(crop => 
      crop.bestSoilTypes.includes(soilType) && 
      crop.bestClimateZones.includes(climateZone)
    ).sort((a, b) => b.sustainabilityScore - a.sustainabilityScore);
    
    setRecommendedCrops(filtered.slice(0, 5));
  };
  
  React.useEffect(() => {
    getRecommendations();
  }, [soilType, climateZone]);
  
  return (
    <FarmCard 
      title="Crop Recommendations" 
      icon={<Seedling className="h-5 w-5" />}
      className={className}
    >
      <div>
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1 text-stone-700">
              Soil Type
            </label>
            <Select value={soilType} onValueChange={(value: SoilType) => setSoilType(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select soil type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="clay">Clay</SelectItem>
                <SelectItem value="sandy">Sandy</SelectItem>
                <SelectItem value="loamy">Loamy</SelectItem>
                <SelectItem value="chalky">Chalky</SelectItem>
                <SelectItem value="peaty">Peaty</SelectItem>
                <SelectItem value="silty">Silty</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1 text-stone-700">
              Climate Zone
            </label>
            <Select value={climateZone} onValueChange={(value: ClimateZone) => setClimateZone(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select climate zone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tropical">Tropical</SelectItem>
                <SelectItem value="dry">Dry</SelectItem>
                <SelectItem value="temperate">Temperate</SelectItem>
                <SelectItem value="continental">Continental</SelectItem>
                <SelectItem value="polar">Polar</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="self-end">
            <Button 
              className="bg-earth-500 hover:bg-earth-600" 
              onClick={getRecommendations}
            >
              <ThumbsUp className="h-4 w-4 mr-1" />
              Get Recommendations
            </Button>
          </div>
        </div>
        
        <div className="space-y-3">
          {recommendedCrops.map((crop) => (
            <div key={crop.id} className="bg-stone-50 rounded-lg p-3 flex">
              <div className="h-16 w-16 mr-3 rounded-md bg-white shadow-sm flex items-center justify-center shrink-0">
                <Seedling className="h-8 w-8 text-earth-600" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-wrap justify-between items-start mb-1">
                  <h4 className="font-medium">{crop.name}</h4>
                  <div className="flex items-center bg-earth-100 text-earth-700 rounded-full px-2 py-0.5 text-xs font-medium">
                    Score: {crop.sustainabilityScore}/100
                  </div>
                </div>
                
                <div className="text-sm text-stone-600 line-clamp-2">
                  {crop.description}
                </div>
                
                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
                  <span className="bg-soil-100 text-soil-700 px-2 py-0.5 rounded-full">
                    {crop.growthDuration} days
                  </span>
                  
                  {crop.category && (
                    <span className="bg-clay-100 text-clay-700 px-2 py-0.5 rounded-full">
                      {crop.category}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {recommendedCrops.length === 0 && (
            <div className="text-center py-6 text-stone-500">
              <Seedling className="h-10 w-10 mx-auto mb-2 opacity-40" />
              <p>No crops match the selected criteria.</p>
              <p className="text-sm mt-1">Try different soil or climate options.</p>
            </div>
          )}
        </div>
      </div>
    </FarmCard>
  );
};

export default CropRecommendations;
