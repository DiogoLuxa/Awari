// hooks
import { React, createContext, useState, useEffect } from 'react';

// propTypes
import PropTypes from 'prop-types';

// context
const PokedexContext = createContext();

// utils
import { fetchPokemonList, fetchPokemonDetails } from '../utils/api';

// provider
const PokedexProvider = ({ children }) => {
  // states
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  console.log(error);

  // fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemonList();
        const promises = data.map((pokemon) =>
          fetchPokemonDetails(pokemon.url),
        );
        const pokemonsData = await Promise.all(promises);
        setPokemons(pokemonsData);
      } catch (err) {
        setError(err.message);
      } finally {
        // setTimeout(() => setLoading(false), 5000);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <PokedexContext.Provider value={{ pokemons, loading, error }}>
      {children}
    </PokedexContext.Provider>
  );
};

PokedexProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PokedexContext, PokedexProvider };
