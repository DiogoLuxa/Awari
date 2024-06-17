// HeartIcon.test.js
import React from 'react';
import { render as rtlRender, fireEvent } from '@testing-library/react';
import HeartIcon from './HeartIcon';
import { PokedexContext } from '../context/PokedexContext';

// Função render customizada que envolve o componente com o contexto
const render = (ui, { providerProps, ...renderOptions }) => {
  const Wrapper = ({ children }) => (
    <PokedexContext.Provider {...providerProps}>
      {children}
    </PokedexContext.Provider>
  );
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

describe('HeartIcon', () => {
  it('should render the component', () => {
    const { getByTestId } = render(<HeartIcon id={1} liked={false} />, {
      providerProps: {
        value: { handleLike: jest.fn() }, // Mock da função handleLike
      },
    });
    const heartIcon = getByTestId('heart-icon');
    expect(heartIcon).toBeInTheDocument();
  });

  it('should call handleLike when clicked', () => {
    const handleLikeMock = jest.fn();
    const { getByTestId } = render(<HeartIcon id={1} liked={false} />, {
      providerProps: {
        value: { handleLike: handleLikeMock }, // Função handleLike mockada
      },
    });
    const heartIcon = getByTestId('heart-icon');

    // Simula o clique no ícone
    fireEvent.click(heartIcon);

    // Verifica se a função handleLike foi chamada com o ID correto
    expect(handleLikeMock).toHaveBeenCalledWith(1);
  });
});

// O teste verifica se o ícone do coração é renderizado e se a função handleLike é chamada quando o ícone é clicado. Para isso, é necessário mockar a função handleLike do contexto PokedexContext. Para isso, a função render é customizada para envolver o componente HeartIcon com o contexto PokedexContext. Dessa forma, é possível passar o mock da função handleLike para o contexto. O teste verifica se a função handleLike é chamada com o ID correto quando o ícone é clicado.
