import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Cloud, Zap, Cpu, Server } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const [yearlyData, setYearlyData] = useState([]);
  const [realTimeData, setRealTimeData] = useState([]);

  useEffect(() => {
    // Simulated data fetching
    const fetchYearlyData = () => {
      const data = [
        { year: '2020', footprint: 120 },
        { year: '2021', footprint: 100 },
        { year: '2022', footprint: 80 },
        { year: '2023', footprint: 60 },
      ];
      setYearlyData(data);
    };

    const fetchRealTimeData = () => {
      const data = [
        { time: '00:00', cpu: 30, memory: 50, network: 20 },
        { time: '04:00', cpu: 40, memory: 60, network: 25 },
        { time: '08:00', cpu: 65, memory: 75, network: 40 },
        { time: '12:00', cpu: 80, memory: 90, network: 60 },
        { time: '16:00', cpu: 70, memory: 85, network: 55 },
        { time: '20:00', cpu: 50, memory: 70, network: 35 },
      ];
      setRealTimeData(data);
    };

    fetchYearlyData();
    fetchRealTimeData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">CloudPulse Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <DashboardCard title="Year-wise Cloud Carbon Footprints">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={yearlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="footprint" fill="#4ade80" name="Carbon Footprint (tons CO2e)" />
            </BarChart>
          </ResponsiveContainer>
        </DashboardCard>

        <DashboardCard title="Real-Time Resource Usage">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={realTimeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="cpu" stroke="#3b82f6" name="CPU Usage (%)" />
              <Line type="monotone" dataKey="memory" stroke="#ef4444" name="Memory Usage (%)" />
              <Line type="monotone" dataKey="network" stroke="#f59e0b" name="Network Usage (Mbps)" />
            </LineChart>
          </ResponsiveContainer>
        </DashboardCard>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <MetricCard title="Total Carbon Footprint" value="60 tons CO2e" icon={<Cloud className="h-8 w-8 text-green-500" />} />
        <MetricCard title="Energy Consumption" value="1,200 kWh" icon={<Zap className="h-8 w-8 text-yellow-500" />} />
        <MetricCard title="Average CPU Usage" value="65%" icon={<Cpu className="h-8 w-8 text-blue-500" />} />
        <MetricCard title="Active Instances" value="24" icon={<Server className="h-8 w-8 text-purple-500" />} />
      </div>
    </div>
  );
};

const DashboardCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
      {children}
    </div>
  );
};

const MetricCard: React.FC<{ title: string; value: string; icon: React.ReactNode }> = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
      <div className="mr-4">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
};

export default DashboardPage;