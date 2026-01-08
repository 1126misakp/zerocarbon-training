import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-12" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Increased viewBox width and adjusted translation to prevent clipping */}
      <svg viewBox="0 0 240 60" className="h-full w-auto">
        <g transform="translate(35, 30)">
          {/* Left Green Circles */}
          {[...Array(10)].map((_, i) => {
            const angle = (i / 10) * Math.PI * 2;
            const x = Math.cos(angle) * 15;
            const y = Math.sin(angle) * 15;
            return <circle key={`g-${i}`} cx={x} cy={y} r="3.5" fill="#81BC00" />;
          })}
          {/* Right Blue Circles */}
          <g transform="translate(35, 0)">
            {[...Array(10)].map((_, i) => {
              const angle = (i / 10) * Math.PI * 2;
              const x = Math.cos(angle) * 15;
              const y = Math.sin(angle) * 15;
              return <circle key={`b-${i}`} cx={x} cy={y} r="3.5" fill="#005094" />;
            })}
          </g>
        </g>
        {/* Text Part - Shifted right to accommodate the new graphic position */}
        <text x="105" y="28" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="16" fill="#005094">中国节能</text>
        <text x="105" y="48" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="18" fill="#005094">CECEP</text>
      </svg>
    </div>
  );
};

export default Logo;