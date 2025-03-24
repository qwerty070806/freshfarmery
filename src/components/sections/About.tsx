
import React from 'react';
import { Truck, ShieldCheck, Users, Leaf } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Leaf className="h-6 w-6 text-nature-600" />,
      title: "100% Organic",
      description: "All our products are certified organic, grown without synthetic pesticides or GMOs."
    },
    {
      icon: <Truck className="h-6 w-6 text-nature-600" />,
      title: "Fast Delivery",
      description: "We deliver your orders within 24 hours to ensure maximum freshness."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-nature-600" />,
      title: "Quality Guarantee",
      description: "We stand behind our products with a 100% satisfaction guarantee."
    },
    {
      icon: <Users className="h-6 w-6 text-nature-600" />,
      title: "Support Farmers",
      description: "Your purchase directly supports local farmers and sustainable agriculture."
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="relative animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Farmers working in field" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Accent Elements */}
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-nature-100 rounded-full -z-10"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-nature-200 rounded-full -z-10"></div>
          </div>
          
          {/* Content Column */}
          <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-nature-100 text-nature-600 rounded-full text-sm font-medium">
                Our Story
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Connecting People With <span className="text-nature-600">Nature's Best</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              At AgroCraft, we believe in the power of fresh, locally grown produce. Founded in 2020, our mission is to bridge the gap between farmers and consumers, eliminating middlemen and ensuring farmers receive fair prices for their hard work.
            </p>
            <p className="text-gray-600 mb-10 leading-relaxed">
              We've partnered with over 200 local farmers who practice sustainable farming methods. Every product on our platform is harvested only after you place an order, guaranteeing peak freshness and flavor that mass-produced alternatives simply can't match.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-nature-50 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
