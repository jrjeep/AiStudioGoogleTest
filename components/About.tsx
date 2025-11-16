import React from 'react';

const categories = [
  {
    title: "4x4 Master",
    description: "Categoria de alto grau de competitividade, própria para pilotos e navegadores com experiência em provas off-road de regularidade, veículos devidamente preparados, de qualquer marca, modelo e ano de fabricação, com sistema de tração 4x4. Proibido a inclusão de acompanhante (zéquinha) no carro durante a prova."
  },
  {
    title: "4x4 Junior",
    description: "O trajeto será o mesmo da categoria 4x4 Master, com as médias de velocidades inferiores ou iguais para cada trecho da prova, que é equivalente com o nível técnico das equipes participantes. Própria para pilotos e navegadores que saibam navegar em provas off-road de regularidade, com veículos devidamente preparados, de qualquer marca, modelo e ano de fabricação com sistema de tração 4x4."
  },
  {
    title: "ORIGENS",
    description: "Categoria exclusiva para veículos off road antigos com tração nas 4 rodas com fabricação anterior ao ano de 1990, Seu percurso será em partes o mesmo da 4x4 Master, com médias de velocidades inferiores. Proibido a utilização de equipamentos integrados de navegação."
  },
  {
    title: "TURISMO",
    description: "A categoria Turismo terá trilha e planilha exclusivas, o trajeto será para carros 4x2, as médias de velocidade serão mais baixas. Voltada para competidores com pouca ou sem experiência em provas off-road de regularidade. Veículos de qualquer marca, modelo e ano de fabricação,Proibido a utilização de equipamentos integrados de navegação."
  }
];

const About: React.FC = () => {
  return (
    <section id="categorias">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 uppercase text-amber-500">Categorias</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-amber-500 transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-amber-400 mb-3">{category.title}</h3>
            <p className="text-gray-300 leading-relaxed">{category.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
