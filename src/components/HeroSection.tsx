import React from 'react';
import { ArrowRight, TrendingUp, Users, Star, CheckCircle } from 'lucide-react';
import Logo from './Logo';

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background with Custom Green */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, 
            rgba(187, 255, 156, 0.1) 0%, 
            rgba(0, 200, 83, 0.1) 25%,
            rgba(13, 71, 161, 0.1) 50%,
            rgba(187, 255, 156, 0.1) 75%,
            rgba(0, 200, 83, 0.1) 100%
          )`,
          backgroundImage: `url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, 
              rgba(0, 200, 83, 0.85) 0%, 
              rgba(13, 71, 161, 0.75) 50%,
              rgba(187, 255, 156, 0.65) 100%
            )`
          }}
        ></div>
      </div>

      {/* Floating Elements with Custom Colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-10 w-20 h-20 rounded-full animate-bounce delay-1000"
          style={{ backgroundColor: 'rgba(187, 255, 156, 0.3)' }}
        ></div>
        <div 
          className="absolute top-1/3 right-16 w-16 h-16 rounded-full animate-bounce delay-2000"
          style={{ backgroundColor: 'rgba(13, 71, 161, 0.3)' }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-1/3 w-12 h-12 rounded-full animate-pulse"
          style={{ backgroundColor: 'rgba(0, 200, 83, 0.4)' }}
        ></div>
        <div 
          className="absolute top-1/2 right-1/4 w-8 h-8 rounded-full animate-ping"
          style={{ backgroundColor: 'rgba(187, 255, 156, 0.5)' }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Logo Animation */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-white/20 backdrop-blur-md rounded-full mb-8 animate-pulse border-4 border-white/30">
              <Logo size="lg" showText={false} className="text-white" />
            </div>
            <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 animate-fade-in">
              Business <span style={{ color: '#BBFF9C' }}>Saviour</span>
            </h1>
          </div>

          {/* Main Heading with Blue Color */}
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-slide-up">
            Don't Be Scared,
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8 animate-slide-up delay-200" style={{ color: '#0D47A1' }}>
            We Are With You
          </h3>

          <p className="text-2xl md:text-3xl text-gray-100 mb-12 max-w-4xl mx-auto animate-slide-up delay-300 leading-relaxed">
            Protecting startups from downfall with expert mentorship, strategic guidance, and comprehensive 24/7 support systems.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16 animate-slide-up delay-500">
            <button
              onClick={onGetStarted}
              className="group bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-2xl border-2 border-white/20"
            >
              <Users className="w-6 h-6" />
              <span>I am a Business/Startup looking for help</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={onGetStarted}
              className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-2xl border-2 border-white/20"
            >
              <TrendingUp className="w-6 h-6" />
              <span>I want to Partner/Invest/Subscribe</span>
              <TrendingUp className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Enhanced Stats with Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 animate-fade-in delay-700">
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2" style={{ color: '#BBFF9C' }}>500+</div>
              <div className="text-white font-semibold">Startups Saved</div>
              <div className="text-gray-200 text-sm mt-2">From Bankruptcy</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2" style={{ color: '#0D47A1' }}>50+</div>
              <div className="text-white font-semibold">Expert Mentors</div>
              <div className="text-gray-200 text-sm mt-2">10+ Years Experience</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2" style={{ color: '#BBFF9C' }}>95%</div>
              <div className="text-white font-semibold">Success Rate</div>
              <div className="text-gray-200 text-sm mt-2">Proven Results</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2" style={{ color: '#0D47A1' }}>24/7</div>
              <div className="text-white font-semibold">Emergency Support</div>
              <div className="text-gray-200 text-sm mt-2">Always Available</div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 animate-fade-in delay-900">
            <div className="flex items-center space-x-2 bg-white/15 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-white font-semibold ml-2">4.9/5 Rating</span>
            </div>
            
            <div className="flex items-center space-x-2 bg-white/15 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <CheckCircle className="w-5 h-5" style={{ color: '#BBFF9C' }} />
              <span className="text-white font-semibold">Verified Mentors</span>
            </div>
            
            <div className="flex items-center space-x-2 bg-white/15 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <Logo size="sm" showText={false} className="text-white" />
              <span className="text-white font-semibold">100% Secure</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;