import React, { useState } from 'react';
import { Check } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [unit, setUnit] = useState<'metric tons' | 'kilograms'>('metric tons');

  const plans = [
    {
      name: 'Last 30 Day Total',
      img1: '#',
      price: 1.05, // Assume this is in metric tons
      features: [
        'CO2e',
      ],
      cta: 'Get Started',
      highlighted: true,
      img2: '#',
      cost: '$2,679.94',
    },
    {
      name: 'Projected 30 Day Total',
      img1: '#',
      price: 0.85, // Assume this is in metric tons
      features: [
        'CO2e',
      ],
      cta: 'Go Pro',
      highlighted: true,
      img2: '#',
      cost: '$2,166.04',
    },
    {
      name: 'Monthly Savings equal To',
      img1: 'https://cdn.vectorstock.com/i/preview-2x/38/20/green-leaves-icon-vector-24613820.jpg',
      price: '3', // No conversion applied
      features: [
        'Tree seedlings grown',
      ],
      cta: 'Contact Sales',
      highlighted: true,
      img2: 'https://img.icons8.com/pulsar-gradient/48/calendar-plus.png',
      cost: '$513.9',
    },
  ];

  // const convertPrice = (price: number) => {
  //   return unit === 'metric tons' 
  //     ? `${price} <span style="font-weight: 300; font-size: 0.875rem;">Metric Tons</span>` 
  //     : `${(price * 1016.04691).toFixed(2)} <span style="font-weight: 300; font-size: 0.875rem;">KGs</span>`;
  // };
  const convertPrice = (price: number) => {
    return (
      <>
        {unit === 'metric tons' ? (
          <>
            {price} <span className="text-sm font-light">Metric Tons</span>
          </>
        ) : (
          <>
            {(price * 1016.04691).toFixed(2)} <span className="font-light text-sm">KGs</span>
          </>
        )}
      </>
    );
  };
  

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">CO2e Units</h1>
          <div className="inline-flex border rounded-lg overflow-hidden">
            <button
              className={`px-4 py-2 font-semibold transition duration-300 ease-in-out ${
                unit === 'metric tons' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'
              }`}
              onClick={() => setUnit('metric tons')}
            >
              Metric Tons
            </button>
            <button
              className={`px-4 py-2 font-semibold transition duration-300 ease-in-out ${
                unit === 'kilograms' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'
              }`}
              onClick={() => setUnit('kilograms')}
            >
              Kilograms
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              {...plan}
              // Only convert price for the first two plans
              price={index < 2 ? convertPrice(plan.price as number) : plan.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const PricingCard: React.FC<{
  name: string;
  img1: string;
  price: string | number;
  features: string[];
  cta: string;
  highlighted?: boolean;
  img2: string;
  cost: string;
}> = ({ name, img1, price, features, cta, highlighted = false, img2, cost}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-8 text-center flex flex-col ${
        highlighted ? 'ring-2 ring-green-500' : ''
      }`}
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">{name}</h2>
      <p className="text-4xl font-bold mb-6 text-gray-900"><img src={img1} alt="" width="40px"/><span>{price}</span></p>
      <ul className="mb-8 flex flex-col items-center"> {/* Add flex and items-center here */}
        {features.map((feature, index) => (
          <li key={index} className="mb-2 w-full text-center"> {/* Add w-full and text-center here */}
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <hr className="border-green-500"/>
      <p className="text-4xl font-bold mb-6 text-gray-900 pt-9"><img src={img2} alt="" width="40px"/><span>{cost}</span></p>
      {/* <button
        className={`w-full py-2 px-4 rounded-md font-semibold ${
          highlighted
            ? 'bg-green-500 text-white hover:bg-green-600'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        } transition duration-300`}
      >
        {cta}
      </button> */}
    </div>
  );
};

export default PricingPage;
