import React, { useState } from 'react';
import NextImage, { ImageProps } from 'next/image';

interface CustomImageProps extends Omit<ImageProps, 'onLoadingComplete'> {
  loaderComponent?: React.ReactNode;
  onLoadingComplete?: (result: { naturalWidth: number; naturalHeight: number }) => void;
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  placeholder = 'blur',
  blurDataURL,
  onLoadingComplete,
  loaderComponent,
  ...rest
}) => {
  const [isLoading, setIsLoading] = useState(true);

  // Handle the onLoadComplete event to update our loading state
  const handleLoadingComplete = (result: { naturalWidth: number; naturalHeight: number }) => {
    setIsLoading(false);
    if (onLoadingComplete) {
      onLoadingComplete(result);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      {isLoading && (
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(255, 255, 255, 0.7)',
            zIndex: 1,
          }}
        >
          {loaderComponent || 'Loading...'}
        </div>
      )}
      <NextImage
        src={src}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        onLoadingComplete={handleLoadingComplete}
        {...rest}
      />
    </div>
  );
};

export default CustomImage;
