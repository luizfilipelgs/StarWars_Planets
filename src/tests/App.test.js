import React from 'react';
import {  render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import MyProvider from '../context/MyProvider'
import result from '../../cypress/mocks/testData';

describe('Testa App', () => {
  test('Verifica se a logo de starwars esta na tela,', () => {
    render(<App />);
    expect(screen.getByRole('img', {  name: /logo star wars/i})).toBeInTheDocument();
  });

  test('Testa se existe uma tela de loading', () => {
    render(<App />)
    const loading = screen.getByText('Carregando ...');
    expect(loading).toBeInTheDocument();
    waitFor(() => {
      expect(loading).not.toBeInTheDocument();
    });
  })

  test('Verifica os componentes de filtro,', () => {
    render(<App />);
    expect(screen.getByTestId('form-filters')).toBeInTheDocument();
    expect(screen.getByTestId('name-filter')).toBeInTheDocument();
    expect(screen.getByTestId('column-filter')).toBeInTheDocument();
    expect(screen.getByTestId('comparison-filter')).toBeInTheDocument();
    expect(screen.getByTestId('value-filter')).toBeInTheDocument();
    expect(screen.getByTestId('button-filter')).toBeInTheDocument();
    expect(screen.getByTestId('button-remove-filters')).toBeInTheDocument();
  });

  it('Testa se renderiza a API na tela', async() => {
    render(<MyProvider><App /></MyProvider>)
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(result),
    });

    await waitFor(() => {
      expect(fetch).toHaveBeenCalled()
    });

    const planetTatooine = await screen.findByText('Tatooine');
    expect(planetTatooine).toBeInTheDocument();

  });

  test('Verifica se a tabela é criada', async () => {
    render(<App />);
    const table = await screen.findByRole('table');
    expect(table).toBeInTheDocument();
  });

  test('Verifica se é possível filtrar por nome', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(result),
    });
    render(<App />);
    const nameFilter = screen.getByTestId('name-filter');
    userEvent.type(nameFilter, 'ta');
    const planet = await screen.findByText(/tatooine/i);
    expect(planet).toBeInTheDocument();
  });

  test('Verifica se é possivel adicionar e remover varios filtros filtros,', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(result),
    });
    render(<App />);
  
    const nameFilter = screen.getByTestId('name-filter');
    const columnFilter = screen.getByTestId('column-filter')
    const comparisonFilter = screen.getByTestId('comparison-filter')
    const valueFilter = screen.getByTestId('value-filter');
    const btnFilter = screen.getByTestId('button-filter');
    const btnremoveAll = screen.getByTestId('button-remove-filters')

    userEvent.type(nameFilter, 't');
    userEvent.selectOptions(columnFilter,'surface_water');
    userEvent.selectOptions(comparisonFilter,'igual a');
    userEvent.type(valueFilter, '1');
    userEvent.click(btnFilter);

    expect(screen.getByTestId('filter')).toBeInTheDocument();
    expect(screen.getByText(/surface_water/i)).toBeInTheDocument();

    userEvent.selectOptions(columnFilter,'rotation_period');
    userEvent.selectOptions(comparisonFilter,'menor que');
    userEvent.type(valueFilter, '365');
    userEvent.click(btnFilter);

    expect(screen.getAllByTestId('filter')[1]).toBeInTheDocument();
    expect(screen.getByText(/rotation_period/i)).toBeInTheDocument();

    userEvent.selectOptions(columnFilter,'diameter');
    userEvent.selectOptions(comparisonFilter,'maior que');
    userEvent.type(valueFilter, '10000');
    userEvent.click(btnFilter);
    
    await waitFor(() => {
      expect(screen.getByRole('cell', {  name: /tatooine/i})).toBeInTheDocument();
    });

    userEvent.click(btnremoveAll);

    await waitFor(() => {
      expect(screen.getByRole('cell', {  name: /hoth/i})).toBeInTheDocument();
    });
    
  });
});
