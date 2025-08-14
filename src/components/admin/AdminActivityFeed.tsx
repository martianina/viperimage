'use client';
import { FaUserPlus, FaUserCheck, FaUserEdit, FaUserTimes } from 'react-icons/fa';

interface Activity {
  id: string;
  type: 'signup' | 'verification' | 'role_change' | 'deletion';
  user: string;
  timestamp: string;
  description: string;
}

const AdminActivityFeed = () => {
  // Mock activity data - in real app, this would come from API
  const activities: Activity[] = [
    {
      id: '1',
      type: 'signup',
      user: 'john@example.com',
      timestamp: '2024-01-15T10:30:00Z',
      description: 'New user signed up',
    },
    {
      id: '2',
      type: 'verification',
      user: 'jane@example.com',
      timestamp: '2024-01-15T09:15:00Z',
      description: 'Email verified',
    },
    {
      id: '3',
      type: 'role_change',
      user: 'admin@example.com',
      timestamp: '2024-01-15T08:45:00Z',
      description: 'Role changed to admin',
    },
    {
      id: '4',
      type: 'signup',
      user: 'bob@example.com',
      timestamp: '2024-01-15T08:20:00Z',
      description: 'New user signed up',
    },
  ];

  const getActivityIcon = (type: Activity['type']) => {
    switch (type) {
      case 'signup':
        return <FaUserPlus className="h-4 w-4 text-green-600" />;
      case 'verification':
        return <FaUserCheck className="h-4 w-4 text-blue-600" />;
      case 'role_change':
        return <FaUserEdit className="h-4 w-4 text-orange-600" />;
      case 'deletion':
        return <FaUserTimes className="h-4 w-4 text-red-600" />;
      default:
        return <FaUserPlus className="h-4 w-4 text-gray-600" />;
    }
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));

    if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`;
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)}h ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
          <div className="flex-shrink-0 mt-1">
            {getActivityIcon(activity.type)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900">
              {activity.description}
            </p>
            <p className="text-sm text-gray-500">
              {activity.user}
            </p>
          </div>
          <div className="flex-shrink-0">
            <p className="text-xs text-gray-400">
              {formatTime(activity.timestamp)}
            </p>
          </div>
        </div>
      ))}
      
      {activities.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No recent activity
        </div>
      )}
    </div>
  );
};

export default AdminActivityFeed; 