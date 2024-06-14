const fetchPokemonList = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    if (!response.ok) {
      throw new Error('Erro ao buscar o Pokémon');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Erro na requisição:', error);
    return [];
  }
};

const fetchPokemonDetails = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Erro ao buscar o Pokémon');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro na requisição:', error);
  }
};

export { fetchPokemonList, fetchPokemonDetails };
