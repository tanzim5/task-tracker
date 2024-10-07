import React from 'react'
import { Heart } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">TaskMaster</h2>
            <p className="mt-2 text-gray-400">Manage your tasks with ease</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-purple-400">About</a>
            <a href="#" className="hover:text-purple-400">Contact</a>
            <a href="#" className="hover:text-purple-400">Privacy Policy</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex items-center justify-center">
          <p className="text-gray-400">© 2024 TaskMaster. All rights reserved.</p>
          <Heart className="w-5 h-5 text-red-500 ml-2" />
        </div>
      </div>
    </footer>
  )
}

export default Footer