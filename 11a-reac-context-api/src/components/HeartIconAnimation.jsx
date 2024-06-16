import React, { useContext } from 'react';

import PropTypes from 'prop-types';

// context

import { PokedexContext } from '../context/PokedexContext';

function HeartIconAnimation({ liked, showHeart, id }) {
  // context

  const { handleLike } = useContext(PokedexContext);

  return (
    <svg
      onClick={(e) => {
        e.stopPropagation();

        handleLike(id);
      }}
      className={`w-20 absolute inset-1/2 fill-current ${
        liked ? 'text-red-500' : 'text-gray-300'
      } ${showHeart ? 'heart-animation' : 'hidden'}`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" />
    </svg>
  );
}

HeartIconAnimation.propTypes = {
  liked: PropTypes.bool.isRequired,

  showHeart: PropTypes.bool.isRequired,

  id: PropTypes.number.isRequired,
};

export default HeartIconAnimation;
