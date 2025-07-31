import React, { useState } from 'react';
import { Play, Upload, Heart, Eye, Clock } from 'lucide-react';

const motivationalVideos = [
  {
    id: 1,
    title: 'From Zero to Hero: A Startup Success Story',
    thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '12:45',
    views: '2.1M',
    likes: '45K',
    description: 'Learn how this entrepreneur transformed a failing startup into a unicorn company.'
  },
  {
    id: 2,
    title: 'Overcoming Business Failures: 5 Key Strategies',
    thumbnail: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '8:30',
    views: '890K',
    likes: '32K',
    description: 'Expert insights on turning business setbacks into comeback opportunities.'
  },
  {
    id: 3,
    title: 'The Mindset of Successful Entrepreneurs',
    thumbnail: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '15:20',
    views: '1.5M',
    likes: '67K',
    description: 'Developing the mental resilience needed for entrepreneurial success.'
  },
  {
    id: 4,
    title: 'Building a Team That Never Gives Up',
    thumbnail: 'https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '10:15',
    views: '650K',
    likes: '28K',
    description: 'How to recruit and motivate a team that will stick with you through tough times.'
  }
];

interface VideoSectionProps {
  onUploadClick: () => void;
}

const VideoSection: React.FC<VideoSectionProps> = ({ onUploadClick }) => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  return (
    <section id="videos" className="py-20 bg-gradient-to-br from-blue-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Motivational <span className="text-emerald-600">Videos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get inspired by real success stories and expert advice on overcoming startup challenges and building resilient businesses.
          </p>
          
          <button 
            onClick={onUploadClick}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto"
          >
            <Upload className="w-5 h-5" />
            <span>Upload Your Success Story</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {motivationalVideos.map((video) => (
            <div
              key={video.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
              onClick={() => setSelectedVideo(video.id)}
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <Play className="w-8 h-8 text-white fill-current" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {video.duration}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {video.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {video.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      <span>{video.views}</span>
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-4 h-4 mr-1" />
                      <span>{video.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            View All Videos
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;