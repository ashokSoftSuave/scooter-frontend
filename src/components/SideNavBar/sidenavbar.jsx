import React, { useState } from 'react';
import { ClipboardList, History, FileSpreadsheet, AlertCircle, BookOpen, Settings, Menu } from 'lucide-react';
import Logo from '../../Images/logo.png';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('my-task');

  const navigation = useNavigate();

  const handleClickNavigation = (path) => {
    navigation(path);
    setActiveItem(path);
  }

  const navItems = [
    {
      id: 'my-task',
      title: 'My Task',
      icon: <ClipboardList className="w-5 h-5" />
    },
    {
      id: 'task-history',
      title: 'My Task History',
      icon: <History className="w-5 h-5" />
    },
    {
      id: 'task-assignment',
      title: 'Task Assignment',
      icon: <FileSpreadsheet className="w-5 h-5" />
    },
    {
      id: 'issue-overview',
      title: 'Issue Overview',
      icon: <AlertCircle className="w-5 h-5" />
    },
    {
      id: 'journal-overview',
      title: 'Journal Overview',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      id: 'settings',
      title: 'Settings',
      icon: <Settings className="w-5 h-5" />
    }
  ];

  return (
    <div className={`min-h-screen bg-white shadow-lg transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
      {/* Header with Logo */}
      <div className="flex items-center justify-between p-4 border-b">
      <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          <Menu className="w-6 h-6 text-gray-600" />
        </button>
        <div className="flex items-center mb-1">
          {isOpen && (
            <img
              src={Logo}
              alt="Scooter Logo"
            //   className="h-8"
            />
          )}
        </div>
       
      </div>

      {/* Navigation Items */}
      <nav className="mt-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClickNavigation(item.id)}
            className={`w-full flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 transition-colors
              ${activeItem === item.id ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : ''}`}
          >
            <span className="inline-flex items-center justify-center">
              {item.icon}
            </span>
            {isOpen && (
              <span className="ml-3 text-sm font-medium">
                {item.title}
              </span>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}

