import React, { useState, useEffect } from 'react';
import { calculateHomeEmissions } from '../../utils/calculations';
import InputField from '../ui/InputField';

interface HomeEnergyProps {
  onCalculate: (emissions: number) => void;
}

const HomeEnergy: React.FC<HomeEnergyProps> = ({ onCalculate }) => {
  const [formData, setFormData] = useState({
    electricity: '',
    naturalGas: '',
    heatingOil: '',
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const emissions = calculateHomeEmissions({
      electricity: parseFloat(formData.electricity) || 0,
      naturalGas: parseFloat(formData.naturalGas) || 0,
      heatingOil: parseFloat(formData.heatingOil) || 0,
    });
    onCalculate(emissions);
  }, [formData, onCalculate]);

  return (
    <div className="space-y-8">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Home Energy Usage</h2>
        <p className="text-gray-600 mb-6">
          Enter your monthly energy consumption to calculate your home's carbon footprint.
          All calculations are based on standardized emission factors.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <InputField
          label="Electricity Usage"
          name="electricity"
          value={formData.electricity}
          onChange={handleInputChange}
          unit="kWh/month"
          placeholder="0"
          helpText="Enter your average monthly electricity consumption"
        />

        <InputField
          label="Natural Gas Usage"
          name="naturalGas"
          value={formData.naturalGas}
          onChange={handleInputChange}
          unit="m³/month"
          placeholder="0"
          helpText="Enter your average monthly natural gas consumption"
        />

        <InputField
          label="Heating Oil Usage"
          name="heatingOil"
          value={formData.heatingOil}
          onChange={handleInputChange}
          unit="L/month"
          placeholder="0"
          helpText="Enter your average monthly heating oil consumption"
        />
      </div>

      <div className="bg-green-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-green-800 mb-2">Tips to Reduce Your Energy Footprint</h3>
        <ul className="list-disc list-inside text-green-700 space-y-1">
          <li>Switch to LED bulbs and energy-efficient appliances</li>
          <li>Improve home insulation to reduce heating/cooling needs</li>
          <li>Consider installing solar panels or switching to renewable energy</li>
          <li>Use a programmable thermostat to optimize heating and cooling</li>
        </ul>
      </div>
    </div>
  );
};

export default HomeEnergy;