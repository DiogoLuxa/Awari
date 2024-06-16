import { React, useContext } from 'react';

// context
import { PokedexContext } from './context/PokedexContext';

// components
import CardList from './components/CardList';

// img
import logo from './assets/icons8-pokeball.png';
import psyduck from './assets/psyduck.jpg';

// App
function App() {
  // context
  const { loading, error } = useContext(PokedexContext);

  const forceError = false;

  // render
  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <img src={logo} alt="pokeball" className="w-16 mb-4 animate-spin" />
        <h1 className="text-center text-2xl font-bold">Loading...</h1>
      </div>
    );

  if (error || forceError)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <img src={psyduck} alt="psyduck" className="w-40 mb-4" />
        <h1 className="text-center text-2xl font-bold text-gray-700 tracking-widest">
          Error...
        </h1>
      </div>
    );

  return (
    <div className="container mx-auto p-8">
      <header className="flex items-center justify-center gap-x-2 mb-4">
        <img src={logo} alt="pokeball" className="w-9 inline-block	" />
        <h1 className="text-2xl font-bold">Pokédex</h1>
      </header>
      <CardList />
    </div>
  );
}

export default App;
