import React from 'react';
import { Github, Linkedin, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-center sm:text-left">
            <h2 className="text-sm font-semibold text-gray-900">Prashant Singh Mangat</h2>
            <p className="text-sm text-gray-600">Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://prashantsinghmangat.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Globe className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/prashantsingh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/prashantsinghmangat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Prashant Kanban Board
          </div>
        </div>
      </div>
    </footer>
  );
};