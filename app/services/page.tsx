'use client';

import { useState, useEffect } from 'react';
import { ChevronRight, Lightbulb, ArrowRight, Star, Users, Heart, Target, Clock, CheckCircle, Calendar, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const mainServices = [
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Self-Discovery Journey",
      subtitle: "Uncover Your Authentic Self",
      description: "A comprehensive 12-week program designed to help you explore your values, strengths, passions, and purpose through guided exercises, reflective practices, and personalized coaching.",
      duration: "12 weeks",
      format: "1-on-1 + Group Sessions",
      price: "Starting at $1,997",
      features: [
        "Weekly 1-on-1 coaching sessions",
        "Comprehensive personality and strengths assessments",
        "Daily reflection exercises and journaling prompts",
        "Access to our exclusive self-discovery workbook",
        "Group mastermind sessions with fellow participants",
        "Lifetime access to our resource library"
      ],
      outcomes: [
        "Clear understanding of your core values and beliefs",
        "Identification of your unique strengths and talents",
        "Clarity on your life purpose and direction",
        "Increased self-confidence and self-awareness"
      ],
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "Potential Maximization",
      subtitle: "Unlock Your Hidden Capabilities",
      description: "An intensive 16-week program focused on identifying and developing your untapped potential through strategic goal-setting, skill development, and breakthrough coaching techniques.",
      duration: "16 weeks",
      format: "Hybrid Coaching",
      price: "Starting at $2,497",
      features: [
        "Bi-weekly intensive coaching sessions",
        "Personalized potential assessment and development plan",
        "Skills gap analysis and targeted training recommendations",
        "Monthly breakthrough sessions to overcome limiting beliefs",
        "Access to our network of expert mentors",
        "Quarterly progress reviews and strategy adjustments"
      ],
      outcomes: [
        "Breakthrough limiting beliefs and mental barriers",
        "Develop new skills and capabilities",
        "Create and execute ambitious goals",
        "Build unstoppable confidence and momentum"
      ],
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Purpose Alignment",
      subtitle: "Live Your Deepest Calling",
      description: "A transformational 20-week journey to discover your unique purpose and create a life that's deeply aligned with your values, passions, and the impact you want to make in the world.",
      duration: "20 weeks",
      format: "Comprehensive Program",
      price: "Starting at $3,497",
      features: [
        "Weekly purpose exploration sessions",
        "Life design workshops and vision creation",
        "Values clarification and alignment exercises",
        "Impact assessment and legacy planning",
        "Career transition support and guidance",
        "Ongoing accountability and support system"
      ],
      outcomes: [
        "Crystal clear understanding of your life purpose",
        "Aligned career and life decisions",
        "Increased fulfillment and meaning in daily life",
        "Clear action plan for living your purpose"
      ],
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Community Support",
      subtitle: "Transform Together",
      description: "Join our vibrant community of like-minded individuals on similar transformation journeys. Access ongoing support, accountability, and inspiration through group programs and events.",
      duration: "Ongoing",
      format: "Community Access",
      price: "Starting at $97/month",
      features: [
        "Monthly group coaching calls",
        "Private online community platform",
        "Weekly accountability check-ins",
        "Quarterly in-person or virtual retreats",
        "Peer mentorship matching program",
        "Exclusive workshops and masterclasses"
      ],
      outcomes: [
        "Strong support network of like-minded individuals",
        "Ongoing accountability and motivation",
        "Continuous learning and growth opportunities",
        "Lasting friendships and connections"
      ],
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ];

  const additionalServices = [
    {
      title: "VIP Intensive Days",
      description: "One-on-one intensive breakthrough sessions for rapid transformation",
      duration: "1-3 days",
      price: "Starting at $2,500/day"
    },
    {
      title: "Corporate Transformation",
      description: "Team and organizational development programs",
      duration: "3-6 months",
      price: "Custom pricing"
    },
    {
      title: "Retreat Experiences",
      description: "Immersive transformation retreats in beautiful locations",
      duration: "3-7 days",
      price: "Starting at $1,997"
    },
    {
      title: "Online Courses",
      description: "Self-paced digital programs for flexible learning",
      duration: "Self-paced",
      price: "Starting at $297"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Discovery Call",
      description: "We start with a complimentary 30-minute call to understand your goals and challenges."
    },
    {
      step: "2",
      title: "Assessment",
      description: "Complete our comprehensive assessment to identify your starting point and potential."
    },
    {
      step: "3",
      title: "Custom Plan",
      description: "Receive a personalized transformation plan tailored to your unique needs and goals."
    },
    {
      step: "4",
      title: "Begin Journey",
      description: "Start your transformation with dedicated support and guidance every step of the way."
    }
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
              <Link href="/services" className="text-amber-600 font-medium">Services</Link>
              <Link href="/stories" className="text-gray-700 hover:text-amber-600 transition-colors">Stories</Link>
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
              Transform Your Life with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-teal-600"> Expert Guidance</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Choose from our comprehensive range of transformation services, each designed to meet you 
              where you are and guide you to where you want to be.
            </p>
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 text-lg">
              Schedule Free Discovery Call
              <Calendar className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Signature Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive transformation programs designed to create lasting change 
              and help you step into your fullest potential.
            </p>
          </div>
          
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-teal-600 rounded-2xl flex items-center justify-center text-white mb-8">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-xl text-amber-600 font-medium mb-6">{service.subtitle}</p>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <Clock className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">{service.duration}</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <Users className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">{service.format}</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <Star className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">{service.price}</div>
                    </div>
                  </div>
                  
                  <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                    Learn More & Apply
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="shadow-xl border-0">
                    <CardContent className="p-0">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 object-cover rounded-t-lg"
                      />
                      <div className="p-8">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">What's Included:</h4>
                        <ul className="space-y-3 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Expected Outcomes:</h4>
                        <ul className="space-y-3">
                          {service.outcomes.map((outcome, outcomeIndex) => (
                            <li key={outcomeIndex} className="flex items-start space-x-3">
                              <Star className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized offerings to complement your transformation journey 
              and provide flexible options for every need and schedule.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="text-sm text-gray-500">Duration: {service.duration}</div>
                    <div className="text-lg font-semibold text-amber-600">{service.price}</div>
                  </div>
                  <Button variant="outline" className="border-amber-500 text-amber-600 hover:bg-amber-50 w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven process ensures you get the right support for your unique journey. 
              Here's how we'll work together to create your transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Begin Your Transformation?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Take the first step toward discovering your authentic self and maximizing your potential. 
            Schedule a complimentary discovery call to explore which program is right for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 text-lg">
              Schedule Free Discovery Call
              <Calendar className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4 text-lg">
              <Play className="mr-2 w-5 h-5" />
              Watch Program Overview
            </Button>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            No pressure, no sales pitch. Just an honest conversation about your goals and how we can help.
          </p>
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