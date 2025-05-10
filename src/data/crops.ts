
import { Crop, CropCategory, ClimateZone, SoilType } from "../types";

// Sample crop data
export const crops: Crop[] = [
  {
    id: "tomato",
    name: "Tomato",
    scientificName: "Solanum lycopersicum",
    category: "vegetable",
    growthDuration: 90,
    waterNeeds: 3,
    sunNeeds: 4,
    bestSoilTypes: ["loamy", "sandy"],
    bestClimateZones: ["tropical", "temperate"],
    companionPlants: ["basil", "marigold", "garlic", "onion"],
    avoidPlants: ["potato", "corn", "fennel"],
    description: "Tomatoes are one of the most popular garden vegetables with many varieties. They need warm conditions to grow well.",
    icon: "tomato",
    sustainabilityScore: 75,
    seasonalPlantingMonths: [2, 3, 4],
    harvestMonths: [6, 7, 8],
    yieldEstimate: 5,
    image: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=500&auto=format&fit=crop"
  },
  {
    id: "carrot",
    name: "Carrot",
    scientificName: "Daucus carota",
    category: "vegetable",
    growthDuration: 70,
    waterNeeds: 2,
    sunNeeds: 3,
    bestSoilTypes: ["sandy", "loamy"],
    bestClimateZones: ["temperate", "continental"],
    companionPlants: ["tomato", "onion", "leek"],
    avoidPlants: ["dill"],
    description: "Root vegetable that grows best in loose, sandy soil. Carrots are rich in vitamin A and antioxidants.",
    icon: "carrot",
    sustainabilityScore: 85,
    seasonalPlantingMonths: [2, 3, 4, 8, 9],
    harvestMonths: [5, 6, 7, 11, 12],
    yieldEstimate: 3,
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&auto=format&fit=crop"
  },
  {
    id: "spinach",
    name: "Spinach",
    scientificName: "Spinacia oleracea",
    category: "vegetable",
    growthDuration: 45,
    waterNeeds: 3,
    sunNeeds: 2,
    bestSoilTypes: ["loamy", "sandy"],
    bestClimateZones: ["temperate", "continental"],
    companionPlants: ["strawberry", "cabbage", "peas"],
    avoidPlants: ["potato"],
    description: "Leafy green vegetable that grows quickly and is packed with nutrients. Prefers cooler temperatures.",
    icon: "leafy-green",
    sustainabilityScore: 90,
    seasonalPlantingMonths: [2, 3, 8, 9],
    harvestMonths: [4, 5, 6, 10, 11],
    yieldEstimate: 2,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&auto=format&fit=crop"
  },
  {
    id: "corn",
    name: "Corn",
    scientificName: "Zea mays",
    category: "grain",
    growthDuration: 90,
    waterNeeds: 4,
    sunNeeds: 5,
    bestSoilTypes: ["loamy"],
    bestClimateZones: ["temperate", "continental", "tropical"],
    companionPlants: ["beans", "squash", "cucumber"],
    avoidPlants: ["tomato"],
    description: "Tall grass that produces ears of sweet kernels. Requires plenty of space and sunlight.",
    icon: "corn",
    sustainabilityScore: 60,
    seasonalPlantingMonths: [4, 5],
    harvestMonths: [8, 9],
    yieldEstimate: 6,
    image: "https://images.unsplash.com/photo-1625246333195-78d73c0de816?w=500&auto=format&fit=crop"
  },
  {
    id: "beans",
    name: "Beans",
    scientificName: "Phaseolus vulgaris",
    category: "legume",
    growthDuration: 60,
    waterNeeds: 3,
    sunNeeds: 4,
    bestSoilTypes: ["loamy", "clay"],
    bestClimateZones: ["tropical", "temperate"],
    companionPlants: ["corn", "carrot", "cabbage"],
    avoidPlants: ["onion", "garlic"],
    description: "Legumes that fix nitrogen in the soil. Come in bush and pole varieties with many types to choose from.",
    icon: "bean",
    sustainabilityScore: 95,
    seasonalPlantingMonths: [4, 5, 6],
    harvestMonths: [7, 8, 9],
    yieldEstimate: 4,
    image: "https://images.unsplash.com/photo-1663407127029-5e3fd58e2e49?w=500&auto=format&fit=crop"
  },
  {
    id: "cucumber",
    name: "Cucumber",
    scientificName: "Cucumis sativus",
    category: "vegetable",
    growthDuration: 65,
    waterNeeds: 4,
    sunNeeds: 4,
    bestSoilTypes: ["loamy", "sandy"],
    bestClimateZones: ["tropical", "temperate"],
    companionPlants: ["beans", "corn", "peas", "sunflower"],
    avoidPlants: ["potato", "herbs"],
    description: "Vine crop that produces crisp, refreshing fruits. Needs trellising for vertical growth.",
    icon: "cucumber",
    sustainabilityScore: 70,
    seasonalPlantingMonths: [4, 5, 6],
    harvestMonths: [7, 8, 9],
    yieldEstimate: 8,
    image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=500&auto=format&fit=crop"
  },
  {
    id: "lettuce",
    name: "Lettuce",
    scientificName: "Lactuca sativa",
    category: "vegetable",
    growthDuration: 30,
    waterNeeds: 3,
    sunNeeds: 2,
    bestSoilTypes: ["loamy", "sandy"],
    bestClimateZones: ["temperate", "continental"],
    companionPlants: ["carrot", "strawberry", "cucumber"],
    avoidPlants: ["broccoli", "cabbage"],
    description: "Fast-growing leafy vegetable with many varieties. Great for successive plantings throughout the season.",
    icon: "salad",
    sustainabilityScore: 85,
    seasonalPlantingMonths: [3, 4, 5, 8, 9],
    harvestMonths: [4, 5, 6, 7, 10, 11],
    yieldEstimate: 2,
    image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=500&auto=format&fit=crop"
  },
  {
    id: "marigold",
    name: "Marigold",
    scientificName: "Tagetes",
    category: "flower",
    growthDuration: 50,
    waterNeeds: 2,
    sunNeeds: 4,
    bestSoilTypes: ["loamy", "sandy", "clay"],
    bestClimateZones: ["tropical", "temperate", "continental"],
    companionPlants: ["tomato", "pepper", "cucumber"],
    avoidPlants: ["beans"],
    description: "Bright flowers that help repel pests. Often planted as companions to vegetables.",
    icon: "flower",
    sustainabilityScore: 80,
    seasonalPlantingMonths: [4, 5],
    harvestMonths: [6, 7, 8, 9],
    yieldEstimate: 0,
    image: "https://images.unsplash.com/photo-1602045486350-4e7bf21993d1?w=500&auto=format&fit=crop"
  },
  {
    id: "basil",
    name: "Basil",
    scientificName: "Ocimum basilicum",
    category: "herb",
    growthDuration: 40,
    waterNeeds: 3,
    sunNeeds: 4,
    bestSoilTypes: ["loamy", "sandy"],
    bestClimateZones: ["tropical", "temperate"],
    companionPlants: ["tomato", "pepper"],
    avoidPlants: ["rue"],
    description: "Aromatic herb that pairs well with tomatoes both in the garden and in the kitchen.",
    icon: "leafy-green",
    sustainabilityScore: 85,
    seasonalPlantingMonths: [4, 5, 6],
    harvestMonths: [6, 7, 8, 9],
    yieldEstimate: 1,
    image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=500&auto=format&fit=crop"
  },
  {
    id: "pepper",
    name: "Bell Pepper",
    scientificName: "Capsicum annuum",
    category: "vegetable",
    growthDuration: 90,
    waterNeeds: 3,
    sunNeeds: 5,
    bestSoilTypes: ["loamy"],
    bestClimateZones: ["tropical", "temperate"],
    companionPlants: ["basil", "onion", "carrot"],
    avoidPlants: ["fennel", "kohlrabi"],
    description: "Sweet peppers with varying colors depending on ripeness. Require warm conditions to thrive.",
    icon: "pepper",
    sustainabilityScore: 75,
    seasonalPlantingMonths: [4, 5],
    harvestMonths: [7, 8, 9, 10],
    yieldEstimate: 3,
    image: "https://images.unsplash.com/photo-1473973916745-60839aebf06b?w=500&auto=format&fit=crop"
  }
];

// Helper function to find a crop by ID
export const getCropById = (id: string): Crop | undefined => {
  return crops.find(crop => crop.id === id);
};

// Helper function to get companion plants for a crop
export const getCompanionPlants = (cropId: string): Crop[] => {
  const crop = getCropById(cropId);
  if (!crop) return [];
  
  return crop.companionPlants
    .map(id => getCropById(id))
    .filter((crop): crop is Crop => crop !== undefined);
};

// Helper function to recommend crops based on soil type and climate
export const getRecommendedCrops = (
  soilType: SoilType, 
  climateZone: ClimateZone
): Crop[] => {
  return crops.filter(crop => 
    crop.bestSoilTypes.includes(soilType) && 
    crop.bestClimateZones.includes(climateZone)
  );
};
