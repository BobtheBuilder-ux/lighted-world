'use client';

import { useState, useEffect } from 'react';
import { ChevronRight, Lightbulb, ArrowRight, Star, Quote, Play, Filter, Search, Heart, Target, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function Stories() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', label: 'All Stories', icon: <Star className="w-4 h-4" /> },
    { id: 'career', label: 'Career Transformation', icon: <Target className="w-4 h-4" /> },
    { id: 'personal', label: 'Personal Growth', icon: <Heart className="w-4 h-4" /> },
    { id: 'relationships', label: 'Relationships', icon: <Users className="w-4 h-4" /> },
    { id: 'purpose', label: 'Finding Purpose', icon: <Award className="w-4 h-4" /> }
  ];

  const stories = [
    {
      id: 1,
      name: "Sarah Chen",
      age: 34,
      location: "San Francisco, CA",
      role: "Marketing Executive → Life Coach",
      category: "career",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      beforeImage: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      afterImage: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      quote: "I went from feeling trapped in a corporate job to building a thriving coaching practice that lights me up every single day.",
      story: "For 12 years, I climbed the corporate ladder in marketing, achieving what looked like success from the outside. But inside, I felt empty and disconnected from my true self. The Self-Discovery Journey helped me realize that my real passion was helping others find their path. Today, I run a successful life coaching practice and wake up excited about my work every day.",
      transformation: {
        before: "Successful but unfulfilled marketing executive",
        after: "Thriving life coach with 6-figure practice",
        timeframe: "18 months"
      },
      program: "Self-Discovery Journey + Purpose Alignment",
      rating: 5,
      videoUrl: "#"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      age: 42,
      location: "Austin, TX",
      role: "Teacher → Educational Entrepreneur",
      category: "career",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      beforeImage: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      afterImage: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      quote: "I discovered that my teaching skills could impact thousands instead of just dozens. Now I'm building an educational platform that's changing lives globally.",
      story: "After 15 years as a high school teacher, I felt like I was making a difference but knew I could reach more people. The Potential Maximization program helped me see how my teaching gifts could scale. I launched an online education platform that now serves over 10,000 students worldwide.",
      transformation: {
        before: "Dedicated teacher reaching 30 students per year",
        after: "Educational entrepreneur impacting 10,000+ students",
        timeframe: "2 years"
      },
      program: "Potential Maximization + Community Support",
      rating: 5,
      videoUrl: "#"
    },
    {
      id: 3,
      name: "Emily Johnson",
      age: 29,
      location: "Denver, CO",
      role: "Struggling Artist → Creative Director",
      category: "personal",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      beforeImage: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      afterImage: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      quote: "I learned to value my creativity and turn my passion into a sustainable career. My art now supports not just my dreams, but my life.",
      story: "I was a struggling artist working three part-time jobs to make ends meet, constantly doubting my worth and talent. Through the Self-Discovery Journey, I learned to value my unique creative perspective and developed the confidence to pursue bigger opportunities. Now I'm the Creative Director at a major agency, leading campaigns I'm truly proud of.",
      transformation: {
        before: "Struggling artist with multiple part-time jobs",
        after: "Creative Director at major advertising agency",
        timeframe: "14 months"
      },
      program: "Self-Discovery Journey",
      rating: 5,
      videoUrl: "#"
    },
    {
      id: 4,
      name: "David Park",
      age: 38,
      location: "Seattle, WA",
      role: "Divorced Father → Relationship Coach",
      category: "relationships",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      beforeImage: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      afterImage: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      quote: "After my divorce, I thought I was broken. Now I help other men build the relationships they've always wanted.",
      story: "My divorce left me questioning everything about myself and my ability to connect with others. The Purpose Alignment program helped me see that my painful experience could become my greatest gift. I now run workshops helping divorced fathers rebuild their confidence and create healthy relationships with their children and future partners.",
      transformation: {
        before: "Recently divorced, struggling with self-worth",
        after: "Successful relationship coach and workshop leader",
        timeframe: "2 years"
      },
      program: "Purpose Alignment + Community Support",
      rating: 5,
      videoUrl: "#"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      age: 45,
      location: "Miami, FL",
      role: "Corporate Manager → Wellness Entrepreneur",
      category: "purpose",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      beforeImage: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      afterImage: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      quote: "I found my calling in helping others heal and transform. My wellness center is now a beacon of hope in our community.",
      story: "At 45, I was successful in corporate management but felt spiritually empty. A health scare made me reevaluate everything. Through the Purpose Alignment program, I discovered my calling was in holistic wellness. I left my corporate job and opened a wellness center that now serves hundreds of clients seeking healing and transformation.",
      transformation: {
        before: "Successful but unfulfilled corporate manager",
        after: "Thriving wellness center owner and healer",
        timeframe: "3 years"
      },
      program: "Purpose Alignment + Potential Maximization",
      rating: 5,
      videoUrl: "#"
    },
    {
      id: 6,
      name: "James Wilson",
      age: 31,
      location: "Chicago, IL",
      role: "Anxious Introvert → Confident Speaker",
      category: "personal",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      beforeImage: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      afterImage: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      quote: "I went from avoiding social situations to speaking on stages. The transformation in my confidence has changed every area of my life.",
      story: "Social anxiety controlled my life for years. I avoided networking events, turned down promotions that required presentations, and felt invisible in groups. The Potential Maximization program helped me understand that my introversion was a strength, not a weakness. I learned to communicate authentically and now speak at conferences about technology and innovation.",
      transformation: {
        before: "Socially anxious software developer",
        after: "Confident speaker and tech thought leader",
        timeframe: "16 months"
      },
      program: "Potential Maximization",
      rating: 5,
      videoUrl: "#"
    }
  ];

  const filteredStories = stories.filter(story => {
    const matchesCategory = selectedCategory === 'all' || story.category === selectedCategory;
    const matchesSearch = story.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.story.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.role.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { number: "10,000+", label: "Lives Transformed" },
    { number: "95%", label: "Success Rate" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "2.5x", label: "Average Income Increase" }
  ];

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
              <Link href="/stories" className="text-amber-600 font-medium">Stories</Link>
              <Link href="/resources" className="text-gray-700 hover:text-amber-600 transition-colors">Resources</Link>
              <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                Begin Your Journey
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-amber-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Real People,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-teal-600"> Real Transformations</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover how ordinary people have created extraordinary changes in their lives. 
              These stories prove that transformation is possible for anyone willing to take the journey.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-amber-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.icon}
                  <span>{category.label}</span>
                </button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search stories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {filteredStories.map((story, index) => (
              <Card key={story.id} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  {/* Story Header */}
                  <div className="relative">
                    <div className="grid grid-cols-2 h-48">
                      <div className="relative">
                        <img 
                          src={story.beforeImage}
                          alt="Before transformation"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                          Before
                        </div>
                      </div>
                      <div className="relative">
                        <img 
                          src={story.afterImage}
                          alt="After transformation"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-2 right-2 bg-amber-500 text-white px-2 py-1 rounded text-xs">
                          After
                        </div>
                      </div>
                    </div>
                    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <Play className="w-8 h-8 text-amber-600 ml-1" />
                    </button>
                  </div>

                  {/* Story Content */}
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <img 
                        src={story.image}
                        alt={story.name}
                        className="w-16 h-16 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                        <p className="text-gray-600">{story.age} • {story.location}</p>
                        <div className="flex items-center mt-1">
                          {[...Array(story.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <Quote className="w-8 h-8 text-teal-600 mb-4" />
                    <blockquote className="text-lg text-gray-700 italic mb-6">
                      "{story.quote}"
                    </blockquote>

                    <p className="text-gray-600 mb-6 leading-relaxed">{story.story}</p>

                    {/* Transformation Details */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Transformation Summary</h4>
                      <div className="space-y-2 text-sm">
                        <div><span className="font-medium">Before:</span> {story.transformation.before}</div>
                        <div><span className="font-medium">After:</span> {story.transformation.after}</div>
                        <div><span className="font-medium">Timeframe:</span> {story.transformation.timeframe}</div>
                        <div><span className="font-medium">Program:</span> {story.program}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{story.role}</span>
                      <Button variant="outline" className="border-amber-500 text-amber-600 hover:bg-amber-50">
                        Watch Full Story
                        <Play className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No stories found matching your criteria.</p>
              <Button 
                onClick={() => {setSelectedCategory('all'); setSearchTerm('');}}
                className="mt-4 bg-amber-500 hover:bg-amber-600 text-white"
              >
                Show All Stories
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Your Story Could Be Next</h2>
          <p className="text-xl text-gray-600 mb-8">
            Every transformation story started with a single decision to change. 
            What story will you write about your life?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 text-lg">
              Start Your Transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4 text-lg">
                Explore Our Programs
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
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