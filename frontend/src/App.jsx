import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import AppRoutes from './routes/AppRoutes.jsx';
import ChatWidget from './components/chatbot/ChatWidget.jsx';

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    const targets = document.querySelectorAll('main section, main > .container.section');

    if (!('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('reveal-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px' },
    );

    targets.forEach((target) => {
      target.classList.add('reveal-on-scroll');
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
