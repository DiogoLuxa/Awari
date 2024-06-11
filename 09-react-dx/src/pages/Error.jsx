// react
import React from 'react';

// router
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Error</h1>
      <p className="text-lg">Página não encontrada</p>
      <Link to="/" className="mt-6 text-blue-500 hover:underline">
        Voltar
      </Link>
    </div>
  );
}

export default Error;
