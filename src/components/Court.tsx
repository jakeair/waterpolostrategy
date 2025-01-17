import React from 'react';

interface CourtProps {
  children: React.ReactNode;
  width?: number;
  height?: number;
}

const Court: React.FC<CourtProps> = ({ children }) => {
  return (
    <div className="px-3 sm:px-4 md:px-6 lg:px-8 h-full pt-6 sm:pt-8 md:pt-10 lg:pt-12 mb-16 sm:mb-20 md:mb-24 lg:mb-28">
      <div 
        className="court relative w-full h-full"
        style={{ 
          maxWidth: '100%',
          margin: '0 auto',
          overflow: 'visible',
        }}
      >
        <div className="goal goal-top">
          <div className="goal-net" />
        </div>
        <div className="goal goal-bottom">
          <div className="goal-net" />
        </div>

        <div className="line two-meter-line" style={{ top: '8%' }}></div>
        <div className="line five-meter-line" style={{ top: '20%' }}></div>
        <div className="line six-meter-line" style={{ top: '24%' }}></div>
        <div className="line two-meter-line" style={{ bottom: '8%' }}></div>
        <div className="line five-meter-line" style={{ bottom: '20%' }}></div>
        <div className="line six-meter-line" style={{ bottom: '24%' }}></div>
        <div className="line halfway-line" style={{ top: '50%' }}></div>

        {children}
      </div>
    </div>
  );
};

export default Court;