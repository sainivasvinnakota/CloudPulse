import React, { useState, useEffect } from 'react';
import { calculateSecondaryEmissions } from '../../utils/calculations';
import InputField from '../ui/InputField';
import { SecondaryData } from '../../types';

interface SecondaryProps {
  onCalculate: (emissions: number) => void;
}

const Secondary: React.FC<SecondaryProps> = ({ onCalculate }) => {
  const [formData, setFormData] = useState<SecondaryData>({
    entertainment: 0,
    services: 0,
    onlineActivity: 0,
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
  };

  useEffect(() => {
    const emissions = calculateSecondaryEmissions(formData);
    onCalculate(emissions);
  }, [formData, onCalculate]);

  return (
    <div className="space-y-8">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Secondary Emissions</h2>
        <p className="text-gray-600 mb-6">
          Calculate indirect emissions from various activities and services. Enter your weekly usage in hours.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <InputField
          label="Entertainment Activities"
          name="entertainment"
          value={formData.entertainment.toString()}
          onChange={handleInputChange}
          unit="hours/week"
          placeholder="0"
          helpText="Time spent on entertainment activities (streaming, gaming)"
        />

        <InputField
          label="Service Usage"
          name="services"
          value={formData.services.toString()}
          onChange={handleInputChange}
          unit="hours/week"
          placeholder="0"
          helpText="Time using various services (banking, delivery)"
        />

        <InputField
          label="Online Activity"
          name="onlineActivity"
          value={formData.onlineActivity.toString()}
          onChange={handleInputChange}
          unit="hours/week"
          placeholder="0"
          helpText="Time spent browsing, video calls, social media"
        />
      </div>

      <div className="bg-green-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-green-800 mb-2">Tips to Reduce Secondary Emissions</h3>
        <ul className="list-disc list-inside text-green-700 space-y-1">
          <li>Use energy-efficient devices for entertainment</li>
          <li>Choose local services when possible</li>
          <li>Optimize video streaming quality</li>
          <li>Consolidate online activities to reduce device usage</li>
          <li>Support businesses with strong environmental policies</li>
        </ul>
      </div>
    </div>
  );
};

export default Secondary;