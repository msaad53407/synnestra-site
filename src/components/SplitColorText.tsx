import React from 'react';

type Props = {
  text: string;
  firstColor: string;
  secondColor: string;
  viaColor?: string;
  className?: string;
};

const SplitColorText = ({ text, firstColor, secondColor, className = '', viaColor }: Props) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <span
        className={`relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-30% ${firstColor} ${secondColor} ${viaColor}`}
      >
        {text}
      </span>
      <span className={`absolute inset-0 z-0 ${firstColor}`} aria-hidden="true">
        {text}
      </span>
    </div>
  );
};

export default SplitColorText;
