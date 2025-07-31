import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Alex Thompson',
    company: 'TechStart Inc.',
    rating: 5,
    image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=200',
    review: 'Business Saviour literally saved our startup from bankruptcy. Their mentorship program connected us with industry experts who helped us pivot and find our product-market fit. We went from near-closure to $2M in revenue within 18 months.',
    result: 'From bankruptcy to $2M revenue'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    company: 'EcoSolutions',
    rating: 5,
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=200',
    review: 'The strategic guidance and emotional support we received was incredible. When we were struggling with team management and cash flow, Business Saviour provided both practical solutions and the motivation to keep going.',
    result: 'Successful Series A funding'
  },
  {
    id: 3,
    name: 'Marcus Johnson',
    company: 'FinTech Innovations',
    rating: 5,
    image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=200',
    review: 'Their mentor matching system is phenomenal. They connected me with a mentor who had faced similar challenges in the fintech space. The personalized guidance helped us navigate regulatory challenges and scale efficiently.',
    result: 'Regulatory approval achieved'
  },
  {
    id: 4,
    name: 'Sarah Kim',
    company: 'HealthTech Pro',
    rating: 5,
    image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=200',
    review: 'Business Saviour\'s comprehensive support system is unmatched. From technical guidance to emotional support during our darkest hours, they were there every step of the way. We couldn\'t have made it without them.',
    result: 'Successfully launched MVP'
  }
];

const ReviewSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-emerald-400">Clients</span> Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real stories from entrepreneurs who overcame challenges and achieved success with our support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="group bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 transform hover:-translate-y-1 border border-gray-600"
            >
              <div className="flex items-center mb-6">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-emerald-400"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">{review.name}</h3>
                  <p className="text-emerald-400 font-semibold">{review.company}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-emerald-400/30" />
                <p className="text-gray-300 text-lg leading-relaxed mb-4 pl-6">
                  {review.review}
                </p>
              </div>

              <div className="bg-emerald-600/20 border border-emerald-600/30 rounded-lg p-4 mt-6">
                <p className="text-emerald-400 font-semibold text-center">
                  Result: {review.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Share Your Success Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;