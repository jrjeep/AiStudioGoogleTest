import React from 'react';

const Registration: React.FC = () => {
  return (
    <section id="inscricao">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 uppercase text-amber-500">Inscrição</h2>
      <div className="max-w-4xl mx-auto bg-gray-800 p-6 md:p-8 rounded-lg border border-gray-700">
        <div className="space-y-6 text-gray-300">
          <div>
            <h3 className="text-xl font-bold text-amber-400">COMO FAZER A INSCRIÇÃO</h3>
            <ol className="list-decimal list-inside mt-2 space-y-2 pl-2">
              <li>Acesse o link inscrição no site <a href="http://www.rallydaselva.com.br" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">www.rallydaselva.com.br</a></li>
              <li>Clique no botao "fazer inscrição" (abaixo);</li>
              <li>Faça o cadastro e finalize a inscrição;</li>
            </ol>
          </div>
          <div>
            <h3 className="text-xl font-bold text-amber-400">PARA CONFIRMAR A INSCRIÇÃO</h3>
            <p className="mt-2">
              Realize o depósito ou transferencia no valor da sua categoria com os centavos descritos, pois os centavos são a identificação da sua inscrição.
            </p>
            <p className="mt-2">
              Se possivel envie o comprovante pelo whatsapp (66) 9.9257-9702, junto com o comprovante envie uma foto da equipe com o veículo inscrito.
            </p>
            <p className="mt-2">
              Assim que sua incrição for confirmada, sua equipe será adicionada ao grupo oficial do Rally da Selva no Whatsapp.
            </p>
          </div>
          <div className="text-center pt-4">
            <p className="font-bold text-lg text-white">Vagas limitadas: 100 carros.</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a
            href="https://www.cronorally.com.br/eventos/13o-rally-da-selva-2021/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-lg uppercase tracking-wider hover:bg-amber-400 transition-colors duration-300 transform hover:scale-105"
          >
            Veja os Inscritos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Registration;
