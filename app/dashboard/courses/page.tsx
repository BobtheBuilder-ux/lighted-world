'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Play, Clock, CheckCircle, Lock, ArrowLeft, Search, Lightbulb, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

// Create a simple Progress Bar component to avoid bundling issues
const ProgressBar = ({ value = 0 }: { value: number }) => (
  <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-200">
    <div
      className="h-full bg-amber-500 transition-all"
      style={{ width: `${value}%` }}
    />
  </div>
);

interface Course {
  id: number;
  title: string;
  instructor: string;
  category: string;
  duration: string;
  lessons: number;
  progress: number;
  rating: number;
  students: number;
  description: string;
  image: string;
  status: 'completed' | 'in-progress' | 'locked' | 'available';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

interface Category {
  id: string;
  label: string;
}

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories: Category[] = [
    { id: 'all', label: 'All Courses' },
    { id: 'self-discovery', label: 'Self-Discovery' },
    { id: 'potential', label: 'Potential Maximization' },
    { id: 'purpose', label: 'Purpose Alignment' },
    { id: 'mindfulness', label: 'Mindfulness' },
    { id: 'relationships', label: 'Relationships' }
  ];

  const courses: Course[] = [
    {
      id: 1,
      title: 'Discovering Your Core Values',
      instructor: 'Dr. Sarah Mitchell',
      category: 'self-discovery',
      duration: '4 hours',
      lessons: 12,
      progress: 75,
      rating: 4.9,
      students: 1250,
      description: 'Uncover the fundamental values that guide your decisions and shape your authentic self.',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      status: 'in-progress',
      level: 'Beginner'
    },
    {
      id: 2,
      title: 'Overcoming Limiting Beliefs',
      instructor: 'Marcus Thompson',
      category: 'potential',
      duration: '3.5 hours',
      lessons: 10,
      progress: 40,
      rating: 4.8,
      students: 980,
      description: 'Identify and transform the beliefs that are holding you back from your full potential.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      status: 'in-progress',
      level: 'Intermediate'
    },
    {
      id: 3,
      title: 'Building Authentic Confidence',
      instructor: 'Dr. Elena Rodriguez',
      category: 'self-discovery',
      duration: '5 hours',
      lessons: 15,
      progress: 20,
      rating: 4.9,
      students: 1450,
      description: 'Develop unshakeable confidence that comes from knowing and accepting your true self.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      status: 'in-progress',
      level: 'Beginner'
    },
    {
      id: 4,
      title: 'Finding Your Life Purpose',
      instructor: 'Dr. Sarah Mitchell',
      category: 'purpose',
      duration: '6 hours',
      lessons: 18,
      progress: 0,
      rating: 4.9,
      students: 2100,
      description: 'Discover your unique purpose and create a meaningful life aligned with your deepest calling.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      status: 'available',
      level: 'Intermediate'
    },
    {
      id: 5,
      title: 'Mindful Living Essentials',
      instructor: 'Marcus Thompson',
      category: 'mindfulness',
      duration: '4.5 hours',
      lessons: 14,
      progress: 100,
      rating: 4.7,
      students: 890,
      description: 'Learn practical mindfulness techniques to live with greater awareness and presence.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      status: 'completed',
      level: 'Beginner'
    },
    {
      id: 6,
      title: 'Healthy Relationship Dynamics',
      instructor: 'Dr. Elena Rodriguez',
      category: 'relationships',
      duration: '5.5 hours',
      lessons: 16,
      progress: 0,
      rating: 4.8,
      students: 1320,
      description: 'Build and maintain healthy, authentic relationships in all areas of your life.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      status: 'locked',
      level: 'Advanced'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getStatusIcon = (status: Course['status'], progress: number): JSX.Element => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'in-progress':
        return <Play className="w-5 h-5 text-amber-600" />;
      case 'locked':
        return <Lock className="w-5 h-5 text-gray-400" />;
      default:
        return <BookOpen className="w-5 h-5 text-blue-600" />;
    }
  };

  const getStatusText = (status: Course['status'], progress: number) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return `${progress}% Complete`;
      case 'locked':
        return 'Locked';
      default:
        return 'Start Course';
    }
  };

  const getLevelColor = (level: Course['level']) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-amber-100 text-amber-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
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
              <Link href="/dashboard" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Dashboard</span>
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Learning Journey</h1>
          <p className="text-gray-600">
            Continue your transformation with our comprehensive course library
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-amber-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    {getStatusIcon(course.status, course.progress)}
                  </div>
                  {course.status === 'in-progress' && course.progress > 0 && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2">
                      <ProgressBar value={course.progress} />
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">by {course.instructor}</p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{course.lessons} lessons</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-amber-400 fill-current" />
                      <span className="text-sm font-medium">{course.rating}</span>
                      <span className="text-sm text-gray-500">({course.students})</span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {getStatusText(course.status, course.progress)}
                    </span>
                  </div>
                  
                  <Button 
                    className={`w-full ${
                      course.status === 'locked' 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                      : course.status === 'completed'
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-amber-500 hover:bg-amber-600 text-white'
                    }`}
                    disabled={course.status === 'locked'}
                  >
                    {course.status === 'locked' ? <Lock className="mr-2 w-4 h-4" /> :
                     course.status === 'completed' ? <CheckCircle className="mr-2 w-4 h-4" /> :
                     course.status === 'in-progress' ? <Play className="mr-2 w-4 h-4" /> :
                     <BookOpen className="mr-2 w-4 h-4" />}
                    
                    {course.status === 'locked' ? 'Upgrade to Access' :
                     course.status === 'completed' ? 'Review Course' :
                     course.status === 'in-progress' ? 'Continue Learning' :
                     'Start Course'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            <Button 
              onClick={() => {
                setSelectedCategory('all');
                setSearchTerm('');
              }}
              className="mt-4 bg-amber-500 hover:bg-amber-600 text-white"
            >
              Show All Courses
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}