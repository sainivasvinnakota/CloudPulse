import React from 'react';
import { Users, Leaf, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">About CloudPulse</h1>
        
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-600 mb-6">
            CloudPulse is on a mission to make cloud computing more sustainable and environmentally friendly. We believe that by optimizing energy consumption and reducing carbon footprints, we can help businesses thrive while minimizing their impact on the planet.
          </p>
          <p className="text-lg text-gray-600">
            Founded in 2023 by a team of cloud experts and environmental enthusiasts, CloudPulse has quickly become a leader in cloud sustainability solutions. Our innovative platform leverages cutting-edge technology to provide real-time insights and actionable recommendations for businesses of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ValueCard
            icon={<Users className="h-12 w-12 text-green-500" />}
            title="Customer-Centric"
            description="We put our customers first, ensuring that our solutions meet their unique needs and drive real value for their businesses."
          />
          <ValueCard
            icon={<Leaf className="h-12 w-12 text-green-500" />}
            title="Sustainability-Focused"
            description="Our commitment to environmental sustainability is at the core of everything we do, from our product development to our business practices."
          />
          <ValueCard
            icon={<Globe className="h-12 w-12 text-green-500" />}
            title="Global Impact"
            description="We're working towards a future where cloud computing is not just powerful and efficient, but also environmentally responsible on a global scale."
          />
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Join Us in Our Mission</h2>
          <p className="text-lg text-gray-600 mb-8">
            Whether you're a small startup or a large enterprise, CloudPulse is here to help you optimize your cloud infrastructure and reduce your environmental impact. Together, we can build a more sustainable future for cloud computing.
          </p>
          <a href="/contact" className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

const ValueCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default AboutPage;