import React from 'react';
import { LucideIcon } from 'lucide-react';
import { TabType } from '../types';

interface Tab {
  id: TabType;
  label: string;
  icon: LucideIcon;
}

interface NavigationProps {
  tabs: Tab[];
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const Navigation: React.FC<NavigationProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <nav className="border-b border-gray-200">
      <div className="flex overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                flex items-center px-4 py-3 text-sm font-medium min-w-max
                ${
                  activeTab === tab.id
                    ? 'border-b-2 border-green-500 text-green-600'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              <Icon className="h-5 w-5 mr-2" />
              {tab.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;