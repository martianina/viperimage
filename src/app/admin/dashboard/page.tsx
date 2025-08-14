'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { MdSecurity } from 'react-icons/md';
import { FaUsers, FaUserCheck, FaUserClock } from 'react-icons/fa';

import Widget from '@/components/widget/Widget';
import AdminUserTable from '@/components/admin/AdminUserTable';
import AdminStatsChart from '@/components/admin/AdminStatsChart';
import AdminActivityFeed from '@/components/admin/AdminActivityFeed';

interface AdminStats {
  totalUsers: number;
  newUsersThisWeek: number;
  verifiedUsers: number;
  adminUsers: number;
  recentSignups: any[];
}

const AdminDashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState<AdminStats>({
    totalUsers: 0,
    newUsersThisWeek: 0,
    verifiedUsers: 0,
    adminUsers: 0,
    recentSignups: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'loading') return;

    if (!session) {
      router.push('/auth/sign-in');
      return;
    }

    // Check if user is admin
    checkAdminStatus();
    fetchAdminStats();
  }, [session, status, router]);

  const checkAdminStatus = async () => {
    try {
      const response = await fetch('/api/admin/check');
      if (!response.ok) {
        router.push('/');
        return;
      }
    } catch (error) {
      console.error('Error checking admin status:', error);
      router.push('/');
    }
  };

  const fetchAdminStats = async () => {
    try {
      const response = await fetch('/api/admin/stats');
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (error) {
      console.error('Error fetching admin stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600">Manage users and monitor system activity</p>
      </div>

      {/* Stats Cards */}
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <Widget
          icon={<FaUsers className="h-7 w-7" />}
          title={'Total Users'}
          subtitle={stats.totalUsers.toString()}
        />
        <Widget
          icon={<FaUserClock className="h-6 w-6" />}
          title={'New This Week'}
          subtitle={stats.newUsersThisWeek.toString()}
        />
        <Widget
          icon={<FaUserCheck className="h-7 w-7" />}
          title={'Verified Users'}
          subtitle={stats.verifiedUsers.toString()}
        />
        <Widget
          icon={<MdSecurity className="h-6 w-6" />}
          title={'Admin Users'}
          subtitle={stats.adminUsers.toString()}
        />
      </div>

      {/* Charts and Tables */}
      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* User Growth Chart */}
        <div className="rounded-[20px] bg-white p-6 shadow-xl">
          <h3 className="text-lg font-semibold mb-4">User Growth</h3>
          <AdminStatsChart />
        </div>

        {/* Recent Activity */}
        <div className="rounded-[20px] bg-white p-6 shadow-xl">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <AdminActivityFeed />
        </div>
      </div>

      {/* User Management Table */}
      <div className="mt-5">
        <div className="rounded-[20px] bg-white p-6 shadow-xl">
          <h3 className="text-lg font-semibold mb-4">User Management</h3>
          <AdminUserTable />
        </div>
      </div>

      {/* Calendar and Quick Actions */}
      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* Quick Actions */}
        <div className="rounded-[20px] bg-white p-6 shadow-xl">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full rounded-lg bg-orange-600 px-4 py-2 text-white hover:bg-orange-700 transition-colors">
              Export User Data
            </button>
            <button className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors">
              Send Newsletter
            </button>
            <button className="w-full rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700 transition-colors">
              System Health Check
            </button>
          </div>
        </div>

        {/* Calendar */}
        <div className="lg:col-span-2 rounded-[20px] bg-white p-6 shadow-xl">
          <h3 className="text-lg font-semibold mb-4">Calendar</h3>
          <div className="text-gray-500 text-center py-8">
            Calendar component removed
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 