import React from 'react'
import { Zap } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Zap className="w-10 h-10 text-purple-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">TaskMaster</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-purple-600">Dashboard</a></li>
            <li><a href="#" className="text-gray-600 hover:text-purple-600">Profile</a></li>
            <li><a href="#" className="text-gray-600 hover:text-purple-600">Settings</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header