import React from 'react';

// Admin Imports

// Icon Imports
import {
  MdHome,
  MdBarChart,
  MdPerson,
  MdLock,
} from 'react-icons/md';
import { FaUserPlus, FaClipboardList, FaChartBar, FaFlask, FaShieldAlt, FaBoxes, FaDatabase, FaFileAlt, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { IoDocuments } from 'react-icons/io5';

const routes = [
  {
    name: 'Ginger Science',
    layout: '/admin',
    path: 'default',
    icon: <MdHome className="h-6 w-6" />,
  },
  {
    name: 'SPF Study',
    layout: '/admin',
    path: 'spf-study',
    icon: <FaFlask className="h-6 w-6" />,
    isDropdown: true,
    children: [
      {
        name: 'Study Enrollment',
        layout: '/admin',
        path: 'enrollment',
        customPath: '/enrollment',
        icon: <FaUserPlus className="h-6 w-6" />,
      },
      {
        name: 'Product Review',
        layout: '/admin',
        path: 'review',
        customPath: '/review',
        icon: <FaClipboardList className="h-6 w-6" />,
      },
      {
        name: 'User Survey',
        layout: '/admin',
        path: 'survey',
        customPath: '/survey',
        icon: <FaChartBar className="h-6 w-6" />,
      },
      {
        name: 'Protocol',
        layout: '/admin',
        path: 'protocol',
        customPath: '/protocol',
        icon: <IoDocuments className="h-6 w-6" />,
      },
      {
        name: 'Regulatory',
        layout: '/admin',
        path: 'regulatory',
        customPath: '/regulatory',
        icon: <FaShieldAlt className="h-6 w-6" />,
      },
      {
        name: 'Products',
        layout: '/admin',
        path: 'products',
        customPath: '/products',
        icon: <FaBoxes className="h-6 w-6" />,
      },
    ],
  },
  {
    name: 'Research',
    layout: '/admin',
    path: 'research',
    customPath: '/research',
    icon: <FaFlask className="h-6 w-6" />,
  },
  {
    name: 'About',
    layout: '/admin',
    path: 'about',
    icon: <FaDatabase className="h-6 w-6" />,
    isDropdown: true,
    children: [
      {
        name: 'MC1R Data Foundation',
        layout: '/admin',
        path: 'mc1r',
        customPath: '/mc1r',
        icon: <FaDatabase className="h-6 w-6" />,
      },
      {
        name: 'Whitepaper',
        layout: '/admin',
        path: 'whitepaper',
        customPath: '/whitepaper',
        icon: <FaFileAlt className="h-6 w-6" />,
      },
    ],
  },
  {
    name: 'Profile',
    layout: '/admin',
    path: 'profile',
    icon: <MdPerson className="h-6 w-6" />,
  },
  {
    name: 'Sign In',
    layout: '/auth',
    path: 'sign-in',
    icon: <MdLock className="h-6 w-6" />,
  },
];
export default routes;
