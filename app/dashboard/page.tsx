'use client';

import { useState, useEffect } from 'react';
import { 
  Lightbulb, 
  BookOpen, 
  Play, 
  Users, 
  Award, 
  Calendar, 
  Clock, 
  TrendingUp,
  CheckCircle,
  Star,
  MessageCircle,
  Download,
  ArrowRight,
  Bell,
  Settings,
  User,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user] = useState({
    name: 'Sarah Chen',
    email: 'sarah@example.com',
    plan: 'Transformation',
    joinDate: '2024-01-15',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  });

  const stats = [
    { label: 'Courses Completed', value: '12', icon: <BookOpen className="w-6 h-6" />, color: 'text-blue-600' },
    { label: 'Hours Learned', value: '48', icon: <Clock className="w-6 h-6" />, color: 'text-green-600' },
    { label: 'Achievements', value: '8', icon: <Award className="w-6 h-6" />, color: 'text-amber-600' },
    { label: 'Community Points', value: '1,250', icon: <Star className="w-6 h-6" />, color: 'text-purple-600' }
  ];

  const currentCourses = [
    {
      id: 1,
      title: 'Discovering Your Core Values',
      instructor: 'Dr. Sarah Mitchell',
      progress: 75,
      nextLesson: 'Values in Action',
      duration: '45 min',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'Overcoming Limiting Beliefs',
      instructor: 'Marcus Thompson',
      progress: 40,
      nextLesson: 'Belief Transformation Techniques',
      duration: '35 min',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'Building Authentic Confidence',
      instructor: 'Dr. Elena Rodriguez',
      progress: 20,
      nextLesson: 'Understanding Confidence vs. Arrogance',
      duration: '40 min',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Weekly Group Coaching Call',
      date: '2024-01-25',
      time: '7:00 PM EST',
      type: 'Group Call',
      instructor: 'Dr. Sarah Mitchell'
    },
    {
      id: 2,
      title: 'Values Clarification Workshop',
      date: '2024-01-28',
      time: '2:00 PM EST',
      type: 'Workshop',
      instructor: 'Marcus Thompson'
    },
    {
      id: 3,
      title: '1-on-1 Coaching Session',
      date: '2024-01-30',
      time: '3:00 PM EST',
      type: 'Personal',
      instructor: 'Dr. Elena Rodriguez'
    }
  ];

  const achievements = [
    { id: 1, title: 'First Course Completed', icon: '🎓', earned: true },
    { id: 2, title: 'Values Explorer', icon: '🧭', earned: true },
    { id: 3, title: 'Community Contributor', icon: '🤝', earned: true },
    { id: 4, title: 'Transformation Seeker', icon: '🌟', earned: false },
    { id: 5, title: 'Mindfulness Master', icon: '🧘', earned: false },
    { id: 6, title: 'Purpose Pioneer', icon: '🚀', earned: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">LightedWorld</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="w-5 h-5" />
              </Button>
              <div className="flex items-center space-x-3">
                <img 
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <div className="text-sm font-medium text-gray-900">{user.name}</div>
                  <div className="text-xs text-gray-500">{user.plan} Plan</div>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <Settings className="w-5 h-5" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-4 py-3 space-y-3">
              <div className="flex items-center space-x-3 py-2">
                <img 
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <div className="text-sm font-medium text-gray-900">{user.name}</div>
                  <div className="text-xs text-gray-500">{user.plan} Plan</div>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Bell className="w-5 h-5 mr-2" />
                Notifications
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Settings className="w-5 h-5 mr-2" />
                Settings
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start text-red-600">
                <LogOut className="w-5 h-5 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        )}
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user.name.split(' ')[0]}! 👋
          </h1>
          <p className="text-gray-600">
            Continue your transformation journey. You're making amazing progress!
          </p>
        </div>

        {/* Stats Grid - Improved mobile layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`${stat.color}`}>
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-4 sm:gap-8">
          {/* Main Content - Improved mobile layout */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-8">
            {/* Current Courses */}
            <Card>
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
                  <h2 className="text-xl font-bold text-gray-900">Continue Learning</h2>
                  <Link href="/dashboard/courses">
                    <Button variant="outline" size="sm" className="w-full sm:w-auto">
                      View All Courses
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
                
                <div className="space-y-4">
                  {currentCourses.map((course) => (
                    <div key={course.id} className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <img 
                        src={course.image}
                        alt={course.title}
                        className="w-full sm:w-16 h-32 sm:h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{course.title}</h3>
                        <p className="text-sm text-gray-600">by {course.instructor}</p>
                        <div className="mt-2">
                          <div className="flex items-center justify-between text-sm text-gray-500 mb-1">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                      </div>
                      <div className="w-full sm:w-auto sm:text-right">
                        <Button size="sm" className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white">
                          <Play className="mr-2 w-4 h-4" />
                          Continue
                        </Button>
                        <p className="text-xs text-gray-500 mt-1">{course.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements - Improved mobile layout */}
            <Card>
              <CardContent className="p-4 sm:p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Your Achievements</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                  {achievements.map((achievement) => (
                    <div 
                      key={achievement.id}
                      className={`p-4 rounded-lg border text-center transition-all ${
                        achievement.earned 
                          ? 'bg-amber-50 border-amber-200' 
                          : 'bg-gray-50 border-gray-200 opacity-60'
                      }`}
                    >
                      <div className="text-2xl mb-2">{achievement.icon}</div>
                      <h3 className="text-sm font-medium text-gray-900">{achievement.title}</h3>
                      {achievement.earned && (
                        <CheckCircle className="w-4 h-4 text-green-600 mx-auto mt-2" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Improved mobile layout */}
          <div className="space-y-4 sm:space-y-6">
            {/* Upcoming Events */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Upcoming Events</h3>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="border-l-4 border-amber-400 pl-4">
                      <h4 className="font-medium text-gray-900">{event.title}</h4>
                      <p className="text-sm text-gray-600">{event.instructor}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-xs text-gray-500">{event.date} at {event.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  <Calendar className="mr-2 w-4 h-4" />
                  View Calendar
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <MessageCircle className="mr-2 w-4 h-4" />
                    Join Community Discussion
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="mr-2 w-4 h-4" />
                    Download Resources
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="mr-2 w-4 h-4" />
                    Schedule Coaching Call
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <TrendingUp className="mr-2 w-4 h-4" />
                    View Progress Report
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Account Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Account</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Plan</span>
                    <span className="text-sm font-medium text-amber-600">{user.plan}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Member since</span>
                    <span className="text-sm text-gray-900">{new Date(user.joinDate).toLocaleDateString()}</span>
                  </div>
                  <Button variant="outline" className="w-full justify-start">
                    <User className="mr-2 w-4 h-4" />
                    Edit Profile
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
                    <LogOut className="mr-2 w-4 h-4" />
                    Sign Out
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}