import React, { createContext, useState, useEffect } from "react";

// prop-types
import PropTypes from "prop-types";

// utils
import { fetchPokemonList, fetchPokemonDetails } from "../utils/api";

// context
const PokedexContext = createContext();

// local storage
const likedStorage = JSON.parse(localStorage.getItem("liked")) || [];

const PokedexProvider = ({ children }) => {
  // states
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [liked, setLiked] = useState(likedStorage);
  const [count, setCount] = useState(0);
  const [clickedPokemon, setClickedPokemon] = useState(null);
  const [showHeart, setShowHeart] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  // functions
  function handleDoubleClick(pokemon) {
    setClickedPokemon(pokemon);

    if (count === 1) {
      setCount(count + 1);
    } else {
      setCount(1);
      const id = setTimeout(() => {
        setCount(0);
      }, 300);
      setTimeoutId(id);
    }
  }

  function handleLike(pokemon) {
    setLiked((prevLiked) => {
      if (prevLiked.includes(pokemon)) {
        return prevLiked.filter((likedPokemon) => likedPokemon !== pokemon);
      }
      return [...prevLiked, pokemon];
    });
  }

  // effects
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemonList();
        const promises = data.map((pokemon) =>
          fetchPokemonDetails(pokemon.url)
        );
        const pokemonsData = await Promise.all(promises);
        setPokemons(pokemonsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (count === 2) {
      setCount(0);
      clearTimeout(timeoutId);
      setShowHeart(clickedPokemon);
      setTimeout(() => {
        setShowHeart(null);
      }, 1000);
      setLiked((prevLiked) => {
        if (prevLiked.includes(clickedPokemon)) {
          return prevLiked.filter(
            (likedPokemon) => likedPokemon !== clickedPokemon
          );
        }
        return [...prevLiked, clickedPokemon];
      });
    }
  }, [count, clickedPokemon, timeoutId]);

  useEffect(() => {
    localStorage.setItem("liked", JSON.stringify(liked));
  }, [liked]);

  return (
    <PokedexContext.Provider
      value={{
        pokemons,
        loading,
        error,
        handleDoubleClick,
        liked,
        handleLike,
        showHeart,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
};

PokedexProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PokedexContext, PokedexProvider };
