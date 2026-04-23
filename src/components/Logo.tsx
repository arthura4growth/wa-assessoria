import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark', size = 32 }) => {
  return (
    <img
      src="/logo.svg"
      alt="WA Advogados"
      height={size}
      style={{
        height: size,
        width: 'auto',
        filter: variant === 'light' ? 'brightness(0) invert(1)' : 'none',
      }}
    />
  );
};

export default Logo;
