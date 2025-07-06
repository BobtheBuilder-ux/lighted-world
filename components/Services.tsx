import { ChevronRight, Heart, Lightbulb, Link, Star, Users } from 'lucide-react';
import React from 'react'
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const Services = () => {
      const services = [
        {
          icon: <Lightbulb className="w-8 h-8" />,
          title: "Self-Discovery Journey",
          description: "Uncover your authentic self through guided exploration and reflection exercises."
        },
        {
          icon: <Star className="w-8 h-8" />,
          title: "Potential Maximization",
          description: "Develop strategies to unlock and amplify your unique talents and abilities."
        },
        {
          icon: <Heart className="w-8 h-8" />,
          title: "Purpose Alignment",
          description: "Connect with your deeper purpose and create a meaningful life path."
        },
        {
          icon: <Users className="w-8 h-8" />,
          title: "Community Support",
          description: "Join a supportive community of like-minded individuals on similar journeys."
        }
      ];
  return (
    <section id="services" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">How We Light Your Path</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our comprehensive approach combines proven methodologies with personalized support 
          to help you discover, develop, and deploy your unique gifts.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link href="/services">
          <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg">
            Explore All Services
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </div>
    </div>
  </section>

  )
}

export default Services