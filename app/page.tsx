'use client';

import { useState, useEffect } from 'react';
import { ChevronRight, Star, Users, Heart, Lightbulb, ArrowRight, Play, Quote, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import Services from '@/components/Services';
import Stories from '@/components/Stories';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <HeroSection />
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Your Journey to Authentic Living</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At LightedWorld, we believe every person carries an inner light waiting to illuminate their path. 
              Our mission is to guide you through a transformational journey of self-discovery, helping you 
              uncover your true identity and step into your fullest potential.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Supportive community"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Choose LightedWorld?</h3>
              <div className="space-y-4">
                {[
                  "Personalized guidance tailored to your unique journey",
                  "Evidence-based approaches rooted in positive psychology",
                  "Supportive community of fellow travelers",
                  "Practical tools for lasting transformation",
                  "Expert mentors with decades of experience"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/about">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                    Learn More About Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Success Stories Section */}
      <Stories />

      {/* Resources Section */}
      <section id="resources" className="py-20 bg-gradient-to-br from-teal-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Illuminate Your Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our library of transformational resources designed to support your growth 
              and keep your inner light burning bright.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-0">
                <img 
                  src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
                  alt="Daily inspiration"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Daily Inspiration</h3>
                  <p className="text-gray-600 mb-4">Start each day with purpose through our curated collection of inspiring thoughts and affirmations.</p>
                  <Button variant="outline" className="border-amber-500 text-amber-600 hover:bg-amber-50">
                    Explore <ChevronRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-0">
                <img 
                  src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
                  alt="Guided meditations"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Guided Meditations</h3>
                  <p className="text-gray-600 mb-4">Connect with your inner wisdom through our library of transformational meditation practices.</p>
                  <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                    Listen <ChevronRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-0">
                <img 
                  src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
                  alt="Transformation toolkit"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Transformation Toolkit</h3>
                  <p className="text-gray-600 mb-4">Practical exercises and worksheets to accelerate your journey of self-discovery and growth.</p>
                  <Button variant="outline" className="border-gray-600 text-gray-600 hover:bg-gray-50">
                    Download <ChevronRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/resources">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg">
                Access All Resources
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Stay Connected to Your Light</h2>
          <p className="text-xl text-gray-300 mb-8">
            Receive weekly inspiration, practical tools, and exclusive insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="bg-white border-0 text-gray-900 flex-1"
            />
            <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8">
              Join Our Community
            </Button>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            No spam, ever. Unsubscribe anytime with one click.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take the first step toward discovering your authentic self. We're here to guide you every step of the way.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Call Us</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email Us</div>
                    <div className="text-gray-600">hello@lightedworld.org</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Visit Us</div>
                    <div className="text-gray-600">123 Transformation Way<br />Inspiration City, IC 12345</div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" className="border-gray-200" />
                    <Input placeholder="Last Name" className="border-gray-200" />
                  </div>
                  <Input type="email" placeholder="Email Address" className="border-gray-200" />
                  <Input placeholder="Subject" className="border-gray-200" />
                  <Textarea 
                    placeholder="Tell us about your journey and how we can help..."
                    rows={4}
                    className="border-gray-200"
                  />
                  <Button className="w-full bg-gradient-to-r from-amber-500 to-teal-600 hover:from-amber-600 hover:to-teal-700 text-white py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
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
                <li><Link href="#contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
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