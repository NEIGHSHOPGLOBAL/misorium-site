import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import AppRoutes from './routes/AppRoutes.jsx';
import ChatWidget from './components/chatbot/ChatWidget.jsx';

export default function App() {
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
