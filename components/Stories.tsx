import React, { useState } from 'react'
import { Card, CardContent } from './ui/card';
import { ChevronRight, Quote, Star } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

const Stories = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
      {
        name: "Sarah Chen",
        role: "Marketing Executive",
        content: "LightedWorld helped me discover strengths I never knew I had. The transformation has been life-changing.",
        rating: 5,
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
      },
      {
        name: "Michael Rodriguez",
        role: "Teacher",
        content: "I found my true calling through their guidance. Now I wake up excited about each day.",
        rating: 5,
        image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
      },
      {
        name: "Emily Johnson",
        role: "Entrepreneur",
        content: "The journey of self-discovery here opened doors I never imagined possible.",
        rating: 5,
        image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
      }
    ];
  return (
    <section id="stories" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Stories of Transformation</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Real people, real transformations. Discover how others have found their light and 
          stepped into their authentic power.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-teal-600 mb-4" />
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link href="/stories">
          <Button size="lg" variant="outline" className="border-amber-500 text-amber-600 hover:bg-amber-50 px-8 py-4 text-lg">
            Read More Stories
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </div>
    </div>
  </section>

  )
}

export default Stories