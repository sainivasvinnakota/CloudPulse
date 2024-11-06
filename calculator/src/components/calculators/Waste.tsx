import React, { useState, useEffect } from 'react';
import { calculateWasteEmissions } from '../../utils/calculations';
import InputField from '../ui/InputField';
import { WasteData } from '../../types';

interface WasteProps {
  onCalculate: (emissions: number) => void;
}

const Waste: React.FC<WasteProps> = ({ onCalculate }) => {
  const [formData, setFormData] = useState<WasteData>({
    landfillWaste: 0,
    recycledWaste: 0,
    compostedWaste: 0,
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
  };

  useEffect(() => {
    const emissions = calculateWasteEmissions(formData);
    onCalculate(emissions);
  }, [formData, onCalculate]);

  return (
    <div className="space-y-8">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Waste Management</h2>
        <p className="text-gray-600 mb-6">
          Track your weekly waste production and its environmental impact. Enter the weight of waste in kilograms for each category.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <InputField
          label="Landfill Waste"
          name="landfillWaste"
          value={formData.landfillWaste.toString()}
          onChange={handleInputChange}
          unit="kg/week"
          placeholder="0"
          helpText="Enter the weight of waste that goes to landfill"
        />

        <InputField
          label="Recycled Waste"
          name="recycledWaste"
          value={formData.recycledWaste.toString()}
          onChange={handleInputChange}
          unit="kg/week"
          placeholder="0"
          helpText="Enter the weight of recycled materials"
        />

        <InputField
          label="Composted Waste"
          name="compostedWaste"
          value={formData.compostedWaste.toString()}
          onChange={handleInputChange}
          unit="kg/week"
          placeholder="0"
          helpText="Enter the weight of composted organic waste"
        />
      </div>

      <div className="bg-green-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-green-800 mb-2">Tips to Reduce Your Waste Footprint</h3>
        <ul className="list-disc list-inside text-green-700 space-y-1">
          <li>Follow the 3 Rs: Reduce, Reuse, Recycle</li>
          <li>Start composting organic waste</li>
          <li>Choose products with minimal packaging</li>
          <li>Use reusable bags, containers, and water bottles</li>
          <li>Properly sort recyclables to ensure they can be processed</li>
        </ul>
      </div>
    </div>
  );
};

export default Waste;