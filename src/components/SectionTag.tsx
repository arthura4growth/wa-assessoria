import React from 'react';

interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTag: React.FC<SectionTagProps> = ({ children, className = '' }) => {
  return (
    <span className={`inline-block py-1 px-3 bg-brand-blue-light text-brand-blue text-sm font-semibold rounded-md tracking-wider uppercase mb-6 ${className}`}>
      {children}
    </span>
  );
};

export default SectionTag;
