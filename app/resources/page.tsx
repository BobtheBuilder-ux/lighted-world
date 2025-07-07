'use client';

import { useState, useEffect } from 'react';
import { 
  Lightbulb, 
  Star, 
  Download, 
  BookOpen, 
  Play,
  Search,
  Filter,
  Menu,
  X,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

interface Resource {
  id: number;
  title: string;
  description: string;
  category: 'workbooks' | 'videos' | 'meditation' | 'articles';
  type: string;
  duration: string;
  difficulty: string;
  image: string;
  rating: number;
  downloads: string;
  icon?: React.ReactNode;
}

interface Category {
  id: string;
  label: string;
}

export default function Resources() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories: Category[] = [
    { id: 'all', label: 'All Resources' },
    { id: 'workbooks', label: 'Workbooks' },
    { id: 'videos', label: 'Video Guides' },
    { id: 'meditation', label: 'Meditations' },
    { id: 'articles', label: 'Articles' }
  ];

  const featuredResources: Resource[] = [
    {
      id: 1,
      title: "The Complete Self-Discovery Workbook",
      description: "A comprehensive 50-page workbook with exercises, reflections, and assessments to guide your journey of self-discovery.",
      category: "workbooks" as const,
      type: "PDF Download",
      duration: "2-3 hours",
      difficulty: "Beginner",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      rating: 4.9,
      downloads: "15,000+"
    },
    {
      id: 2,
      title: "Morning Transformation Meditation",
      description: "Start your day with intention and clarity through this powerful 15-minute guided meditation for personal transformation.",
      category: "meditation" as const,
      type: "Audio",
      duration: "15 minutes",
      difficulty: "All Levels",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      rating: 4.8,
      downloads: "25,000+"
    },
    {
      id: 3,
      title: "Finding Your Life Purpose: A Step-by-Step Guide",
      description: "Discover your unique purpose through this comprehensive guide that has helped thousands find their calling.",
      category: "articles" as const,
      type: "Article",
      duration: "20 min read",
      difficulty: "Intermediate",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      rating: 4.9,
      downloads: "30,000+"
    }
  ];

  const resources: Resource[] = [
    {
      id: 4,
      title: "Daily Affirmations for Self-Worth",
      description: "30 powerful affirmations to build unshakeable self-confidence and self-worth.",
      category: "articles",
      type: "Article",
      duration: "5 min read",
      difficulty: "Beginner",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      rating: 4.7,
      downloads: "8,500+"
    },
    {
      id: 5,
      title: "Overcoming Limiting Beliefs Worksheet",
      description: "Identify and transform the beliefs that are holding you back from your full potential.",
      category: "workbooks",
      type: "PDF Download",
      duration: "45 minutes",
      difficulty: "Intermediate",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      rating: 4.8,
      downloads: "12,000+"
    },
    {
      id: 6,
      title: "Stress Release & Inner Peace Meditation",
      description: "A calming 20-minute meditation to release stress and find your center.",
      category: "meditation",
      type: "Audio",
      duration: "20 minutes",
      difficulty: "All Levels",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      rating: 4.6,
      downloads: "18,000+"
    },
    {
      id: 7,
      title: "The Science of Personal Transformation",
      description: "Understanding the neuroscience behind lasting change and how to apply it in your life.",
      category: "videos",
      type: "Video",
      duration: "35 minutes",
      difficulty: "Advanced",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      rating: 4.9,
      downloads: "22,000+"
    },
    {
      id: 8,
      title: "Values Clarification Exercise",
      description: "Discover your core values and learn how to make decisions aligned with what matters most to you.",
      category: "workbooks",
      type: "PDF Download",
      duration: "30 minutes",
      difficulty: "Beginner",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      rating: 4.8,
      downloads: "16,000+"
    },
    {
      id: 9,
      title: "Building Resilience in Challenging Times",
      description: "Practical strategies for developing emotional resilience and bouncing back from setbacks.",
      category: "articles",
      type: "Article",
      duration: "15 min read",
      difficulty: "Intermediate",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      rating: 4.7,
      downloads: "14,000+"
    },
    {
      id: 10,
      title: "Confidence Building Meditation Series",
      description: "A 7-part meditation series designed to build unshakeable confidence from within.",
      category: "meditation",
      type: "Audio Series",
      duration: "7 x 12 minutes",
      difficulty: "All Levels",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      rating: 4.9,
      downloads: "20,000+"
    },
    {
      id: 11,
      title: "Creating Your Personal Mission Statement",
      description: "Step-by-step video guide to crafting a powerful personal mission statement.",
      category: "videos",
      type: "Video",
      duration: "25 minutes",
      difficulty: "Intermediate",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      rating: 4.8,
      downloads: "11,000+"
    },
    {
      id: 12,
      title: "Goal Setting That Actually Works",
      description: "Learn the proven framework for setting and achieving meaningful goals that align with your values.",
      category: "articles",
      type: "Article",
      duration: "18 min read",
      difficulty: "Intermediate",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      rating: 4.7,
      downloads: "13,500+"
    }
  ];

  const allResources = [...featuredResources, ...resources];

  const getActionButton = (resource: Resource) => {
    switch (resource.category) {
      case 'workbooks':
        return (
          <Button className="bg-teal-500 hover:bg-teal-600 text-white w-full">
            <Download className="mr-2 w-4 h-4" />
            Download Workbook
          </Button>
        );
      case 'videos':
        return (
          <Button className="bg-purple-500 hover:bg-purple-600 text-white w-full">
            <Play className="mr-2 w-4 h-4" />
            Watch Video
          </Button>
        );
      default:
        return (
          <Button className="bg-gray-600 hover:bg-gray-700 text-white w-full">
            <BookOpen className="mr-2 w-4 h-4" />
            Read Article
          </Button>
        );
    }
  };

  const getResourceIcon = (category: Resource['category']) => {
    switch (category) {
      case 'workbooks':
        return <Download className="w-6 h-6" />;
      case 'videos':
        return <Play className="w-6 h-6" />;
      case 'meditation':
        return <Star className="w-6 h-6" />;
      case 'articles':
        return <BookOpen className="w-6 h-6" />;
    }
  };

  // Add icons to resources
  const resourcesWithIcons = allResources.map(resource => ({
    ...resource,
    icon: getResourceIcon(resource.category as Resource['category'])
  }));

  const filteredResources = resourcesWithIcons.filter(resource => 
    (selectedCategory === 'all' || resource.category === selectedCategory) &&
    (resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     resource.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">LightedWorld</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-700 hover:text-amber-600 transition-colors">About</Link>
              <Link href="/services" className="text-gray-700 hover:text-amber-600 transition-colors">Services</Link>
              <Link href="/stories" className="text-gray-700 hover:text-amber-600 transition-colors">Stories</Link>
              <Link href="/resources" className="text-amber-600 font-medium">Resources</Link>
              <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                Begin Your Journey
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

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200">
              <div className="px-4 py-3 space-y-3">
                <Link href="/about" className="block text-gray-700 hover:text-amber-600 transition-colors py-2">
                  About
                </Link>
                <Link href="/services" className="block text-gray-700 hover:text-amber-600 transition-colors py-2">
                  Services
                </Link>
                <Link href="/stories" className="block text-gray-700 hover:text-amber-600 transition-colors py-2">
                  Stories
                </Link>
                <Link href="/resources" className="block text-amber-600 font-medium py-2">
                  Resources
                </Link>
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white mt-4">
                  Begin Your Journey
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-amber-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Tools for Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-teal-600"> Transformation</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed px-4 sm:px-0">
              Access our comprehensive library of resources designed to support your journey 
              of self-discovery and personal growth.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-3 justify-center w-full lg:w-auto">
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
            <div className="relative w-full lg:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${
                    resource.category === 'workbooks' ? 'bg-teal-100 text-teal-600' :
                    resource.category === 'videos' ? 'bg-purple-100 text-purple-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-6">{resource.description}</p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-amber-400 fill-current" />
                      <span className="text-sm font-medium">{resource.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">{resource.downloads} downloads</span>
                  </div>
                  
                  {getActionButton(resource)}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Get access to our complete library of transformation resources by becoming a member.
          </p>
          <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 text-lg">
            Join LightedWorld Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">LightedWorld</span>
              </Link>
              <p className="text-gray-300 mb-6">
                Empowering individuals to discover their true identity and maximize their potential.
              </p>
              <div className="text-sm text-gray-400">
                © 2024 LightedWorld.org. All rights reserved.
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/services" className="hover:text-amber-400 transition-colors">Self-Discovery</Link></li>
                <li><Link href="/services" className="hover:text-amber-400 transition-colors">Potential Maximization</Link></li>
                <li><Link href="/services" className="hover:text-amber-400 transition-colors">Purpose Alignment</Link></li>
                <li><Link href="/services" className="hover:text-amber-400 transition-colors">Community Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/resources" className="hover:text-amber-400 transition-colors">Daily Inspiration</Link></li>
                <li><Link href="/resources" className="hover:text-amber-400 transition-colors">Guided Meditations</Link></li>
                <li><Link href="/resources" className="hover:text-amber-400 transition-colors">Transformation Toolkit</Link></li>
                <li><Link href="/stories" className="hover:text-amber-400 transition-colors">Success Stories</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
                <li><Link href="/#contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}