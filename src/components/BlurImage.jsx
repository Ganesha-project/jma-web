'use client'
import React, { useState } from 'react';

const BlurredImage = ({ src, alt, style }) => {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoaded = () => {
    setLoaded(true);
  };

  return (
    <div className="relative w-full h-full">
      {/* Blur layer */}
      {!loaded && (
        <div className="absolute inset-0 filter blur-lg">
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        className={`${style} object-cover ${loaded ? '' : 'hidden'}`}
        onLoad={handleImageLoaded}
      />
    </div>
  );
};

export default BlurredImage;
