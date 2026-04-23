import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Button from '../components/Button';
import SectionTag from '../components/SectionTag';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { AlertCircle, CheckCircle2, Clock } from 'lucide-react';

const DireitoTrabalhista: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "5511999999999";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá%2C+vim+pelo+site+e+gostaria+de+uma+análise+do+meu+caso+de+Direito+Trabalhista.`;

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
        <title>Direito Trabalhista | WA Advogados</title>
        <meta name="description" content="Foi demitido de forma irregular ou não recebeu o que é seu por direito? Especialistas em ações trabalhistas, verbas rescisórias e assédio moral." />
      </Helmet>

      {/* Hero Page */}
      <section className="pt-40 pb-20 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto text-center px-6">
          <SectionTag className="!bg-white/10 !text-white mb-8 reveal-up">Direito Trabalhista</SectionTag>
          <h1 className="text-4xl md:text-6xl font-semibold mb-8 leading-tight reveal-up">
            Foi demitido de forma irregular ou não recebeu o que é seu por direito?
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12 reveal-up">
            Verbas rescisórias, horas extras, adicionais e indenizações — nenhum direito trabalhista deve ser ignorado. Nossa equipe atua para que você receba tudo o que é seu.
          </p>
          <div className="reveal-up">
            <Button href={whatsappLink} isExternal variant="white">Falar com especialista</Button>
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-up">
              <SectionTag>O Problema</SectionTag>
              <h2 className="text-3xl md:text-4xl text-brand-navy mb-8">
                Irregularidades que custam caro ao trabalhador.
              </h2>
              <ul className="space-y-6">
                {[
                  "Demissões sem justa causa mal conduzidas",
                  "Verbas rescisórias atrasadas ou pagas a menor",
                  "Horas extras trabalhadas e nunca pagas",
                  "Assédio moral e condições irregulares de trabalho"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-brand-navy-muted text-lg">
                    <AlertCircle className="w-6 h-6 text-brand-blue shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-blue-light p-12 rounded-[2rem] reveal-up">
              <h3 className="text-2xl font-bold text-brand-navy mb-6">A Consequência da Inércia</h3>
              <p className="text-lg text-brand-navy-muted leading-relaxed mb-8">
                A perda financeira é imediata, mas o impacto vai além do dinheiro: saúde mental, instabilidade e incerteza sobre o futuro. E há ainda o risco da prescrição — você tem apenas 2 anos após a demissão para ajuizar uma ação trabalhista.
              </p>
              <div className="flex items-center gap-4 text-brand-navy font-bold">
                <Clock className="w-8 h-8 text-brand-blue" />
                <span>Prescrição trabalhista: 2 anos após a demissão.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solução */}
      <section className="bg-brand-blue-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <SectionTag>Nossa Solução</SectionTag>
            <h2 className="text-3xl md:text-5xl text-brand-navy mb-6">
              Atuação jurídica para recuperar o que é seu.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Ação Trabalhista", desc: "Reclamação na Justiça do Trabalho para cobrança de verbas rescisórias, horas extras, adicionais e reconhecimento de vínculo." },
              { title: "Adicionais e Horas Extras", desc: "Cálculo e cobrança de insalubridade, periculosidade, adicional noturno e horas extras não pagas durante o contrato." },
              { title: "Danos Morais", desc: "Indenização por assédio moral, discriminação ou condições degradantes de trabalho que causaram sofrimento comprovável." }
            ].map((sol, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-brand-blue-border reveal-up">
                <CheckCircle2 className="w-12 h-12 text-brand-blue mb-6" />
                <h4 className="text-xl font-bold text-brand-navy mb-4">{sol.title}</h4>
                <p className="text-brand-navy-muted leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Começar */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="reveal-up">
            <h2 className="text-3xl md:text-4xl text-brand-navy mb-12">Como começamos a resolver?</h2>
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
              {[
                "Análise do caso",
                "Levantamento de provas",
                "Ação estratégica"
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-xl">
                    {i + 1}
                  </div>
                  <span className="font-semibold text-brand-navy">{step}</span>
                </div>
              ))}
            </div>
            <Button href={whatsappLink} isExternal variant="primary" className="!px-12">
              Falar com especialista
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DireitoTrabalhista;
