import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "5511999999999";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá%2C+vim+pelo+site+e+gostaria+de+uma+análise+do+meu+caso.`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Direito Bancário', path: '/direito-bancario' },
    { name: 'Direito Securitário', path: '/direito-securitario' },
    { name: 'Direito Trabalhista', path: '/direito-trabalhista' },
    { name: 'Direito Previdenciário', path: '/direito-previdenciario' },
  ];

  return (
    <nav className="fixed top-6 left-0 w-full z-50 px-6">
      <div className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-500 rounded-full px-8 py-3 border ${isScrolled ? 'bg-white/70 backdrop-blur-lg border-white/20 shadow-lg' : 'bg-white/10 backdrop-blur-md border-white/10'}`}>
        <Link to="/">
          <Logo variant={isScrolled ? 'dark' : 'light'} size={28} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium transition-colors hover:text-brand-blue ${isScrolled ? 'text-brand-navy' : 'text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <Button href={whatsappLink} isExternal variant={isScrolled ? "primary" : "white"} className="py-2 px-6 text-sm">
            Falar com especialista
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden transition-colors ${isScrolled ? 'text-brand-navy' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 bg-brand-navy/95 backdrop-blur-xl z-40 transition-transform duration-500 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          <button
            className="absolute top-8 right-8 text-white"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-10 h-10" />
          </button>
          <Logo variant="light" size={32} />
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-white hover:text-brand-blue"
            >
              {link.name}
            </Link>
          ))}
          <Button href={whatsappLink} isExternal variant="white" className="w-full">
            Falar com especialista
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
