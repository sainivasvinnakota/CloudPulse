import React from 'react';
import { Cloud, Database, Cpu, BarChart2, Zap } from 'lucide-react';

const HowItWorksPage: React.FC = () => {
  const steps = [
    {
      icon: <Cloud className="h-12 w-12 text-green-500" />,
      title: "Connect Your Cloud",
      description: "Securely connect CloudPulse to your Vultr cloud infrastructure using our easy-to-setup API integration."
    },
    {
      icon: <Database className="h-12 w-12 text-green-500" />,
      title: "Data Collection",
      description: "CloudPulse continuously collects real-time data on CPU, memory, and network usage from your cloud resources."
    },
    {
      icon: <Cpu className="h-12 w-12 text-green-500" />,
      title: "Analysis & Processing",
      description: "Our advanced algorithms analyze the collected data to identify energy consumption patterns and inefficiencies."
    },
    {
      icon: <BarChart2 className="h-12 w-12 text-green-500" />,
      title: "Visualization & Insights",
      description: "View easy-to-understand dashboards and reports that provide insights into your cloud's energy usage and carbon footprint."
    },
    {
      icon: <Zap className="h-12 w-12 text-green-500" />,
      title: "Optimization Recommendations",
      description: "Receive personalized recommendations to optimize your cloud resources and reduce energy consumption."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">How CloudPulse Works</h1>
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start mb-12">
              <div className="flex-shrink-0 mr-6">
                <div className="bg-white p-3 rounded-full shadow-md">{step.icon}</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Ready to optimize your cloud?</h2>
          <a href="/signup" className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300 inline-block">
            Get Started with CloudPulse
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;