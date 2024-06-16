import React, { useContext } from 'react';

// context

import { PokedexContext } from '../context/PokedexContext';

// components: shadcn

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// components

import HeartIcon from './HeartIcon';

import HeartIconAnimation from './HeartIconAnimation';

// styles

import './CardList.css';

// CardList

function CardList() {
  // context

  const { pokemons, handleDoubleClick, liked, showHeart } =
    useContext(PokedexContext);

  // render

  return (
    <div className="grid grid-cols-autofit gap-3 justify-center">
      {pokemons.map((pokemon) => {
        const { id, name, sprites, height, weight, types } = pokemon;

        return (
          <Card key={id} className="relative">
            <CardHeader>
              <CardTitle className="capitalize">{name}</CardTitle>

              <CardDescription>Pokemon</CardDescription>

              <HeartIcon id={id} liked={liked.includes(id) ? true : false} />
            </CardHeader>

            <HeartIconAnimation
              liked={liked.includes(id) ? true : false}
              showHeart={showHeart === id}
              id={id}
            />

            {/* {showHeart === id && <div className="heart-animation">❤️</div>} */}

            <CardContent>
              <img
                onClick={() => handleDoubleClick(id)}
                src={sprites.other['official-artwork'].front_default}
                alt={name}
              />
            </CardContent>

            <CardFooter className="flex gap-x-2 bg-gray-200 py-2 px-4">
              <p className="text-sm">
                <span className="font-bold">Types:</span>{' '}
                {types.map((type) => type.type.name).join(', ')}
              </p>

              <p className="text-sm">
                <span className="font-bold">Height:</span> {height / 10}m
              </p>

              <p className="text-sm">
                <span className="font-bold">Weight:</span> {weight / 10}kg
              </p>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}

export default CardList;
