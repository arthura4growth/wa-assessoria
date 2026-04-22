import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-brand-blue-border py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <Link to="/" className="text-2xl font-bold tracking-widest text-brand-navy mb-6 block">
              WA ASSESSORIA
            </Link>
            <p className="text-brand-navy-muted leading-relaxed">
              Especialistas em Direito Bancário e Securitário. Atuação ética, transparente e focada em resultados reais para nossos clientes.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-brand-navy mb-8">Navegação</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-brand-navy-muted hover:text-brand-blue transition-colors">Home</Link></li>
              <li><Link to="/direito-bancario" className="text-brand-navy-muted hover:text-brand-blue transition-colors">Direito Bancário</Link></li>
              <li><Link to="/direito-securitario" className="text-brand-navy-muted hover:text-brand-blue transition-colors">Direito Securitário</Link></li>
              <li><a href="#sobre" className="text-brand-navy-muted hover:text-brand-blue transition-colors">Sobre Nós</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-brand-navy mb-8">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-brand-navy-muted">
                <Phone className="w-5 h-5 text-brand-blue shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-start gap-3 text-brand-navy-muted">
                <Mail className="w-5 h-5 text-brand-blue shrink-0" />
                <span>contato@waassessoria.com.br</span>
              </li>
              <li className="flex items-start gap-3 text-brand-navy-muted">
                <MapPin className="w-5 h-5 text-brand-blue shrink-0" />
                <span>Rua Fictícia, 123 - Centro, São Paulo - SP</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-brand-navy mb-8">Horário</h4>
            <p className="text-brand-navy-muted leading-relaxed">
              Segunda a Sexta<br />
              09:00 às 18:00
            </p>
          </div>
        </div>

        <div className="pt-10 border-t border-brand-blue-border flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-brand-navy-muted">
          <p>© {currentYear} WA Assessoria Jurídica · OAB/SP 000.000</p>
          <div className="flex gap-8">
            <Link to="/politica-de-privacidade" className="hover:text-brand-blue transition-colors">Política de Privacidade</Link>
            <Link to="/termos-de-uso" className="hover:text-brand-blue transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
