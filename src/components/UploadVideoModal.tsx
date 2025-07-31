import React, { useState } from 'react';
import { X, Upload, Video, FileText, Tag, Calendar } from 'lucide-react';
import Logo from './Logo';

interface UploadVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UploadVideoModal: React.FC<UploadVideoModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'upload' | 'details' | 'success'>('upload');
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoDetails, setVideoDetails] = useState({
    title: '',
    description: '',
    category: '',
    tags: '',
    visibility: 'public',
    thumbnail: null as File | null
  });

  if (!isOpen) return null;

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideoFile(file);
      setStep('details');
    }
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate upload processing
    setTimeout(() => {
      setStep('success');
    }, 2000);
  };

  const resetModal = () => {
    setStep('upload');
    setVideoFile(null);
    setVideoDetails({
      title: '', description: '', category: '', tags: '', visibility: 'public', thumbnail: null
    });
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <Logo size="sm" showText={false} />
            <h2 className="text-2xl font-bold text-gray-900">
              {step === 'upload' && 'Upload Your Success Story'}
              {step === 'details' && 'Video Details'}
              {step === 'success' && 'Upload Successful!'}
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {step === 'upload' && (
          <div className="p-6">
            <div className="text-center mb-8">
              <Video className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Share Your Startup Journey</h3>
              <p className="text-gray-600">
                Help inspire other entrepreneurs by sharing your success story, challenges overcome, or valuable lessons learned.
              </p>
            </div>

            <div className="border-2 border-dashed border-emerald-300 rounded-xl p-8 text-center hover:border-emerald-400 transition-colors">
              <Upload className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Drop your video here</h4>
              <p className="text-gray-600 mb-4">or click to browse</p>
              
              <input
                type="file"
                accept="video/*"
                onChange={handleVideoUpload}
                className="hidden"
                id="video-upload"
              />
              <label
                htmlFor="video-upload"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold cursor-pointer transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Choose Video File
              </label>
              
              <div className="mt-4 text-sm text-gray-500">
                <p>Supported formats: MP4, MOV, AVI, WMV</p>
                <p>Maximum file size: 500MB</p>
                <p>Recommended duration: 2-15 minutes</p>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 rounded-xl p-6">
              <h4 className="font-bold text-blue-900 mb-3">Video Content Guidelines:</h4>
              <ul className="text-sm text-blue-800 space-y-2">
                <li>• Share authentic experiences and real challenges</li>
                <li>• Focus on actionable insights and lessons learned</li>
                <li>• Keep content professional and appropriate</li>
                <li>• Include specific examples and metrics when possible</li>
                <li>• Ensure good audio and video quality</li>
              </ul>
            </div>
          </div>
        )}

        {step === 'details' && (
          <div className="p-6">
            <div className="mb-6">
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <Video className="w-8 h-8 text-emerald-600" />
                <div>
                  <div className="font-semibold text-gray-900">{videoFile?.name}</div>
                  <div className="text-sm text-gray-600">
                    {videoFile && (videoFile.size / (1024 * 1024)).toFixed(2)} MB
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleDetailsSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FileText className="w-4 h-4 inline mr-2" />
                  Video Title *
                </label>
                <input
                  type="text"
                  required
                  value={videoDetails.title}
                  onChange={(e) => setVideoDetails({...videoDetails, title: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="e.g., How I Saved My Startup from Bankruptcy"
                  maxLength={100}
                />
                <div className="text-right text-sm text-gray-500 mt-1">
                  {videoDetails.title.length}/100
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Video Description *
                </label>
                <textarea
                  required
                  rows={4}
                  value={videoDetails.description}
                  onChange={(e) => setVideoDetails({...videoDetails, description: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Describe your video content, key takeaways, and what viewers will learn..."
                  maxLength={500}
                />
                <div className="text-right text-sm text-gray-500 mt-1">
                  {videoDetails.description.length}/500
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Tag className="w-4 h-4 inline mr-2" />
                  Category *
                </label>
                <select
                  required
                  value={videoDetails.category}
                  onChange={(e) => setVideoDetails({...videoDetails, category: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="">Select a category</option>
                  <option value="success-story">Success Story</option>
                  <option value="crisis-management">Crisis Management</option>
                  <option value="funding">Funding & Investment</option>
                  <option value="team-building">Team Building</option>
                  <option value="product-development">Product Development</option>
                  <option value="marketing">Marketing & Growth</option>
                  <option value="lessons-learned">Lessons Learned</option>
                  <option value="pivot-story">Pivot Story</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags (optional)
                </label>
                <input
                  type="text"
                  value={videoDetails.tags}
                  onChange={(e) => setVideoDetails({...videoDetails, tags: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="e.g., startup, entrepreneur, funding, pivot (comma-separated)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Video Thumbnail (optional)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setVideoDetails({...videoDetails, thumbnail: e.target.files?.[0] || null})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Upload a custom thumbnail (recommended: 1280x720px, JPG/PNG)
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Visibility
                </label>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="public"
                      checked={videoDetails.visibility === 'public'}
                      onChange={(e) => setVideoDetails({...videoDetails, visibility: e.target.value})}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium">Public</div>
                      <div className="text-sm text-gray-600">Anyone can view this video</div>
                    </div>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="members"
                      checked={videoDetails.visibility === 'members'}
                      onChange={(e) => setVideoDetails({...videoDetails, visibility: e.target.value})}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium">Members Only</div>
                      <div className="text-sm text-gray-600">Only Business Saviour members can view</div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div className="text-sm">
                    <div className="font-medium text-yellow-800">Review Process</div>
                    <div className="text-yellow-700 mt-1">
                      Your video will be reviewed by our team within 24 hours to ensure it meets our community guidelines. You'll receive an email notification once it's approved and published.
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep('upload')}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Back to Upload
                </button>
                <button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Upload Video
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 'success' && (
          <div className="p-6 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload className="w-10 h-10 text-green-500" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Upload Successful!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for sharing your story! Your video "{videoDetails.title}" has been submitted successfully.
              </p>

              <div className="bg-blue-50 rounded-xl p-4 mb-6">
                <h4 className="font-bold text-blue-900 mb-2">What's Next?</h4>
                <ul className="text-sm text-blue-800 text-left space-y-1">
                  <li>• Our team will review your video within 24 hours</li>
                  <li>• You'll receive an email notification once approved</li>
                  <li>• Your video will be featured in our motivation gallery</li>
                  <li>• You'll earn community points and recognition</li>
                </ul>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleClose}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Upload Another Video
                </button>
                <button
                  onClick={handleClose}
                  className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadVideoModal;