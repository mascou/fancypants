import React from 'react';
import { Award, Users, Leaf, Heart } from 'lucide-react';
import { brandInfo } from '../data/mockData';

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description: "Every piece is meticulously crafted using traditional techniques and premium materials to ensure lasting quality."
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "Our customers are at the heart of everything we do. We listen, adapt, and continuously improve based on their feedback."
    },
    {
      icon: Leaf,
      title: "Sustainable Fashion",
      description: "We're committed to responsible production practices and sustainable materials to minimize our environmental impact."
    },
    {
      icon: Heart,
      title: "Passionate Team",
      description: "Our team shares a passion for creating exceptional fashion that makes our customers feel confident and stylish."
    }
  ];

  const team = [
    {
      name: "Alexandra Chen",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b613bbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      bio: "With over 15 years in fashion, Alexandra brings a unique vision to contemporary design."
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Production",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      bio: "Marcus ensures every piece meets our exacting standards through meticulous quality control."
    },
    {
      name: "Sarah Johnson",
      role: "Sustainability Officer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      bio: "Sarah leads our sustainability initiatives, ensuring our practices are environmentally responsible."
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "Founded",
      description: "LUXE PANTS was born from a vision to create premium, sustainable fashion."
    },
    {
      year: "2020",
      title: "First Collection",
      description: "Launched our inaugural collection of premium trousers to critical acclaim."
    },
    {
      year: "2022",
      title: "Sustainability Pledge",
      description: "Committed to carbon-neutral production and sustainable materials."
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanded to serve customers worldwide with our premium collections."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About {brandInfo.name}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {brandInfo.story}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-black p-4 rounded-full">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              The passionate people behind LUXE PANTS
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-gray-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in our growth and evolution
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="bg-black text-white px-3 py-1 rounded-full text-sm font-bold">
                          {milestone.year}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Experience LUXE PANTS?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Discover our collection and join the thousands who have transformed their style
          </p>
          <a
            href="/shop"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-black bg-white rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Shop Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;