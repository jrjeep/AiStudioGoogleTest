import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Results from './components/Results';
import Registration from './components/Registration';
import ChatButton from './components/ChatButton';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen font-sans antialiased relative">
      <Header />
      <main>
        <Hero />
        <div className="container mx-auto px-4 py-8 md:py-16 space-y-16 md:space-y-24">
          <About />
          <Results />
          <Registration />
        </div>
      </main>
      <Footer />
      <ChatButton />
    </div>
  );
};

export default App;
