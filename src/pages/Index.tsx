
import React, { useState } from "react";
import { 
  SeedingIcon, 
  Plant, 
  Map, 
  Calendar, 
  CloudRain, 
  CloudSun,
  Sun,
  Soil
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Dashboard from "@/components/dashboard/Dashboard";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { ClimateZone, FarmingMethod, SoilType } from "@/types";

const Index = () => {
  const [started, setStarted] = useState(false);
  const [locationInput, setLocationInput] = useState({
    location: "",
    climateZone: "temperate" as ClimateZone,
    soilType: "loamy" as SoilType,
    farmingMethod: "traditional" as FarmingMethod
  });

  const handleStart = () => {
    setStarted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {started ? (
          <div className="container mx-auto py-8 px-4">
            <div className="mb-6 flex flex-col md:flex-row justify-between items-center">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-1">Your Farm Plan</h1>
                <p className="text-stone-600">
                  {locationInput.location || "My Farm"} • {locationInput.soilType} soil • {locationInput.climateZone} climate
                </p>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center">
                <Button 
                  className="bg-earth-500 hover:bg-earth-600 mr-3"
                  onClick={() => setStarted(false)}
                >
                  <SeedingIcon className="h-4 w-4 mr-2" />
                  Edit Farm
                </Button>
                <Button variant="outline">
                  <CloudRain className="h-4 w-4 mr-2" />
                  Add Weather
                </Button>
              </div>
            </div>
            
            <Dashboard />
          </div>
        ) : (
          <div className="container mx-auto py-12 px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 bg-earth-100 rounded-full flex items-center justify-center animate-fade-in">
                  <Plant className="h-8 w-8 text-earth-600" />
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4 handwriting tracking-wide">
                FarmAI Planner
              </h1>
              
              <p className="text-xl text-stone-600 mb-6">
                Design your sustainable one-acre farm with AI-powered recommendations
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <div className="flex items-center bg-earth-100 text-earth-700 rounded-full px-3 py-1.5">
                  <SeedingIcon className="h-4 w-4 mr-1.5" />
                  <span>Crop Recommendations</span>
                </div>
                
                <div className="flex items-center bg-soil-100 text-soil-700 rounded-full px-3 py-1.5">
                  <Map className="h-4 w-4 mr-1.5" />
                  <span>Farm Layout</span>
                </div>
                
                <div className="flex items-center bg-clay-100 text-clay-700 rounded-full px-3 py-1.5">
                  <Calendar className="h-4 w-4 mr-1.5" />
                  <span>Planting Calendar</span>
                </div>
                
                <div className="flex items-center bg-stone-100 text-stone-700 rounded-full px-3 py-1.5">
                  <CloudSun className="h-4 w-4 mr-1.5" />
                  <span>Climate Action</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg max-w-2xl mx-auto p-6">
              <h2 className="text-xl font-semibold mb-4">Tell us about your farm</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-stone-700">
                    Location Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="My Garden / Farm Name"
                    className="w-full px-3 py-2 border border-stone-300 rounded-md"
                    value={locationInput.location}
                    onChange={(e) => setLocationInput({...locationInput, location: e.target.value})}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-stone-700">
                      <CloudSun className="h-4 w-4 inline mr-1" />
                      Climate Zone
                    </label>
                    <Select 
                      value={locationInput.climateZone} 
                      onValueChange={(value: ClimateZone) => 
                        setLocationInput({...locationInput, climateZone: value})
                      }
                    >
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
                  
                  <div>
                    <label className="block text-sm font-medium mb-1 text-stone-700">
                      <Soil className="h-4 w-4 inline mr-1" />
                      Soil Type
                    </label>
                    <Select 
                      value={locationInput.soilType} 
                      onValueChange={(value: SoilType) => 
                        setLocationInput({...locationInput, soilType: value})
                      }
                    >
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
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1 text-stone-700">
                    <Sun className="h-4 w-4 inline mr-1" />
                    Farming Method
                  </label>
                  <Select 
                    value={locationInput.farmingMethod} 
                    onValueChange={(value: FarmingMethod) => 
                      setLocationInput({...locationInput, farmingMethod: value})
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select farming method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="traditional">Traditional Soil</SelectItem>
                      <SelectItem value="terrace">Terrace</SelectItem>
                      <SelectItem value="hydroponic">Hydroponic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="pt-3">
                  <Button 
                    className="w-full py-6 text-lg bg-earth-500 hover:bg-earth-600"
                    onClick={handleStart}
                  >
                    <Plant className="h-5 w-5 mr-2" />
                    Generate My Farm Plan
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto mt-12 text-center text-sm text-stone-500">
              <div className="flex justify-center space-x-6 mb-3">
                <div className="flex flex-col items-center">
                  <CloudSun className="h-8 w-8 mb-1 text-stone-400" />
                  <span>Climate Aware</span>
                </div>
                <div className="flex flex-col items-center">
                  <Plant className="h-8 w-8 mb-1 text-stone-400" />
                  <span>Sustainable</span>
                </div>
                <div className="flex flex-col items-center">
                  <Map className="h-8 w-8 mb-1 text-stone-400" />
                  <span>Optimized Layout</span>
                </div>
              </div>
              <p>Supporting SDG 2: Zero Hunger and SDG 13: Climate Action</p>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
