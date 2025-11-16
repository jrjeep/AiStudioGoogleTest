import React from 'react';

interface ResultEntry {
  col: string;
  piloto: string;
  navegador: string;
  pp: string;
}

const resultsData: { category: string; data: ResultEntry[] }[] = [
  {
    category: "4x4 MASTER",
    data: [
      { col: "1º", piloto: "AGENOR V. PELISSA JR", navegador: "ERICA JEZUR", pp: "1007" },
      { col: "2º", piloto: "JAILSON PINHEIRO", navegador: "GIOVANI FEDERIZZI", pp: "1422" },
      { col: "3º", piloto: "CRISTIANO ROCHA", navegador: "ROBERTO SPESSATTO", pp: "n.c." },
    ]
  },
  {
    category: "4x4 JUNIOR",
    data: [
      { col: "1º", piloto: "ROGERIO PETRY", navegador: "RAFAEL PETRY", pp: "5098" },
      { col: "2º", piloto: "PAULO BEGER", navegador: "PATRICK BEGER", pp: "7873" },
      { col: "3º", piloto: "PAULO R. C. CONCLI", navegador: "CLEIDE CONCLI", pp: "13624" },
    ]
  },
  {
    category: "TURISMO",
    data: [
      { col: "1º", piloto: "WALDOMIRO TEODORO", navegador: "THIAGO TEODORO", pp: "83" },
      { col: "2º", piloto: "MATEUS DEMARCHI", navegador: "JAIME DEMARCHI", pp: "173" },
      { col: "3º", piloto: "BRUNO FORTUNA", navegador: "LEONARDO SEGATTI", pp: "180" },
    ]
  },
  {
    category: "ORIGENS",
    data: [
      { col: "1º", piloto: "RAFAEL LODI", navegador: "DANIEL BARBARA FILHO", pp: "21770" },
      { col: "2º", piloto: "JOAO PEDRO SEGER", navegador: "FLAVIO BONATO", pp: "54800" },
      { col: "3º", piloto: "CAIO M. B. MEDINA", navegador: "VICTOR MEDINA", pp: "98152" },
    ]
  }
];

const ResultsTable: React.FC<{ category: string; data: ResultEntry[] }> = ({ category, data }) => (
  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
    <h3 className="text-2xl font-bold text-amber-400 mb-4">{category}</h3>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead className="text-gray-400 uppercase tracking-wider text-sm border-b border-gray-600">
          <tr>
            <th className="py-3 px-4">Col.</th>
            <th className="py-3 px-4">Piloto</th>
            <th className="py-3 px-4">Navegador</th>
            <th className="py-3 px-4 text-right">P. P.</th>
          </tr>
        </thead>
        <tbody className="text-gray-200">
          {data.map((row, index) => (
            <tr key={index} className="border-b border-gray-700 last:border-b-0">
              <td className="py-3 px-4 font-semibold">{row.col}</td>
              <td className="py-3 px-4">{row.piloto}</td>
              <td className="py-3 px-4">{row.navegador}</td>
              <td className="py-3 px-4 text-right font-mono">{row.pp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const Results: React.FC = () => {
  return (
    <section id="resultados">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold uppercase text-amber-500">Resultados da 13ª Edição</h2>
        <p className="mt-2 text-gray-400 max-w-3xl mx-auto">
          A 13ª edição do Rally da Selva foi realizada dia 8 de maio de 2021, com um trajeto de aproximadamente 200 km entre os municípios de Sinop e Cláudia MT e 5:30 h de prova.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {resultsData.map((result) => (
          <ResultsTable key={result.category} category={result.category} data={result.data} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-gray-300 mb-4">
          PARA OS RESULTADOS COMPLETOS E INDIVIDUAIS CLIQUE NO BOTÃO DOWNLOAD.
        </p>
        <button className="bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-lg uppercase tracking-wider hover:bg-amber-400 transition-colors duration-300 transform hover:scale-105">
          Download
        </button>
      </div>
    </section>
  );
};

export default Results;
