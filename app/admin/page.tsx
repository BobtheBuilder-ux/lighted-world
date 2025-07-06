'use client';

import { useState, useEffect } from 'react';
import { 
  Lightbulb, 
  Users, 
  BookOpen, 
  DollarSign, 
  TrendingUp,
  Settings,
  Plus,
  Edit,
  Trash2,
  Eye,
  Upload,
  Download,
  Search,
  Filter,
  MoreHorizontal,
  Calendar,
  Bell,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    { 
      label: 'Total Users', 
      value: '2,847', 
      change: '+12%', 
      icon: <Users className="w-6 h-6" />, 
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    { 
      label: 'Active Courses', 
      value: '24', 
      change: '+3', 
      icon: <BookOpen className="w-6 h-6" />, 
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    { 
      label: 'Monthly Revenue', 
      value: '$47,892', 
      change: '+18%', 
      icon: <DollarSign className="w-6 h-6" />, 
      color: 'text-amber-600',
      bgColor: 'bg-amber-50'
    },
    { 
      label: 'Course Completions', 
      value: '1,234', 
      change: '+25%', 
      icon: <TrendingUp className="w-6 h-6" />, 
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const recentUsers = [
    { id: 1, name: 'Sarah Chen', email: 'sarah@example.com', plan: 'Transformation', joined: '2024-01-20', status: 'Active' },
    { id: 2, name: 'Michael Rodriguez', email: 'michael@example.com', plan: 'Foundation', joined: '2024-01-19', status: 'Active' },
    { id: 3, name: 'Emily Johnson', email: 'emily@example.com', plan: 'Mastery', joined: '2024-01-18', status: 'Active' },
    { id: 4, name: 'David Park', email: 'david@example.com', plan: 'Transformation', joined: '2024-01-17', status: 'Inactive' },
    { id: 5, name: 'Lisa Thompson', email: 'lisa@example.com', plan: 'Foundation', joined: '2024-01-16', status: 'Active' }
  ];

  const recentCourses = [
    { id: 1, title: 'Discovering Your Core Values', instructor: 'Dr. Sarah Mitchell', students: 1250, status: 'Published', created: '2024-01-15' },
    { id: 2, title: 'Overcoming Limiting Beliefs', instructor: 'Marcus Thompson', students: 980, status: 'Published', created: '2024-01-10' },
    { id: 3, title: 'Building Authentic Confidence', instructor: 'Dr. Elena Rodriguez', students: 1450, status: 'Published', created: '2024-01-08' },
    { id: 4, title: 'Advanced Mindfulness Techniques', instructor: 'Dr. Sarah Mitchell', students: 0, status: 'Draft', created: '2024-01-20' },
    { id: 5, title: 'Leadership Through Authenticity', instructor: 'Marcus Thompson', students: 0, status: 'Review', created: '2024-01-18' }
  ];

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'users', label: 'Users', icon: <Users className="w-5 h-5" /> },
    { id: 'courses', label: 'Courses', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'pricing', label: 'Pricing', icon: <DollarSign className="w-5 h-5" /> },
    { id: 'content', label: 'Content', icon: <Upload className="w-5 h-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">LightedWorld</span>
              </Link>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">Admin</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="w-5 h-5" />
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium">A</span>
                </div>
                <div className="hidden md:block">
                  <div className="text-sm font-medium text-gray-900">Admin User</div>
                  <div className="text-xs text-gray-500">Super Admin</div>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-sm h-screen sticky top-0">
          <nav className="p-4">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    activeTab === item.id
                      ? 'bg-amber-50 text-amber-700 border border-amber-200'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {activeTab === 'overview' && (
            <div>
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
                <p className="text-gray-600">Manage your LightedWorld platform</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                          <p className="text-sm text-green-600">{stat.change} from last month</p>
                        </div>
                        <div className={`${stat.bgColor} ${stat.color} p-3 rounded-lg`}>
                          {stat.icon}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Recent Users */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-bold text-gray-900">Recent Users</h2>
                      <Button variant="outline" size="sm" onClick={() => setActiveTab('users')}>
                        View All
                      </Button>
                    </div>
                    <div className="space-y-4">
                      {recentUsers.map((user) => (
                        <div key={user.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <h3 className="font-medium text-gray-900">{user.name}</h3>
                            <p className="text-sm text-gray-600">{user.email}</p>
                            <p className="text-xs text-gray-500">{user.plan} • Joined {user.joined}</p>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {user.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Courses */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-bold text-gray-900">Recent Courses</h2>
                      <Button variant="outline" size="sm" onClick={() => setActiveTab('courses')}>
                        View All
                      </Button>
                    </div>
                    <div className="space-y-4">
                      {recentCourses.map((course) => (
                        <div key={course.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <h3 className="font-medium text-gray-900">{course.title}</h3>
                            <p className="text-sm text-gray-600">by {course.instructor}</p>
                            <p className="text-xs text-gray-500">{course.students} students • Created {course.created}</p>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            course.status === 'Published' ? 'bg-green-100 text-green-800' :
                            course.status === 'Draft' ? 'bg-gray-100 text-gray-800' :
                            'bg-amber-100 text-amber-800'
                          }`}>
                            {course.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">User Management</h1>
                  <p className="text-gray-600">Manage all platform users and their subscriptions</p>
                </div>
                <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                  <Plus className="mr-2 w-4 h-4" />
                  Add User
                </Button>
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        type="text"
                        placeholder="Search users..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Filter className="mr-2 w-4 h-4" />
                        Filter
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 w-4 h-4" />
                        Export
                      </Button>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-medium text-gray-900">User</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Plan</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Joined</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentUsers.map((user) => (
                          <tr key={user.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">
                              <div>
                                <div className="font-medium text-gray-900">{user.name}</div>
                                <div className="text-sm text-gray-600">{user.email}</div>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                                {user.plan}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <span className={`px-2 py-1 rounded-full text-sm ${
                                user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                              }`}>
                                {user.status}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-gray-600">{user.joined}</td>
                            <td className="py-3 px-4">
                              <div className="flex space-x-2">
                                <Button variant="ghost" size="sm">
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Edit className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <MoreHorizontal className="w-4 h-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'courses' && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Course Management</h1>
                  <p className="text-gray-600">Create, edit, and manage all courses</p>
                </div>
                <Link href="/admin/courses/new">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                    <Plus className="mr-2 w-4 h-4" />
                    Create Course
                  </Button>
                </Link>
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        type="text"
                        placeholder="Search courses..."
                        className="pl-10 w-64"
                      />
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Filter className="mr-2 w-4 h-4" />
                        Filter
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 w-4 h-4" />
                        Export
                      </Button>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Course</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Instructor</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Students</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Created</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentCourses.map((course) => (
                          <tr key={course.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">
                              <div className="font-medium text-gray-900">{course.title}</div>
                            </td>
                            <td className="py-3 px-4 text-gray-600">{course.instructor}</td>
                            <td className="py-3 px-4 text-gray-600">{course.students}</td>
                            <td className="py-3 px-4">
                              <span className={`px-2 py-1 rounded-full text-sm ${
                                course.status === 'Published' ? 'bg-green-100 text-green-800' :
                                course.status === 'Draft' ? 'bg-gray-100 text-gray-800' :
                                'bg-amber-100 text-amber-800'
                              }`}>
                                {course.status}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-gray-600">{course.created}</td>
                            <td className="py-3 px-4">
                              <div className="flex space-x-2">
                                <Button variant="ghost" size="sm">
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Edit className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'pricing' && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Pricing Management</h1>
                  <p className="text-gray-600">Configure subscription plans and pricing</p>
                </div>
                <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                  <Plus className="mr-2 w-4 h-4" />
                  Add Plan
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: 'Foundation', price: 97, users: 1250, active: true },
                  { name: 'Transformation', price: 197, users: 890, active: true },
                  { name: 'Mastery', price: 497, users: 320, active: true }
                ].map((plan, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">${plan.price}</div>
                      <div className="text-gray-600 mb-4">per month</div>
                      <div className="text-sm text-gray-600 mb-4">{plan.users} active subscribers</div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          Edit Plan
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'content' && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Content Management</h1>
                  <p className="text-gray-600">Upload and manage course materials</p>
                </div>
                <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                  <Upload className="mr-2 w-4 h-4" />
                  Upload Content
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Upload Video</h3>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Drag and drop video files here</p>
                      <p className="text-sm text-gray-500">or click to browse</p>
                      <Button variant="outline" className="mt-4">
                        Choose Files
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Upload Documents</h3>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Drag and drop documents here</p>
                      <p className="text-sm text-gray-500">PDF, DOC, PPT supported</p>
                      <Button variant="outline" className="mt-4">
                        Choose Files
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Uploads</h3>
                  <div className="space-y-3">
                    {[
                      { name: 'Introduction to Values.mp4', type: 'Video', size: '245 MB', date: '2024-01-20' },
                      { name: 'Values Worksheet.pdf', type: 'Document', size: '2.1 MB', date: '2024-01-19' },
                      { name: 'Meditation Guide.mp3', type: 'Audio', size: '15.3 MB', date: '2024-01-18' }
                    ].map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="font-medium text-gray-900">{file.name}</div>
                          <div className="text-sm text-gray-600">{file.type} • {file.size} • {file.date}</div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Platform Settings</h1>
                <p className="text-gray-600">Configure platform-wide settings and preferences</p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">General Settings</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Platform Name</label>
                        <Input defaultValue="LightedWorld" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Support Email</label>
                        <Input defaultValue="support@lightedworld.org" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Default Currency</label>
                        <select className="w-full p-2 border border-gray-300 rounded-md">
                          <option>USD</option>
                          <option>EUR</option>
                          <option>GBP</option>
                        </select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Email Settings</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">Welcome Email</div>
                          <div className="text-sm text-gray-600">Send welcome email to new users</div>
                        </div>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">Course Completion</div>
                          <div className="text-sm text-gray-600">Send email when user completes a course</div>
                        </div>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">Weekly Newsletter</div>
                          <div className="text-sm text-gray-600">Send weekly newsletter to subscribers</div>
                        </div>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Security Settings</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">Two-Factor Authentication</div>
                          <div className="text-sm text-gray-600">Require 2FA for admin accounts</div>
                        </div>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">Session Timeout</div>
                          <div className="text-sm text-gray-600">Auto-logout after inactivity</div>
                        </div>
                        <select className="p-2 border border-gray-300 rounded-md">
                          <option>30 minutes</option>
                          <option>1 hour</option>
                          <option>2 hours</option>
                        </select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-end">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                    Save Settings
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}