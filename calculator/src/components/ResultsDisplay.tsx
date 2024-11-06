import React from 'react';
import { TreeDeciduous } from 'lucide-react';

interface ResultsDisplayProps {
  totalEmissions: number;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ totalEmissions }) => {
  const formatEmissions = (value: number) => {
    return value.toFixed(2);
  };

  const getEmissionCategory = (emissions: number) => {
    if (emissions < 5) return 'Low';
    if (emissions < 10) return 'Moderate';
    return 'High';
  };

  const getBackgroundColor = (emissions: number) => {
    if (emissions < 5) return 'bg-green-50';
    if (emissions < 10) return 'bg-yellow-50';
    return 'bg-red-50';
  };

  const getTextColor = (emissions: number) => {
    if (emissions < 5) return 'text-green-700';
    if (emissions < 10) return 'text-yellow-700';
    return 'text-red-700';
  };

  return (
    <div className={`mt-8 p-6 rounded-lg ${getBackgroundColor(totalEmissions)}`}>
      <div className="flex items-start space-x-4">
        <div className={`p-2 rounded-full ${getBackgroundColor(totalEmissions)}`}>
          <TreeDeciduous className={`h-6 w-6 ${getTextColor(totalEmissions)}`} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Your Carbon Footprint
          </h3>
          <p className={`text-3xl font-bold ${getTextColor(totalEmissions)}`}>
            {formatEmissions(totalEmissions)} tonnes CO₂e/year
          </p>
          <p className={`mt-1 ${getTextColor(totalEmissions)}`}>
            {getEmissionCategory(totalEmissions)} Impact
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;