import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Button from '../components/Button';
import SectionTag from '../components/SectionTag';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ShieldAlert, Gavel, FileSearch, MessageSquareQuote } from 'lucide-react';

const DireitoSecuritario: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "5511999999999";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá%2C+vim+pelo+site+e+gostaria+de+uma+análise+do+my+caso+de+Direito+Securitário.`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    if (prefersReducedMotion) return;

    gsap.from('.reveal-up', {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      }
    });
  }, { scope: container });

  return (
    <div ref={container}>
      <Helmet>
        <title>Direito Securitário | WA Assessoria Jurídica</title>
        <meta name="description" content="Seu seguro foi negado? Você pode ter direito à indenização. Especialistas em causas contra seguradoras." />
      </Helmet>

      {/* Hero Page */}
      <section className="pt-40 pb-20 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto text-center px-6">
          <SectionTag className="!bg-white/10 !text-white mb-8 reveal-up">Direito Securitário</SectionTag>
          <h1 className="text-4xl md:text-6xl font-semibold mb-8 leading-tight reveal-up">
            Seu seguro foi negado? Você pode ter direito à indenização.
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12 reveal-up">
            As seguradoras lucram com negativas injustas. Não desista do que é seu por direito. Lutamos para que você receba cada centavo da sua apólice.
          </p>
          <div className="reveal-up">
            <Button href={whatsappLink} isExternal variant="white">Falar com especialista</Button>
          </div>
        </div>
      </section>

      {/* Problema / Indignação */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <SectionTag>O Cenário</SectionTag>
            <h2 className="text-3xl md:text-4xl text-brand-navy mb-6">
              Se você se sente injustiçado, provavelmente está.
            </h2>
            <p className="text-xl text-brand-navy-muted max-w-3xl mx-auto">
              Negativas de cobertura são comuns e, muitas vezes, baseadas em interpretações abusivas do contrato.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="p-10 bg-brand-blue-light rounded-3xl reveal-up">
              <ShieldAlert className="w-12 h-12 text-brand-blue mb-6" />
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Negativas Comuns</h3>
              <ul className="space-y-4 text-brand-navy-muted text-lg">
                <li>• Alegação de doença pré-existente</li>
                <li>• Omissão de informações irrelevantes</li>
                <li>• Sinistro "não coberto" por interpretação dúbia</li>
                <li>• Valor da indenização muito abaixo do real</li>
              </ul>
            </div>
            <div className="p-10 bg-brand-navy text-white rounded-3xl flex flex-col justify-center reveal-up">
              <MessageSquareQuote className="w-12 h-12 text-brand-blue mb-6" />
              <p className="text-2xl font-medium leading-relaxed italic">
                "As cláusulas de exclusão devem ser interpretadas da forma mais favorável ao consumidor. O Direito está do seu lado."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solução Jurídica */}
      <section className="bg-brand-blue-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-up">
              <SectionTag>Como Atuamos</SectionTag>
              <h2 className="text-3xl md:text-4xl text-brand-navy mb-8">
                Tiramos a vantagem das mãos da seguradora.
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <Gavel className="w-10 h-10 text-brand-blue shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-brand-navy mb-2">Ação de Cobrança</h4>
                    <p className="text-brand-navy-muted">Exigimos judicialmente o pagamento integral da indenização securitária prevista em contrato.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <FileSearch className="w-10 h-10 text-brand-blue shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-brand-navy mb-2">Danos Morais</h4>
                    <p className="text-brand-navy-muted">Em casos de negativa abusiva que gere sofrimento, buscamos a reparação financeira adicional.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] overflow-hidden reveal-up">
              <img 
                src="/contract_signing_close_up_1776896414066.png" 
                alt="Documentação Jurídica" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto text-center reveal-up">
          <h2 className="text-3xl md:text-4xl text-brand-navy mb-8">Não aceite um "não" como resposta final.</h2>
          <p className="text-xl text-brand-navy-muted mb-12">
            Muitas vezes, uma notificação extrajudicial ou o início de um processo é o suficiente para a seguradora cumprir seu dever.
          </p>
          <Button href={whatsappLink} isExternal variant="primary" className="!px-12">
            Falar com especialista
          </Button>
        </div>
      </section>
    </div>
  );
};

export default DireitoSecuritario;
