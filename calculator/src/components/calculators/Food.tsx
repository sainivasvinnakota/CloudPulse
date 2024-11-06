import React, { useState, useEffect } from 'react';
import { calculateFoodEmissions } from '../../utils/calculations';
import SelectField from '../ui/SelectField';
import InputField from '../ui/InputField';
import { FoodData } from '../../types';

interface FoodProps {
  onCalculate: (emissions: number) => void;
}

const Food: React.FC<FoodProps> = ({ onCalculate }) => {
  const [formData, setFormData] = useState<FoodData>({
    dietType: 'average',
    mealsPerWeek: 21, // Default to 3 meals per day
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: name === 'mealsPerWeek' ? parseFloat(value) || 0 : value,
    }));
  };

  useEffect(() => {
    const emissions = calculateFoodEmissions(formData);
    onCalculate(emissions);
  }, [formData, onCalculate]);

  const dietOptions = [
    { value: 'meat-heavy', label: 'Meat Heavy (Daily meat consumption)' },
    { value: 'average', label: 'Average (Moderate meat consumption)' },
    { value: 'vegetarian', label: 'Vegetarian (No meat, but dairy/eggs)' },
    { value: 'vegan', label: 'Vegan (Plant-based only)' },
  ];

  return (
    <div className="space-y-8">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Food & Diet</h2>
        <p className="text-gray-600 mb-6">
          Your diet has a significant impact on your carbon footprint. Calculate your food-related emissions based on your dietary choices.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <SelectField
          label="Diet Type"
          name="dietType"
          value={formData.dietType}
          onChange={handleInputChange}
          options={dietOptions}
          helpText="Select the option that best matches your typical diet"
        />

        <InputField
          label="Meals Per Week"
          name="mealsPerWeek"
          value={formData.mealsPerWeek.toString()}
          onChange={handleInputChange}
          unit="meals/week"
          placeholder="21"
          helpText="Enter your average number of meals per week"
        />
      </div>

      <div className="bg-green-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-green-800 mb-2">Tips to Reduce Your Food Footprint</h3>
        <ul className="list-disc list-inside text-green-700 space-y-1">
          <li>Reduce meat consumption, especially beef and lamb</li>
          <li>Choose local and seasonal produce when possible</li>
          <li>Plan meals to minimize food waste</li>
          <li>Consider growing your own herbs and vegetables</li>
          <li>Buy in bulk to reduce packaging waste</li>
        </ul>
      </div>
    </div>
  );
};

export default Food;