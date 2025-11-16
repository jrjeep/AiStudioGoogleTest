import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="h-[60vh] bg-cover bg-center relative flex items-center justify-center" 
      style={{ backgroundImage: "url('https://picsum.photos/seed/rallycar/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-brightness-75"></div>
      <div className="relative z-10 text-center text-white p-4">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-widest">
          13<sup className="text-2xl md:text-4xl">º</sup> Rally da Selva
        </h2>
        <p className="mt-4 text-lg md:text-2xl font-light text-amber-400">
          Prova: 8 de Maio de 2021
        </p>
      </div>
    </section>
  );
};

export default Hero;
