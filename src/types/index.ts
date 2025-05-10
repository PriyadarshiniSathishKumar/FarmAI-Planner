
// Farm types
export type FarmingMethod = "traditional" | "terrace" | "hydroponic";

export type SoilType = "clay" | "sandy" | "loamy" | "chalky" | "peaty" | "silty";

export type ClimateZone = 
  | "tropical" 
  | "dry" 
  | "temperate" 
  | "continental" 
  | "polar";

export type CropCategory = 
  | "vegetable" 
  | "fruit" 
  | "grain" 
  | "legume" 
  | "herb" 
  | "flower";

export interface Crop {
  id: string;
  name: string;
  scientificName: string;
  category: CropCategory;
  growthDuration: number; // In days
  waterNeeds: number; // 1-5 scale
  sunNeeds: number; // 1-5 scale
  bestSoilTypes: SoilType[];
  bestClimateZones: ClimateZone[];
  companionPlants: string[]; // IDs of companion plants
  avoidPlants: string[]; // IDs of plants to avoid
  description: string;
  icon: string; // Icon name from lucide-react
  sustainabilityScore: number; // 1-100
  seasonalPlantingMonths: number[]; // 1-12 representing months
  harvestMonths: number[]; // 1-12 representing months
  yieldEstimate: number; // kg per square meter
  image?: string; // Optional image URL
}

export interface FarmPlot {
  id: string;
  cropId: string | null;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface FarmPlan {
  id: string;
  name: string;
  location: string;
  climateZone: ClimateZone;
  soilType: SoilType;
  farmingMethod: FarmingMethod;
  totalArea: number; // in square meters
  plots: FarmPlot[];
  createdAt: Date;
  updatedAt: Date;
}

export interface MonthlyTask {
  month: number; // 1-12 representing months
  tasks: {
    id: string;
    cropId: string;
    description: string;
    isCompleted: boolean;
    type: "planting" | "watering" | "fertilizing" | "pruning" | "harvesting" | "other";
  }[];
}

export interface SustainabilityMetric {
  name: string;
  value: number;
  icon: string;
  description: string;
  color: string;
}

// User preferences
export interface UserPreferences {
  preferredCrops: string[];
  excludedCrops: string[];
  farmingMethod: FarmingMethod;
  sustainabilityFocus: boolean;
}
