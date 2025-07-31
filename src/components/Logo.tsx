import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '', showText = true }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl'
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo SVG */}
      <div className={`${sizeClasses[size]} flex-shrink-0`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Brush-stroke circle background */}
          <path
            d="M50 10 C70 10, 85 25, 85 45 C85 65, 70 80, 50 80 C30 80, 15 65, 15 45 C15 25, 30 10, 50 10"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            className="text-gray-800"
          />
          
          {/* BS Letters */}
          <g className="text-gray-800">
            {/* Letter B */}
            <path
              d="M25 25 L25 65 M25 25 L40 25 Q50 25, 50 35 Q50 45, 40 45 L25 45 M25 45 L40 45 Q50 45, 50 55 Q50 65, 40 65 L25 65"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            {/* Letter S */}
            <path
              d="M55 25 Q70 25, 70 35 Q70 45, 55 45 Q70 45, 70 55 Q70 65, 55 65"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          
          {/* City Skyline - integrated into the baseline of BS */}
          <g className="text-gray-600">
            {/* Building 1 */}
            <rect x="28" y="60" width="3" height="8" fill="currentColor" />
            <rect x="29" y="62" width="1" height="1" fill="white" />
            <rect x="29" y="64" width="1" height="1" fill="white" />
            
            {/* Building 2 */}
            <rect x="32" y="58" width="2" height="10" fill="currentColor" />
            <rect x="32.5" y="60" width="1" height="1" fill="white" />
            <rect x="32.5" y="62" width="1" height="1" fill="white" />
            <rect x="32.5" y="64" width="1" height="1" fill="white" />
            
            {/* Building 3 */}
            <rect x="35" y="62" width="2" height="6" fill="currentColor" />
            <rect x="35.5" y="64" width="1" height="1" fill="white" />
            
            {/* Building 4 */}
            <rect x="38" y="59" width="3" height="9" fill="currentColor" />
            <rect x="39" y="61" width="1" height="1" fill="white" />
            <rect x="39" y="63" width="1" height="1" fill="white" />
            <rect x="39" y="65" width="1" height="1" fill="white" />
            
            {/* Building 5 */}
            <rect x="42" y="61" width="2" height="7" fill="currentColor" />
            <rect x="42.5" y="63" width="1" height="1" fill="white" />
            <rect x="42.5" y="65" width="1" height="1" fill="white" />
            
            {/* Building 6 */}
            <rect x="45" y="60" width="2" height="8" fill="currentColor" />
            <rect x="45.5" y="62" width="1" height="1" fill="white" />
            <rect x="45.5" y="64" width="1" height="1" fill="white" />
            
            {/* Building 7 */}
            <rect x="48" y="58" width="3" height="10" fill="currentColor" />
            <rect x="49" y="60" width="1" height="1" fill="white" />
            <rect x="49" y="62" width="1" height="1" fill="white" />
            <rect x="49" y="64" width="1" height="1" fill="white" />
            
            {/* Building 8 */}
            <rect x="52" y="62" width="2" height="6" fill="currentColor" />
            <rect x="52.5" y="64" width="1" height="1" fill="white" />
            
            {/* Building 9 */}
            <rect x="55" y="59" width="3" height="9" fill="currentColor" />
            <rect x="56" y="61" width="1" height="1" fill="white" />
            <rect x="56" y="63" width="1" height="1" fill="white" />
            <rect x="56" y="65" width="1" height="1" fill="white" />
            
            {/* Building 10 */}
            <rect x="59" y="61" width="2" height="7" fill="currentColor" />
            <rect x="59.5" y="63" width="1" height="1" fill="white" />
            <rect x="59.5" y="65" width="1" height="1" fill="white" />
            
            {/* Building 11 */}
            <rect x="62" y="60" width="2" height="8" fill="currentColor" />
            <rect x="62.5" y="62" width="1" height="1" fill="white" />
            <rect x="62.5" y="64" width="1" height="1" fill="white" />
            
            {/* Building 12 */}
            <rect x="65" y="58" width="3" height="10" fill="currentColor" />
            <rect x="66" y="60" width="1" height="1" fill="white" />
            <rect x="66" y="62" width="1" height="1" fill="white" />
            <rect x="66" y="64" width="1" height="1" fill="white" />
          </g>
        </svg>
      </div>
      
      {/* Text */}
      {showText && (
        <div>
          <div className={`font-bold ${textSizes[size]} text-gray-800`}>
            BUSINESS SAVIOUR
          </div>
          {size === 'md' && (
            <div className="text-xs text-gray-600 font-medium">Startup Protection Platform</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo; 