import React from 'react';
import { Layout, Plus, LogOut, ExternalLink } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

interface HeaderProps {
  onAddTask: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onAddTask }) => {
  const { user, logout } = useAuthStore();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 space-y-4 sm:space-y-0">
          <div className="flex items-center">
            <Layout className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0" />
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Prashant Kanban Board</h1>
              <a
                href="https://prashantsinghmangat.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-indigo-600 hover:text-indigo-500 flex items-center mt-1"
              >
                Portfolio <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600 hidden sm:inline">Welcome, {user}</span>
            <button
              onClick={onAddTask}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Task
            </button>
            <button
              onClick={logout}
              className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <LogOut className="h-4 w-4 mr-1" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};