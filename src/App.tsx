import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DireitoBancario from './pages/DireitoBancario';
import DireitoSecuritario from './pages/DireitoSecuritario';
import DireitoTrabalhista from './pages/DireitoTrabalhista';
import DireitoPrevidenciario from './pages/DireitoPrevidenciario';
import RegularizacaoImovel from './pages/RegularizacaoImovel';
import Navbar from './components/Navbar';
import WhatsAppFloat from './components/WhatsAppFloat';
import Footer from './sections/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/direito-bancario" element={<DireitoBancario />} />
          <Route path="/direito-securitario" element={<DireitoSecuritario />} />
          <Route path="/direito-trabalhista" element={<DireitoTrabalhista />} />
          <Route path="/direito-previdenciario" element={<DireitoPrevidenciario />} />
          <Route path="/regularizacao-de-imovel" element={<RegularizacaoImovel />} />
        </Routes>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;
