import React, { useState, useEffect } from 'react';
import { calculateWaterEmissions } from '../../utils/calculations';
import InputField from '../ui/InputField';
import { WaterData } from '../../types';

interface WaterProps {
  onCalculate: (emissions: number) => void;
}

const Water: React.FC<WaterProps> = ({ onCalculate }) => {
  const [formData, setFormData] = useState<WaterData>({
    weeklyConsumption: 0,
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
  };

  useEffect(() => {
    const emissions = calculateWaterEmissions(formData);
    onCalculate(emissions);
  }, [formData, onCalculate]);

  return (
    <div className="space-y-8">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Water Usage</h2>
        <p className="text-gray-600 mb-6">
          Calculate the carbon footprint of your water consumption. This includes water used for drinking, washing, cleaning, and gardening.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <InputField
          label="Weekly Water Consumption"
          name="weeklyConsumption"
          value={formData.weeklyConsumption.toString()}
          onChange={handleInputChange}
          unit="L/week"
          placeholder="0"
          helpText="Enter your total weekly water consumption in liters"
        />
      </div>

      <div className="bg-blue-50 p-4 rounded-lg mt-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Common Water Usage Reference</h3>
        <ul className="list-disc list-inside text-blue-700 space-y-1">
          <li>Average shower (8 minutes): 65 liters</li>
          <li>Toilet flush: 6-13 liters</li>
          <li>Dishwasher cycle: 15-30 liters</li>
          <li>Washing machine cycle: 50-100 liters</li>
          <li>Garden sprinkler (1 hour): 1000 liters</li>
        </ul>
      </div>

      <div className="bg-green-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-green-800 mb-2">Tips to Reduce Your Water Footprint</h3>
        <ul className="list-disc list-inside text-green-700 space-y-1">
          <li>Fix leaky faucets and pipes promptly</li>
          <li>Install water-efficient fixtures and appliances</li>
          <li>Take shorter showers or use a low-flow showerhead</li>
          <li>Collect rainwater for garden irrigation</li>
          <li>Only run full loads in dishwashers and washing machines</li>
        </ul>
      </div>
    </div>
  );
};

export default Water;