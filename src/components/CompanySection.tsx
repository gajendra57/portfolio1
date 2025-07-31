import React from 'react';
import { ExternalLink, Users, TrendingUp } from 'lucide-react';

const companies = [
  {
    name: 'TechFlow Solutions',
    logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
    industry: 'SaaS Technology',
    partnership: 'Strategic Partner',
    description: 'Leading SaaS provider helping businesses streamline operations'
  },
  {
    name: 'GreenVenture Capital',
    logo: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400',
    industry: 'Investment',
    partnership: 'Funding Partner',
    description: 'Sustainable investment firm focused on green technology startups'
  },
  {
    name: 'InnovateLabs',
    logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
    industry: 'R&D',
    partnership: 'Innovation Partner',
    description: 'Research and development company accelerating startup innovation'
  },
  {
    name: 'Digital Marketing Pro',
    logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
    industry: 'Marketing',
    partnership: 'Service Partner',
    description: 'Full-service digital marketing agency for growing businesses'
  },
  {
    name: 'CloudSecure Systems',
    logo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
    industry: 'Cybersecurity',
    partnership: 'Technology Partner',
    description: 'Enterprise-grade security solutions for startups and SMEs'
  },
  {
    name: 'DataInsight Analytics',
    logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
    industry: 'Data Analytics',
    partnership: 'Strategic Partner',
    description: 'Advanced analytics platform for data-driven business decisions'
  }
];

const CompanySection: React.FC = () => {
  return (
    <section id="companies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Partner</span> Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with industry-leading companies to provide comprehensive support and resources for your startup's success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium bg-blue-600/80 backdrop-blur-sm px-2 py-1 rounded">
                    {company.partnership}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{company.name}</h3>
                  <ExternalLink className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                </div>

                <div className="flex items-center text-emerald-600 font-semibold mb-3">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  <span>{company.industry}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4">
                  {company.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Users className="w-4 h-4 mr-1" />
                    <span>Active Partnership</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;