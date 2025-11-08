import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/home';
import PracticeAreas from './pages/practice-areas';
import Locations from './pages/locations';
import { INTEGRATIONS } from './config/integrations';

export default function App() {
  useEffect(() => {
    const scripts = [];

    const appendScript = ({ id, src, attributes = {} }) => {
      if (!src || document.getElementById(id)) {
        return null;
      }
      const script = document.createElement('script');
      script.id = id;
      script.src = src;
      script.async = true;
      Object.entries(attributes).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          script.setAttribute(key, value);
        }
      });
      document.body.appendChild(script);
      return script;
    };

    const isDev = import.meta.env.DEV;
    const tidioSrc = INTEGRATIONS.tidio.scriptSrc?.trim();

    if (tidioSrc) {
      const tidioScript = appendScript({
        id: 'tidio-chat-widget',
        src: tidioSrc,
      });
      if (tidioScript) {
        scripts.push(tidioScript);
      }
    } else if (isDev) {
      console.info('Tidio chat is not configured. Set VITE_TIDIO_SCRIPT_SRC to enable it.');
    }

    const userwayAccount = INTEGRATIONS.userway.accountId?.trim();
    if (userwayAccount) {
      const userwayScript = appendScript({
        id: 'userway-accessibility-widget',
        src: INTEGRATIONS.userway.scriptSrc,
        attributes: { 'data-account': userwayAccount },
      });
      if (userwayScript) {
        scripts.push(userwayScript);
      }
    } else if (isDev) {
      console.info('UserWay accessibility widget is not configured. Set VITE_USERWAY_ACCOUNT_ID to enable it.');
    }

    return () => {
      scripts.forEach((script) => {
        if (script && script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/practice-areas" element={<PracticeAreas />} />
            <Route path="/locations" element={<Locations />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}