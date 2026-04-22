# Landing Page WA Assessoria Jurídica

Landing page de alta conversão para escritório jurídico especializado em Direito Bancário e Securitário.

## Tecnologias

- **Vite + React + TypeScript**
- **Tailwind CSS** (Design system restrito em tons de azul e branco)
- **GSAP** (Animações de entrada e ScrollTrigger)
- **React Router** (Estrutura multipágina)
- **React Helmet Async** (SEO e Meta Tags)

## Instalação

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Configure o número do WhatsApp no arquivo `.env`:
   ```env
   VITE_WHATSAPP_NUMBER=5511999999999
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## Estrutura do Projeto

- `src/components`: Componentes reutilizáveis (Botões, Navbar, etc.)
- `src/sections`: Seções da página inicial.
- `src/pages`: Páginas do site (Home, Direito Bancário, Direito Securitário).
- `src/hooks`: Hooks customizados (useReducedMotion).
- `public`: Imagens e ativos estáticos.
