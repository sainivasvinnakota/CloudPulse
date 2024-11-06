import React from 'react';
import { Leaf, TreePine, Wind, Sun } from 'lucide-react';

const Offset: React.FC = () => {
  const offsetOptions = [
    {
      icon: TreePine,
      title: 'Tree Planting',
      description: 'Support reforestation projects that absorb CO₂',
      impact: '1 tree absorbs ~22kg CO₂ annually',
      cost: '$10-25 per tree',
    },
    {
      icon: Wind,
      title: 'Renewable Energy',
      description: 'Invest in wind and solar energy projects',
      impact: 'Offsets ~1 tonne CO₂ per $15 invested',
      cost: '$15-30 per tonne CO₂',
    },
    {
      icon: Sun,
      title: 'Solar Power',
      description: 'Support solar panel installations',
      impact: 'Offsets ~2 tonnes CO₂ per installation',
      cost: '$20-35 per tonne CO₂',
    },
    {
      icon: Leaf,
      title: 'Conservation',
      description: 'Protect existing forests and ecosystems',
      impact: 'Preserves ~100 tonnes CO₂ per hectare',
      cost: '$10-20 per tonne CO₂',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Carbon Offset Options</h2>
        <p className="text-gray-600 mb-6">
          Explore ways to offset your carbon footprint through verified environmental projects.
          These programs help neutralize emissions you cannot reduce directly.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {offsetOptions.map((option, index) => {
          const Icon = option.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border border-green-100 hover:border-green-300 transition-colors"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{option.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{option.description}</p>
              <div className="space-y-2">
                <p className="text-sm text-green-600">
                  <strong>Impact:</strong> {option.impact}
                </p>
                <p className="text-sm text-green-600">
                  <strong>Average Cost:</strong> {option.cost}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-green-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-green-800 mb-4">How Carbon Offsetting Works</h3>
        <div className="space-y-4">
          <p className="text-green-700">
            1. Calculate your carbon footprint using the calculator tabs above
          </p>
          <p className="text-green-700">
            2. Choose offset projects that match your values and budget
          </p>
          <p className="text-green-700">
            3. Purchase carbon credits through verified providers
          </p>
          <p className="text-green-700">
            4. Receive certification of your offset contribution
          </p>
        </div>
        
        <div className="mt-6 p-4 bg-white rounded-lg border border-green-200">
          <h4 className="text-md font-semibold text-gray-900 mb-2">Verified Offset Programs</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Gold Standard</li>
            <li>Verified Carbon Standard (VCS)</li>
            <li>Climate Action Reserve</li>
            <li>American Carbon Registry</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Offset;