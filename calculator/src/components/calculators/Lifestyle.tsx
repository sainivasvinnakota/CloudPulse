import React, { useState, useEffect } from 'react';
import { calculateLifestyleEmissions } from '../../utils/calculations';
import InputField from '../ui/InputField';
import { LifestyleData } from '../../types';

interface LifestyleProps {
  onCalculate: (emissions: number) => void;
}

const Lifestyle: React.FC<LifestyleProps> = ({ onCalculate }) => {
  const [formData, setFormData] = useState<LifestyleData>({
    electronics: 0,
    clothing: 0,
    furniture: 0,
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
  };

  useEffect(() => {
    const emissions = calculateLifestyleEmissions(formData);
    onCalculate(emissions);
  }, [formData, onCalculate]);

  return (
    <div className="space-y-8">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Lifestyle & Consumption</h2>
        <p className="text-gray-600 mb-6">
          Track your consumption habits and their environmental impact. Enter the number of items purchased in the last year.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <InputField
          label="Electronics Purchased"
          name="electronics"
          value={formData.electronics.toString()}
          onChange={handleInputChange}
          unit="items/year"
          placeholder="0"
          helpText="Number of electronic devices (phones, laptops, etc.)"
        />

        <InputField
          label="Clothing Items"
          name="clothing"
          value={formData.clothing.toString()}
          onChange={handleInputChange}
          unit="items/year"
          placeholder="0"
          helpText="Number of new clothing items purchased"
        />

        <InputField
          label="Furniture Items"
          name="furniture"
          value={formData.furniture.toString()}
          onChange={handleInputChange}
          unit="items/year"
          placeholder="0"
          helpText="Number of furniture pieces bought"
        />
      </div>

      <div className="bg-green-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-green-800 mb-2">Tips for Sustainable Consumption</h3>
        <ul className="list-disc list-inside text-green-700 space-y-1">
          <li>Buy second-hand or refurbished electronics</li>
          <li>Choose quality clothing that lasts longer</li>
          <li>Repair items instead of replacing them</li>
          <li>Support sustainable and local brands</li>
          <li>Practice minimalism and mindful consumption</li>
        </ul>
      </div>
    </div>
  );
};

export default Lifestyle;