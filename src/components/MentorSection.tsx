import React from 'react';
import { Star, Award, Users, Calendar } from 'lucide-react';

const mentors = [
  {
    id: 1,
    name: 'Sarah Johnson',
    expertise: 'Tech Startup Strategy',
    experience: '15+ years',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400',
    price: '$150/hour',
    description: 'Former VP at Google, specialized in scaling tech startups from seed to IPO.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    expertise: 'Financial Planning',
    experience: '12+ years',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400',
    price: '$120/hour',
    description: 'Investment banker turned startup mentor, expert in fundraising and financial strategy.'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    expertise: 'Marketing & Growth',
    experience: '10+ years',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
    price: '$100/hour',
    description: 'Growth hacker who helped 50+ startups achieve 10x growth in their first year.'
  },
  {
    id: 4,
    name: 'David Kumar',
    expertise: 'Operations & Scale',
    experience: '18+ years',
    rating: 5.0,
    image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400',
    price: '$200/hour',
    description: 'Operations expert who scaled multiple unicorn startups, specializes in operational excellence.'
  }
];

const MentorSection: React.FC = () => {
  return (
    <section id="mentors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Expert <span className="text-emerald-600">Mentors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with industry veterans who have successfully navigated the startup journey and are ready to guide you through your challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold">{mentor.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {mentor.price}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{mentor.name}</h3>
                  <Award className="w-5 h-5 text-emerald-600" />
                </div>
                
                <div className="text-emerald-600 font-semibold mb-2">{mentor.expertise}</div>
                
                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <Users className="w-4 h-4 mr-1" />
                  <span>{mentor.experience} experience</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {mentor.description}
                </p>

                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Book Session</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            View All Mentors
          </button>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;