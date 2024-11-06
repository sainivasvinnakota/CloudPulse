import React, { useState, useEffect } from 'react';
import { calculateTravelEmissions } from '../../utils/calculations';
import InputField from '../ui/InputField';
import SelectField from '../ui/SelectField';
import { TravelData } from '../../types';

interface TravelProps {
  onCalculate: (emissions: number) => void;
}

const Travel: React.FC<TravelProps> = ({ onCalculate }) => {
  const [formData, setFormData] = useState<TravelData>({
    carDistance: 0,
    carType: 'petrol',
    publicTransportDistance: 0,
    transportType: 'bus',
    flightDistance: 0,
    flightType: 'domestic',
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: name.includes('Distance') ? parseFloat(value) || 0 : value,
    }));
  };

  useEffect(() => {
    const emissions = calculateTravelEmissions(formData);
    onCalculate(emissions);
  }, [formData, onCalculate]);

  const carOptions = [
    { value: 'petrol', label: 'Petrol Car' },
    { value: 'diesel', label: 'Diesel Car' },
    { value: 'hybrid', label: 'Hybrid Car' },
    { value: 'electric', label: 'Electric Car' },
  ];

  const transportOptions = [
    { value: 'bus', label: 'Bus' },
    { value: 'train', label: 'Train' },
    { value: 'subway', label: 'Subway/Metro' },
  ];

  const flightOptions = [
    { value: 'domestic', label: 'Domestic Flight' },
    { value: 'international', label: 'International Flight' },
  ];

  return (
    <div className="space-y-8">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Travel & Transportation</h2>
        <p className="text-gray-600 mb-6">
          Enter your weekly travel distances and transportation methods to calculate your travel-related carbon footprint.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Car Travel</h3>
          <InputField
            label="Weekly Car Distance"
            name="carDistance"
            value={formData.carDistance.toString()}
            onChange={handleInputChange}
            unit="km/week"
            placeholder="0"
            helpText="Enter your average weekly car travel distance"
          />
          <SelectField
            label="Car Type"
            name="carType"
            value={formData.carType}
            onChange={handleInputChange}
            options={carOptions}
            helpText="Select your car's fuel type"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Public Transport</h3>
          <InputField
            label="Weekly Public Transport Distance"
            name="publicTransportDistance"
            value={formData.publicTransportDistance.toString()}
            onChange={handleInputChange}
            unit="km/week"
            placeholder="0"
            helpText="Enter your average weekly public transport distance"
          />
          <SelectField
            label="Transport Type"
            name="transportType"
            value={formData.transportType}
            onChange={handleInputChange}
            options={transportOptions}
            helpText="Select your most used public transport type"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Air Travel</h3>
          <InputField
            label="Weekly Flight Distance"
            name="flightDistance"
            value={formData.flightDistance.toString()}
            onChange={handleInputChange}
            unit="km/week"
            placeholder="0"
            helpText="Enter your average weekly flight distance"
          />
          <SelectField
            label="Flight Type"
            name="flightType"
            value={formData.flightType}
            onChange={handleInputChange}
            options={flightOptions}
            helpText="Select the type of flights you typically take"
          />
        </div>
      </div>

      <div className="bg-green-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-green-800 mb-2">Tips to Reduce Your Travel Footprint</h3>
        <ul className="list-disc list-inside text-green-700 space-y-1">
          <li>Use public transportation when possible</li>
          <li>Consider carpooling or ride-sharing</li>
          <li>Choose direct flights to reduce emissions</li>
          <li>Walk or cycle for short distances</li>
          <li>Consider switching to an electric or hybrid vehicle</li>
        </ul>
      </div>
    </div>
  );
};

export default Travel;