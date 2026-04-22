import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../sections/Hero';
import Sobre from '../sections/Sobre';
import Areas from '../sections/Areas';
import ComoFunciona from '../sections/ComoFunciona';
import Autoridade from '../sections/Autoridade';
import CTAFinal from '../sections/CTAFinal';

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>WA Assessoria Jurídica | Resolva problemas com Bancos e Seguros</title>
        <meta name="description" content="Defesa especializada em Direito Bancário e Securitário. Recupere seu equilíbrio financeiro e seus direitos." />
      </Helmet>

      <main>
        <Hero />
        <Sobre />
        <Areas />
        <ComoFunciona />
        <Autoridade />
        <CTAFinal />
      </main>
    </>
  );
};

export default Home;
