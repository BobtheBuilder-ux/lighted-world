import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
      const [isVisible, setIsVisible] = useState(false);
      const stats = [
        { number: "10,000+", label: "Lives Transformed" },
        { number: "95%", label: "Success Rate" },
        { number: "50+", label: "Expert Guides" },
        { number: "24/7", label: "Support Available" }
      ];

      useEffect(() => {
        setIsVisible(true);
      }, []);
    

  return (
    <>
        <section className="pt-24 pb-16 bg-gradient-to-br from-amber-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Discover Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-teal-600"> True Light</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Embark on a transformational journey to uncover your authentic self, maximize your potential, 
                and become all you're meant to be. Your light is waiting to shine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth/register">
                  <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 text-lg">
                    Start Your Transformation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4 text-lg">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Our Story
                </Button>
              </div>
            </div>
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Person discovering their potential"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">10,000+ lives transformed</span>
                  </div>
                </div>
              </div>
            </div>
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
    </>
  )
}

export default HeroSection