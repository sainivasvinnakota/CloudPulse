import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart2, Cloud, Zap } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">Monitor. Optimize. Reduce.</h1>
        <p className="text-2xl mb-8 text-gray-600">Powering a Greener Cloud</p>
        <div className="flex justify-center space-x-4">
          <Link to="/signup" className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300">
            Get Started
          </Link>
          <Link to="/how-it-works" className="bg-white text-green-500 px-6 py-3 rounded-md border border-green-500 hover:bg-green-50 transition duration-300">
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">Why Choose CloudPulse?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<BarChart2 className="h-12 w-12 text-green-500" />}
            title="Real-time Monitoring"
            description="Track your cloud energy consumption and carbon footprint in real-time."
          />
          <FeatureCard
            icon={<Zap className="h-12 w-12 text-green-500" />}
            title="Intelligent Optimization"
            description="Get AI-powered recommendations to reduce energy usage and costs."
          />
          <FeatureCard
            icon={<Cloud className="h-12 w-12 text-green-500" />}
            title="Carbon Footprint Tracking"
            description="Measure and reduce your cloud infrastructure's environmental impact."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to make your cloud greener?</h2>
          <p className="text-xl mb-8">Join CloudPulse today and start optimizing your cloud infrastructure.</p>
          <Link to="/signup" className="bg-white text-green-600 px-8 py-3 rounded-md hover:bg-green-100 transition duration-300 inline-flex items-center">
            Get Started <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default HomePage;