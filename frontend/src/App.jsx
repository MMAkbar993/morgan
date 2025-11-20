import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import MobileCallButton from './components/common/MobileCallButton';
import Home from './pages/home';
import PracticeAreas from './pages/practice-areas';
import Locations from './pages/locations';
import AutoAccidentCalculator from './pages/auto-accident-calculator';
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
      
      // Add error handling for script loading
      script.onerror = () => {
        if (import.meta.env.DEV) {
          console.warn(`Failed to load script: ${src}`);
        }
      };
      
      Object.entries(attributes).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          script.setAttribute(key, value);
        }
      });
      document.body.appendChild(script);
      return script;
    };

    const isDev = import.meta.env.DEV;
    let tidioSrc = INTEGRATIONS.tidio.scriptSrc?.trim();

    // Normalize protocol-relative URLs to https
    if (tidioSrc && tidioSrc.startsWith('//')) {
      tidioSrc = `https:${tidioSrc}`;
    }

    // Only load Tidio if a valid script src is provided (not a placeholder)
    if (tidioSrc && 
        !tidioSrc.includes('your-tidio-id') && 
        (tidioSrc.startsWith('http://') || tidioSrc.startsWith('https://')) &&
        tidioSrc.endsWith('.js')) {
      const tidioScript = appendScript({
        id: 'tidio-chat-widget',
        src: tidioSrc,
      });
      if (tidioScript) {
        scripts.push(tidioScript);
      }
    } else if (isDev && tidioSrc) {
      console.info('Tidio chat script URL appears to be a placeholder. Set VITE_TIDIO_SCRIPT_SRC to your actual Tidio script URL.');
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

    // accessiBe accessibility widget (alternative to UserWay)
    const accessibeAccount = INTEGRATIONS.accessibe.accountId?.trim();
    if (accessibeAccount) {
      // Note: Only load one accessibility widget at a time
      // If UserWay is already loaded, skip accessiBe
      if (!userwayAccount) {
        const accessibeScript = appendScript({
          id: 'accessibe-widget',
          src: INTEGRATIONS.accessibe.scriptSrc,
          attributes: { 'data-api-key': accessibeAccount },
        });
        if (accessibeScript) {
          scripts.push(accessibeScript);
        }
      } else if (isDev) {
        console.info('accessiBe is configured but UserWay is active. Disable UserWay to use accessiBe instead.');
      }
    } else if (isDev && !userwayAccount) {
      console.info('Accessibility widget is not configured. Set VITE_USERWAY_ACCOUNT_ID or VITE_ACCESSIBE_ACCOUNT_ID to enable it.');
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
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/practice-areas" element={<PracticeAreas />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/auto-accident-calculator" element={<AutoAccidentCalculator />} />
          </Routes>
        </main>
        <Footer />
        <MobileCallButton />
      </div>
    </BrowserRouter>
  );
}