import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testando o componente App.', () => {
  it('Teste se o topo da aplicação contém um conjunto fixo de links', () => {
    renderWithRouter(<App />);

    const filmLink = screen.getByRole('link', {
      name: 'FILMES',
    });
    expect(filmLink).toBeInTheDocument();

    const peopleLink = screen.getByRole('link', {
      name: 'ATORES',
    });
    expect(peopleLink).toBeInTheDocument();

    const locationLink = screen.getByRole('link', {
      name: 'LOCAÇÃO',
    });
    expect(locationLink).toBeInTheDocument();
  });

  it('Testa se a aplicação é redirecionada ao clicar no link FILMES.', () => {
    const { history } = renderWithRouter(<App />);

    const filmLink = screen.getByRole('link', { name: 'FILME' });
    expect(filmLink).toBeInTheDocument();
    userEvent.click(filmLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
});
