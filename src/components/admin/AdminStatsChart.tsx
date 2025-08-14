'use client';
import { useState, useEffect } from 'react';

const AdminStatsChart = () => {
  const [chartData, setChartData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'New Users',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
      },
    ],
  });

  useEffect(() => {
    // In a real app, you'd fetch actual data here
    // For now, we'll use mock data
  }, []);

  return (
    <div className="h-64 flex items-center justify-center">
      <div className="text-center">
        <div className="text-3xl font-bold text-blue-600 mb-2">📈</div>
        <p className="text-gray-600">User Growth Chart</p>
        <p className="text-sm text-gray-500 mt-2">
          Chart integration coming soon...
        </p>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span>Total Users:</span>
            <span className="font-semibold">1,234</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Growth Rate:</span>
            <span className="font-semibold text-green-600">+15%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminStatsChart; 