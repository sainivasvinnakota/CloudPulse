export type TabType = 'home' | 'travel' | 'food' | 'waste' | 'water' | 'lifestyle' | 'secondary' | 'offset';

export interface HomeEnergyData {
  electricity: number;
  naturalGas: number;
  heatingOil: number;
}

export interface TravelData {
  carDistance: number;
  carType: 'petrol' | 'diesel' | 'hybrid' | 'electric';
  publicTransportDistance: number;
  transportType: 'bus' | 'train' | 'subway';
  flightDistance: number;
  flightType: 'domestic' | 'international';
}

export interface FoodData {
  dietType: 'meat-heavy' | 'average' | 'vegetarian' | 'vegan';
  mealsPerWeek: number;
}

export interface WasteData {
  landfillWaste: number;
  recycledWaste: number;
  compostedWaste: number;
}

export interface WaterData {
  weeklyConsumption: number;
}

export interface LifestyleData {
  electronics: number;
  clothing: number;
  furniture: number;
}

export interface SecondaryData {
  entertainment: number;
  services: number;
  onlineActivity: number;
}