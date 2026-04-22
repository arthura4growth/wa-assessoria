import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  className?: string;
  onClick?: () => void;
  href?: string;
  isExternal?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  href,
  isExternal = false
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] will-change-transform text-center";
  
  const variants = {
    primary: "bg-brand-navy text-white hover:bg-brand-blue",
    secondary: "bg-brand-blue text-white hover:bg-brand-navy",
    outline: "bg-transparent border border-brand-navy text-brand-navy hover:bg-brand-blue-light",
    white: "bg-white text-brand-navy hover:bg-brand-blue hover:text-white"
  };

  const content = (
    <>
      {children}
      <ArrowUpRight className="w-5 h-5" />
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`${baseStyles} ${variants[variant]} ${className}`}
        >
          {content}
        </a>
      );
    }
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {content}
    </button>
  );
};

export default Button;
