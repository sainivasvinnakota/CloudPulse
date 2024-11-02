import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, Zap, Cloud, TrendingUp, Shield, Settings } from 'lucide-react';

const FeaturesPage: React.FC = () => {
  const features = [
    {
      icon: <BarChart2 className="h-12 w-12 text-green-500" />,
      title: "Real-time Energy Monitoring",
      description: "Track your cloud infrastructure's energy consumption in real-time, providing instant insights into usage patterns and potential optimizations.",
      link: "/dashboard#energy-monitoring"
    },
    {
      icon: <Zap className="h-12 w-12 text-green-500" />,
      title: "Resource Optimization",
      description: "Leverage AI-powered recommendations to optimize your cloud resources, reducing waste and improving overall efficiency.",
      link: "/dashboard#resource-optimization"
    },
    {
      icon: <Cloud className="h-12 w-12 text-green-500" />,
      title: "Cloud Carbon Footprint Tracking",
      description: "Measure and visualize your cloud infrastructure's carbon footprint, helping you make environmentally conscious decisions.",
      link: "/dashboard#carbon-footprint"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-green-500" />,
      title: "Performance Analytics",
      description: "Gain deep insights into your application's performance and its correlation with energy consumption.",
      link: "/dashboard#performance-analytics"
    },
    {
      icon: <Shield className="h-12 w-12 text-green-500" />,
      title: "Compliance Reporting",
      description: "Generate comprehensive reports to meet energy efficiency and sustainability compliance requirements.",
      link: "/dashboard#compliance-reporting"
    },
    {
      icon: <Settings className="h-12 w-12 text-green-500" />,
      title: "Automated Scaling",
      description: "Set up intelligent, energy-aware auto-scaling rules to optimize resource allocation based on demand.",
      link: "/dashboard#automated-scaling"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">CloudPulse Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; link: string }> = ({ icon, title, description, link }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-center text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4 text-center">{description}</p>
      <div className="text-center">
        <Link to={link} className="text-green-500 hover:text-green-600 font-medium">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default FeaturesPage;