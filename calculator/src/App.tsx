import React, { useState } from 'react';
import { Calculator, Home, Car, Utensils, Trash2, Droplet, ShoppingBag, Building2, Leaf } from 'lucide-react';
import Navigation from './components/Navigation';
import HomeEnergy from './components/calculators/HomeEnergy';
import Travel from './components/calculators/Travel';
import Food from './components/calculators/Food';
import Waste from './components/calculators/Waste';
import Water from './components/calculators/Water';
import Lifestyle from './components/calculators/Lifestyle';
import Secondary from './components/calculators/Secondary';
import Offset from './components/calculators/Offset';
import ResultsDisplay from './components/ResultsDisplay';
import { TabType } from './types';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [totalEmissions, setTotalEmissions] = useState<number>(0);

  const tabs = [
    { id: 'home', label: 'Home Energy', icon: Home },
    { id: 'travel', label: 'Travel', icon: Car },
    { id: 'food', label: 'Food', icon: Utensils },
    { id: 'waste', label: 'Waste', icon: Trash2 },
    { id: 'water', label: 'Water Usage', icon: Droplet },
    { id: 'lifestyle', label: 'Lifestyle', icon: ShoppingBag },
    { id: 'secondary', label: 'Secondary', icon: Building2 },
    { id: 'offset', label: 'Offset Options', icon: Leaf },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-3">
            <Calculator className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-900">Carbon Footprint Calculator</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Navigation tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
          
          <div className="p-6">
            {activeTab === 'home' && (
              <HomeEnergy onCalculate={(emissions) => setTotalEmissions(emissions)} />
            )}
            {activeTab === 'travel' && (
              <Travel onCalculate={(emissions) => setTotalEmissions(emissions)} />
            )}
            {activeTab === 'food' && (
              <Food onCalculate={(emissions) => setTotalEmissions(emissions)} />
            )}
            {activeTab === 'waste' && (
              <Waste onCalculate={(emissions) => setTotalEmissions(emissions)} />
            )}
            {activeTab === 'water' && (
              <Water onCalculate={(emissions) => setTotalEmissions(emissions)} />
            )}
            {activeTab === 'lifestyle' && (
              <Lifestyle onCalculate={(emissions) => setTotalEmissions(emissions)} />
            )}
            {activeTab === 'secondary' && (
              <Secondary onCalculate={(emissions) => setTotalEmissions(emissions)} />
            )}
            {activeTab === 'offset' && <Offset />}
          </div>
        </div>

        <ResultsDisplay totalEmissions={totalEmissions} />
      </main>

      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Carbon Footprint Calculator. All calculations are based on standardized emission factors.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;