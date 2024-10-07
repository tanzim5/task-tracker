import React from 'react'

interface TabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => {
  const tabs = ['tasks', 'to-dos', 'notes', 'tracks']

  return (
    <div className="flex justify-center space-x-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
            activeTab === tab
              ? 'bg-purple-600 text-white shadow-lg transform -translate-y-1'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  )
}

export default Tabs