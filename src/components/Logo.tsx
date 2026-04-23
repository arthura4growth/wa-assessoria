import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark', size = 32 }) => {
  return (
    <img
      src="/logo-wa.png"
      alt="WA Advogados"
      style={{
        height: size,
        width: 'auto',
        filter: variant === 'dark' ? 'brightness(0) contrast(100%)' : 'none',
      }}
    />
  );
};

export default Logo;
