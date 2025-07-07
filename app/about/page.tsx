'use client';

import { useState, useEffect } from 'react';
import { Lightbulb, Star, ArrowRight, ChevronRight, Menu, X, Heart, Users, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const team = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Founder & Chief Transformation Officer",
      bio: "With over 20 years in positive psychology and personal development, Sarah has dedicated her life to helping others discover their authentic selves.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      credentials: ["PhD in Psychology", "Certified Life Coach", "Author of 3 bestselling books"]
    },
    {
      name: "Marcus Thompson",
      role: "Director of Community Programs",
      bio: "Marcus brings a unique blend of corporate leadership experience and spiritual wisdom to guide individuals through career and life transitions.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      credentials: ["MBA from Harvard", "Certified Executive Coach", "Former Fortune 500 CEO"]
    },
    {
      name: "Dr. Elena Rodriguez",
      role: "Head of Research & Development",
      bio: "Elena leads our research initiatives, ensuring our programs are grounded in the latest scientific understanding of human potential and growth.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      credentials: ["PhD in Neuroscience", "Research Fellow at Stanford", "Published researcher"]
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Authentic Connection",
      description: "We believe in the power of genuine human connection and creating safe spaces for vulnerability and growth."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Support",
      description: "No one transforms alone. We foster supportive communities where individuals can share their journey and lift each other up."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Purpose-Driven Growth",
      description: "Every person has a unique purpose. We help you discover and align with your deepest calling and highest potential."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence in Service",
      description: "We are committed to providing the highest quality guidance, resources, and support for your transformation journey."
    }
  ];

  const milestones = [
    { year: "2018", event: "LightedWorld founded with a vision to transform lives" },
    { year: "2019", event: "Launched our first online transformation program" },
    { year: "2020", event: "Reached 1,000 program graduates during global challenges" },
    { year: "2021", event: "Opened our first physical retreat center" },
    { year: "2022", event: "Celebrated 5,000 lives transformed" },
    { year: "2023", event: "Expanded internationally with programs in 15 countries" },
    { year: "2024", event: "Achieved milestone of 10,000+ transformations" }
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
              <Link href="/about" className="text-amber-600 font-medium">About</Link>
              <Link href="/services" className="text-gray-700 hover:text-amber-600 transition-colors">Services</Link>
              <Link href="/stories" className="text-gray-700 hover:text-amber-600 transition-colors">Stories</Link>
              <Link href="/resources" className="text-gray-700 hover:text-amber-600 transition-colors">Resources</Link>
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
                <Link href="/about" className="block text-amber-600 font-medium py-2">
                  About
                </Link>
                <Link href="/services" className="block text-gray-700 hover:text-amber-600 transition-colors py-2">
                  Services
                </Link>
                <Link href="/stories" className="block text-gray-700 hover:text-amber-600 transition-colors py-2">
                  Stories
                </Link>
                <Link href="/resources" className="block text-gray-700 hover:text-amber-600 transition-colors py-2">
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
              Our Story of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-teal-600"> Transformation</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed px-4 sm:px-0">
              From a simple vision to a global movement, discover how LightedWorld 
              has been transforming lives and empowering individuals to find their true light.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our mission and shape every interaction
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-teal-600 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Meet Our Guides</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced mentors dedicated to supporting your transformation journey
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{member.name}</h3>
                  <p className="text-amber-600 text-center mb-4">{member.role}</p>
                  <p className="text-gray-600 text-center mb-6">{member.bio}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.credentials.map((credential, credIndex) => (
                      <div key={credIndex} className="flex items-center justify-center space-x-2">
                        <Star className="w-4 h-4 text-teal-600" />
                        <span className="text-sm text-gray-700">{credential}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              From a simple vision to a global movement, see how we've grown 
              while staying true to our mission of transformation.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-400 to-teal-600"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-0`}>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <Card className="shadow-lg border-0">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-amber-600 mb-2">{milestone.year}</div>
                        <p className="text-gray-700">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10 hidden md:block">
                    <div className="w-8 h-8 bg-white rounded-full border-4 border-amber-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  <div className="w-full md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Join thousands of others who have discovered their true potential with LightedWorld.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 text-lg w-full sm:w-auto">
              Begin Your Transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg w-full sm:w-auto">
                Explore Our Services
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
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