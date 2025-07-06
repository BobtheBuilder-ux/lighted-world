'use client';

import { useState } from 'react';
import { 
  Lightbulb, 
  ArrowLeft,
  Upload,
  Plus,
  Trash2,
  Save,
  Eye,
  Settings,
  BookOpen,
  Play,
  FileText,
  Image as ImageIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';

interface CourseData {
  title: string;
  description: string;
  instructor: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: string;
  duration: string;
  thumbnail: File | null;
  status: 'Draft' | 'Published';
}

interface Lesson {
  id: number;
  title: string;
  description: string;
  duration: string;
  videoFile: File | null;
  materials: File[];
}

export default function NewCourse() {
  const [courseData, setCourseData] = useState<CourseData>({
    title: '',
    description: '',
    instructor: '',
    category: '',
    level: 'Beginner',
    price: '',
    duration: '',
    thumbnail: null,
    status: 'Draft'
  });

  const [lessons, setLessons] = useState<Lesson[]>([
    { id: 1, title: '', description: '', duration: '', videoFile: null, materials: [] }
  ]);

  const [activeTab, setActiveTab] = useState('basic');

  const categories = [
    'Self-Discovery',
    'Potential Maximization',
    'Purpose Alignment',
    'Mindfulness',
    'Relationships',
    'Leadership'
  ];

  const instructors = [
    'Dr. Sarah Mitchell',
    'Marcus Thompson',
    'Dr. Elena Rodriguez'
  ];

  const handleCourseDataChange = (field: keyof CourseData, value: string) => {
    setCourseData(prev => ({ ...prev, [field]: value }));
  };

  const addLesson = () => {
    const newLesson = {
      id: lessons.length + 1,
      title: '',
      description: '',
      duration: '',
      videoFile: null,
      materials: []
    };
    setLessons([...lessons, newLesson]);
  };

  const updateLesson = (id: number, field: keyof Lesson, value: string) => {
    setLessons(lessons.map(lesson => 
      lesson.id === id ? { ...lesson, [field]: value } : lesson
    ));
  };

  const removeLesson = (id: number) => {
    setLessons(lessons.filter(lesson => lesson.id !== id));
  };

  const handleSave = (status = 'Draft') => {
    const courseToSave = {
      ...courseData,
      status,
      lessons,
      createdAt: new Date().toISOString()
    };
    console.log('Saving course:', courseToSave);
    // Here you would typically send to your backend
    alert(`Course saved as ${status}!`);
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

            <div className="flex items-center space-x-3">
              <Button variant="outline" onClick={() => handleSave('Draft')}>
                <Save className="mr-2 w-4 h-4" />
                Save Draft
              </Button>
              <Button variant="outline">
                <Eye className="mr-2 w-4 h-4" />
                Preview
              </Button>
              <Button 
                className="bg-amber-500 hover:bg-amber-600 text-white"
                onClick={() => handleSave('Published')}
              >
                Publish Course
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Course</h1>
          <p className="text-gray-600">Build a comprehensive learning experience for your students</p>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <div className="w-64 space-y-2">
            {[
              { id: 'basic', label: 'Basic Information', icon: <Settings className="w-5 h-5" /> },
              { id: 'content', label: 'Course Content', icon: <BookOpen className="w-5 h-5" /> },
              { id: 'pricing', label: 'Pricing & Access', icon: <Settings className="w-5 h-5" /> },
              { id: 'settings', label: 'Advanced Settings', icon: <Settings className="w-5 h-5" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-amber-50 text-amber-700 border border-amber-200'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'basic' && (
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Basic Information</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="title" className="text-sm font-medium text-gray-700">
                        Course Title *
                      </Label>
                      <Input
                        id="title"
                        value={courseData.title}
                        onChange={(e) => handleCourseDataChange('title', e.target.value)}
                        placeholder="Enter course title"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="description" className="text-sm font-medium text-gray-700">
                        Course Description *
                      </Label>
                      <Textarea
                        id="description"
                        value={courseData.description}
                        onChange={(e) => handleCourseDataChange('description', e.target.value)}
                        placeholder="Describe what students will learn in this course"
                        rows={4}
                        className="mt-1"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="instructor" className="text-sm font-medium text-gray-700">
                          Instructor *
                        </Label>
                        <select
                          id="instructor"
                          value={courseData.instructor}
                          onChange={(e) => handleCourseDataChange('instructor', e.target.value)}
                          className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="">Select instructor</option>
                          {instructors.map((instructor) => (
                            <option key={instructor} value={instructor}>{instructor}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="category" className="text-sm font-medium text-gray-700">
                          Category *
                        </Label>
                        <select
                          id="category"
                          value={courseData.category}
                          onChange={(e) => handleCourseDataChange('category', e.target.value)}
                          className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="">Select category</option>
                          {categories.map((category) => (
                            <option key={category} value={category}>{category}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <Label htmlFor="level" className="text-sm font-medium text-gray-700">
                          Difficulty Level
                        </Label>
                        <select
                          id="level"
                          value={courseData.level}
                          onChange={(e) => handleCourseDataChange('level', e.target.value)}
                          className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="Beginner">Beginner</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Advanced">Advanced</option>
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="duration" className="text-sm font-medium text-gray-700">
                          Total Duration
                        </Label>
                        <Input
                          id="duration"
                          value={courseData.duration}
                          onChange={(e) => handleCourseDataChange('duration', e.target.value)}
                          placeholder="e.g., 4 hours"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="price" className="text-sm font-medium text-gray-700">
                          Price (USD)
                        </Label>
                        <Input
                          id="price"
                          type="number"
                          value={courseData.price}
                          onChange={(e) => handleCourseDataChange('price', e.target.value)}
                          placeholder="0"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-gray-700">
                        Course Thumbnail
                      </Label>
                      <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-2">Upload course thumbnail</p>
                        <p className="text-sm text-gray-500">PNG, JPG up to 2MB</p>
                        <Button variant="outline" className="mt-4">
                          Choose Image
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'content' && (
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Course Content</h2>
                    <Button onClick={addLesson} className="bg-amber-500 hover:bg-amber-600 text-white">
                      <Plus className="mr-2 w-4 h-4" />
                      Add Lesson
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {lessons.map((lesson, index) => (
                      <Card key={lesson.id} className="border border-gray-200">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">
                              Lesson {index + 1}
                            </h3>
                            {lessons.length > 1 && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeLesson(lesson.id)}
                                className="text-red-600 hover:text-red-700"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            )}
                          </div>

                          <div className="space-y-4">
                            <div>
                              <Label className="text-sm font-medium text-gray-700">
                                Lesson Title *
                              </Label>
                              <Input
                                value={lesson.title}
                                onChange={(e) => updateLesson(lesson.id, 'title', e.target.value)}
                                placeholder="Enter lesson title"
                                className="mt-1"
                              />
                            </div>

                            <div>
                              <Label className="text-sm font-medium text-gray-700">
                                Lesson Description
                              </Label>
                              <Textarea
                                value={lesson.description}
                                onChange={(e) => updateLesson(lesson.id, 'description', e.target.value)}
                                placeholder="Describe what this lesson covers"
                                rows={3}
                                className="mt-1"
                              />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <Label className="text-sm font-medium text-gray-700">
                                  Duration
                                </Label>
                                <Input
                                  value={lesson.duration}
                                  onChange={(e) => updateLesson(lesson.id, 'duration', e.target.value)}
                                  placeholder="e.g., 15 minutes"
                                  className="mt-1"
                                />
                              </div>
                            </div>

                            <div>
                              <Label className="text-sm font-medium text-gray-700">
                                Video Content
                              </Label>
                              <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                                <Play className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                <p className="text-gray-600 mb-1">Upload lesson video</p>
                                <p className="text-xs text-gray-500">MP4, MOV up to 500MB</p>
                                <Button variant="outline" size="sm" className="mt-2">
                                  Choose Video
                                </Button>
                              </div>
                            </div>

                            <div>
                              <Label className="text-sm font-medium text-gray-700">
                                Additional Materials
                              </Label>
                              <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                                <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                <p className="text-gray-600 mb-1">Upload worksheets, PDFs, etc.</p>
                                <p className="text-xs text-gray-500">PDF, DOC, PPT up to 10MB each</p>
                                <Button variant="outline" size="sm" className="mt-2">
                                  Add Materials
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'pricing' && (
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing & Access</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <Label className="text-sm font-medium text-gray-700 mb-3 block">
                        Course Access Level
                      </Label>
                      <div className="space-y-3">
                        <label className="flex items-center space-x-3">
                          <input type="radio" name="access" value="free" className="text-amber-600" />
                          <div>
                            <div className="font-medium">Free Course</div>
                            <div className="text-sm text-gray-600">Available to all users</div>
                          </div>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input type="radio" name="access" value="foundation" className="text-amber-600" />
                          <div>
                            <div className="font-medium">Foundation Plan</div>
                            <div className="text-sm text-gray-600">Available to Foundation subscribers and above</div>
                          </div>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input type="radio" name="access" value="transformation" className="text-amber-600" defaultChecked />
                          <div>
                            <div className="font-medium">Transformation Plan</div>
                            <div className="text-sm text-gray-600">Available to Transformation subscribers and above</div>
                          </div>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input type="radio" name="access" value="mastery" className="text-amber-600" />
                          <div>
                            <div className="font-medium">Mastery Plan Only</div>
                            <div className="text-sm text-gray-600">Exclusive to Mastery subscribers</div>
                          </div>
                        </label>
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-gray-700 mb-3 block">
                        Course Prerequisites
                      </Label>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-3">
                          <input type="checkbox" className="rounded text-amber-600" />
                          <span>Discovering Your Core Values</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input type="checkbox" className="rounded text-amber-600" />
                          <span>Mindful Living Essentials</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-gray-700 mb-3 block">
                        Completion Certificate
                      </Label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="rounded text-amber-600" defaultChecked />
                        <span>Award completion certificate to students</span>
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'settings' && (
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Settings</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <Label className="text-sm font-medium text-gray-700 mb-3 block">
                        Course Visibility
                      </Label>
                      <div className="space-y-3">
                        <label className="flex items-center space-x-3">
                          <input type="radio" name="visibility" value="public" className="text-amber-600" defaultChecked />
                          <div>
                            <div className="font-medium">Public</div>
                            <div className="text-sm text-gray-600">Visible in course catalog</div>
                          </div>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input type="radio" name="visibility" value="private" className="text-amber-600" />
                          <div>
                            <div className="font-medium">Private</div>
                            <div className="text-sm text-gray-600">Only accessible via direct link</div>
                          </div>
                        </label>
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-gray-700 mb-3 block">
                        Student Features
                      </Label>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-3">
                          <input type="checkbox" className="rounded text-amber-600" defaultChecked />
                          <span>Allow student discussions</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input type="checkbox" className="rounded text-amber-600" defaultChecked />
                          <span>Enable progress tracking</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input type="checkbox" className="rounded text-amber-600" />
                          <span>Allow course downloads</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input type="checkbox" className="rounded text-amber-600" defaultChecked />
                          <span>Send completion notifications</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="tags" className="text-sm font-medium text-gray-700">
                        Course Tags
                      </Label>
                      <Input
                        id="tags"
                        placeholder="Enter tags separated by commas"
                        className="mt-1"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Tags help students find your course more easily
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="seo-description" className="text-sm font-medium text-gray-700">
                        SEO Description
                      </Label>
                      <Textarea
                        id="seo-description"
                        placeholder="Brief description for search engines"
                        rows={3}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}