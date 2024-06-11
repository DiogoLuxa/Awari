// react
import React from 'react';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Assistentes Virtuais</h1>
      <div className="space-x-4">
        <Link to="/detalhes/siri" className="text-blue-500 hover:underline">
          Siri
        </Link>
        <Link to="/detalhes/alexa" className="text-blue-500 hover:underline">
          Alexa
        </Link>
        <Link to="/detalhes/google" className="text-blue-500 hover:underline">
          Google Assistente
        </Link>
      </div>
    </div>
  );
}

export default Home;
