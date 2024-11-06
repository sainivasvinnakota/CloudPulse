import { HomeEnergyData, TravelData, FoodData, WasteData, WaterData, LifestyleData, SecondaryData } from '../types';

// Emission factors (kg CO2e per unit)
const EMISSION_FACTORS = {
  // Home Energy
  electricity: 0.233, // kg CO2e per kWh
  naturalGas: 2.03,   // kg CO2e per m³
  heatingOil: 2.68,   // kg CO2e per L

  // Travel (kg CO2e per km)
  car: {
    petrol: 0.192,
    diesel: 0.171,
    hybrid: 0.106,
    electric: 0.053,
  },
  publicTransport: {
    bus: 0.089,
    train: 0.041,
    subway: 0.033,
  },
  flight: {
    domestic: 0.255,
    international: 0.195,
  },

  // Food (kg CO2e per day)
  diet: {
    'meat-heavy': 7.19,
    'average': 5.63,
    'vegetarian': 3.81,
    'vegan': 2.89,
  },

  // Waste (kg CO2e per kg waste)
  waste: {
    landfill: 0.25,
    recycled: 0.02,
    composted: 0.01,
  },

  // Water (kg CO2e per m³)
  water: 0.298,

  // Lifestyle (kg CO2e per item)
  lifestyle: {
    electronics: 50,
    clothing: 10,
    furniture: 100,
  },

  // Secondary (kg CO2e per hour/service)
  secondary: {
    entertainment: 0.1,
    services: 0.2,
    onlineActivity: 0.05,
  },
};

export const calculateHomeEmissions = (data: HomeEnergyData): number => {
  const electricityEmissions = data.electricity * EMISSION_FACTORS.electricity;
  const naturalGasEmissions = data.naturalGas * EMISSION_FACTORS.naturalGas;
  const heatingOilEmissions = data.heatingOil * EMISSION_FACTORS.heatingOil;

  // Convert to tonnes and return total annual emissions
  return (electricityEmissions + naturalGasEmissions + heatingOilEmissions) * 12 / 1000;
};

export const calculateTravelEmissions = (data: TravelData): number => {
  const carEmissions = data.carDistance * EMISSION_FACTORS.car[data.carType];
  const publicTransportEmissions = data.publicTransportDistance * EMISSION_FACTORS.publicTransport[data.transportType];
  const flightEmissions = data.flightDistance * EMISSION_FACTORS.flight[data.flightType];

  // Convert to tonnes and return total annual emissions
  return (carEmissions + publicTransportEmissions + flightEmissions) * 52 / 1000; // Weekly to annual
};

export const calculateFoodEmissions = (data: FoodData): number => {
  const dailyEmissions = EMISSION_FACTORS.diet[data.dietType];
  const weeklyEmissions = dailyEmissions * 7;
  
  // Convert to tonnes and return total annual emissions
  return (weeklyEmissions * 52) / 1000;
};

export const calculateWasteEmissions = (data: WasteData): number => {
  const landfillEmissions = data.landfillWaste * EMISSION_FACTORS.waste.landfill;
  const recycledEmissions = data.recycledWaste * EMISSION_FACTORS.waste.recycled;
  const compostedEmissions = data.compostedWaste * EMISSION_FACTORS.waste.composted;

  // Convert to tonnes and return total annual emissions
  return (landfillEmissions + recycledEmissions + compostedEmissions) * 52 / 1000; // Weekly to annual
};

export const calculateWaterEmissions = (data: WaterData): number => {
  const weeklyEmissions = (data.weeklyConsumption / 1000) * EMISSION_FACTORS.water; // Convert L to m³

  // Convert to tonnes and return total annual emissions
  return (weeklyEmissions * 52) / 1000;
};

export const calculateLifestyleEmissions = (data: LifestyleData): number => {
  const electronicsEmissions = data.electronics * EMISSION_FACTORS.lifestyle.electronics;
  const clothingEmissions = data.clothing * EMISSION_FACTORS.lifestyle.clothing;
  const furnitureEmissions = data.furniture * EMISSION_FACTORS.lifestyle.furniture;

  // Convert to tonnes and return total annual emissions
  return (electronicsEmissions + clothingEmissions + furnitureEmissions) / 1000;
};

export const calculateSecondaryEmissions = (data: SecondaryData): number => {
  const entertainmentEmissions = data.entertainment * EMISSION_FACTORS.secondary.entertainment;
  const servicesEmissions = data.services * EMISSION_FACTORS.secondary.services;
  const onlineEmissions = data.onlineActivity * EMISSION_FACTORS.secondary.onlineActivity;

  // Convert to tonnes and return total annual emissions
  return (entertainmentEmissions + servicesEmissions + onlineEmissions) * 52 / 1000; // Weekly to annual
};