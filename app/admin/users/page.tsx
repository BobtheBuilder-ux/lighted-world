'use client';

import { useState } from 'react';
import { 
  Lightbulb, 
  ArrowLeft,
  Search,
  Filter,
  Download,
  Plus,
  Edit,
  Trash2,
  Eye,
  MoreHorizontal,
  Mail,
  Phone,
  Calendar,
  CreditCard,
  User,
  Ban,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function AdminUsers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedUsers, setSelectedUsers] = useState([]);

  const users = [
    {
      id: 1,
      name: 'Sarah Chen',
      email: 'sarah@example.com',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      plan: 'Transformation',
      status: 'Active',
      joined: '2024-01-20',
      lastLogin: '2024-01-22',
      coursesCompleted: 12,
      totalSpent: 594,
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      email: 'michael@example.com',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      plan: 'Foundation',
      status: 'Active',
      joined: '2024-01-19',
      lastLogin: '2024-01-21',
      coursesCompleted: 8,
      totalSpent: 291,
      phone: '+1 (555) 234-5678',
      location: 'Austin, TX'
    },
    {
      id: 3,
      name: 'Emily Johnson',
      email: 'emily@example.com',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      plan: 'Mastery',
      status: 'Active',
      joined: '2024-01-18',
      lastLogin: '2024-01-22',
      coursesCompleted: 24,
      totalSpent: 1491,
      phone: '+1 (555) 345-6789',
      location: 'Denver, CO'
    },
    {
      id: 4,
      name: 'David Park',
      email: 'david@example.com',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      plan: 'Transformation',
      status: 'Suspended',
      joined: '2024-01-17',
      lastLogin: '2024-01-20',
      coursesCompleted: 5,
      totalSpent: 197,
      phone: '+1 (555) 456-7890',
      location: 'Seattle, WA'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      email: 'lisa@example.com',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      plan: 'Foundation',
      status: 'Inactive',
      joined: '2024-01-16',
      lastLogin: '2024-01-18',
      coursesCompleted: 3,
      totalSpent: 97,
      phone: '+1 (555) 567-8901',
      location: 'Miami, FL'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Users', count: users.length },
    { id: 'active', label: 'Active', count: users.filter(u => u.status === 'Active').length },
    { id: 'inactive', label: 'Inactive', count: users.filter(u => u.status === 'Inactive').length },
    { id: 'suspended', label: 'Suspended', count: users.filter(u => u.status === 'Suspended').length }
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || user.status.toLowerCase() === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Inactive':
        return 'bg-gray-100 text-gray-800';
      case 'Suspended':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPlanColor = (plan) => {
    switch (plan) {
      case 'Foundation':
        return 'bg-blue-100 text-blue-800';
      case 'Transformation':
        return 'bg-amber-100 text-amber-800';
      case 'Mastery':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/admin" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Admin</span>
              </Link>
            </div>
            
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">LightedWorld</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">User Management</h1>
            <p className="text-gray-600">Manage all platform users and their subscriptions</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <Download className="mr-2 w-4 h-4" />
              Export Users
            </Button>
            <Button className="bg-amber-500 hover:bg-amber-600 text-white">
              <Plus className="mr-2 w-4 h-4" />
              Add User
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2 rounded-full transition-all duration-200 ${
                selectedFilter === filter.id
                  ? 'bg-amber-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Search and Actions */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search users by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-80"
                />
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 w-4 h-4" />
                  Advanced Filter
                </Button>
                {selectedUsers.length > 0 && (
                  <Button variant="outline" size="sm">
                    Bulk Actions ({selectedUsers.length})
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-4 px-6 font-medium text-gray-900">
                      <input type="checkbox" className="rounded" />
                    </th>
                    <th className="text-left py-4 px-6 font-medium text-gray-900">User</th>
                    <th className="text-left py-4 px-6 font-medium text-gray-900">Plan</th>
                    <th className="text-left py-4 px-6 font-medium text-gray-900">Status</th>
                    <th className="text-left py-4 px-6 font-medium text-gray-900">Progress</th>
                    <th className="text-left py-4 px-6 font-medium text-gray-900">Revenue</th>
                    <th className="text-left py-4 px-6 font-medium text-gray-900">Last Login</th>
                    <th className="text-left py-4 px-6 font-medium text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-6">
                        <input type="checkbox" className="rounded" />
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-3">
                          <img 
                            src={user.avatar}
                            alt={user.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-medium text-gray-900">{user.name}</div>
                            <div className="text-sm text-gray-600">{user.email}</div>
                            <div className="text-xs text-gray-500">{user.location}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`px-2 py-1 rounded-full text-sm font-medium ${getPlanColor(user.plan)}`}>
                          {user.plan}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`px-2 py-1 rounded-full text-sm font-medium ${getStatusColor(user.status)}`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="text-sm text-gray-900">{user.coursesCompleted} courses</div>
                        <div className="text-xs text-gray-500">completed</div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="text-sm font-medium text-gray-900">${user.totalSpent}</div>
                        <div className="text-xs text-gray-500">total spent</div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="text-sm text-gray-900">{user.lastLogin}</div>
                        <div className="text-xs text-gray-500">
                          Joined {user.joined}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="sm" title="View Profile">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" title="Edit User">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" title="Send Email">
                            <Mail className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" title="More Actions">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredUsers.length === 0 && (
              <div className="text-center py-12">
                <User className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No users found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-gray-600">
            Showing {filteredUsers.length} of {users.length} users
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" className="bg-amber-500 text-white">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}