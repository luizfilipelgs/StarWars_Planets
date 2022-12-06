import React from 'react';
import {  render, screen, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import MyProvider from '../context/MyProvider'
import result from '../../cypress/mocks/testData';
import { act } from 'react-dom/test-utils';
import {within} from '@testing-library/dom'


describe('Testa App', () => {

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  }) 

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
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(result),
    });
    render(<MyProvider><App /></MyProvider>)

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

  test('Verifica o filtro menor que,', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(result),
    });

    act( () => {
      render(<App />);
    });

    // expect(await screen.findAllByRole('row')).toHaveLength(11); 
    
    const columnFilter = screen.getByTestId('column-filter')
    const comparisonFilter = screen.getByTestId('comparison-filter')
    const valueFilter = screen.getByTestId('value-filter');
    const btnFilter = screen.getByTestId('button-filter');
    const btnremoveFilter = screen.getByTestId('button-remove-filters')
    
  
    // 1º filtro
    userEvent.selectOptions(columnFilter,'rotation_period');
    userEvent.selectOptions(comparisonFilter,'menor que');
    userEvent.type(valueFilter, '25');
    userEvent.click(btnFilter);
         
      
    const view = await screen.getByTestId('filter');
    within(view).findAllByRole(/menor que/i);
    userEvent.click(btnremoveFilter);
    //expect(await screen.findAllByRole('row')).toHaveLength(9);
  });

  test('Verifica o filtro menor que,', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(result),
    });

    act( () => {
      render(<App />);
    });

    // expect(await screen.findAllByRole('row')).toHaveLength(11); 
    
    const columnFilter = screen.getByTestId('column-filter')
    const comparisonFilter = screen.getByTestId('comparison-filter')
    const valueFilter = screen.getByTestId('value-filter');
    const btnFilter = screen.getByTestId('button-filter');
    const btnremoveFilter = screen.getByTestId('button-remove-filters')

    // 2º filtro
    userEvent.selectOptions(columnFilter,'diameter');
    userEvent.selectOptions(comparisonFilter,'maior que');
    userEvent.type(valueFilter, '12000');
    userEvent.click(btnFilter);
    
    //expect(await screen.findAllByRole('row')).toHaveLength(9);
    const view = await screen.getByTestId('filter');
    within(view).findAllByRole(/maior que/i);
    userEvent.click(btnremoveFilter);
  });

  test('Verifica o filtro igual a,', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(result),
    });

    act( () => {
      render(<App />);
    });

    // expect(await screen.findAllByRole('row')).toHaveLength(11); 
    
    const columnFilter = screen.getByTestId('column-filter')
    const comparisonFilter = screen.getByTestId('comparison-filter')
    const valueFilter = screen.getByTestId('value-filter');
    const btnFilter = screen.getByTestId('button-filter');
    const btnremoveFilter = screen.getByTestId('button-remove-filters')

    // 3º filtro
    userEvent.selectOptions(columnFilter,'surface_water');
    userEvent.selectOptions(comparisonFilter,'igual a');
    userEvent.type(valueFilter, 1);
    userEvent.click(btnFilter);
  
    //expect(await screen.findAllByRole('row')).toHaveLength(2); 
    const view = await screen.getByTestId('filter');
    within(view).findAllByRole(/igual a/i);
    userEvent.click(btnremoveFilter);
      
  });

  test('Verifica se é possivel remover varios filtros separadamente,', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(result),
    });
    render(<App />);

    act(async () => {
      const columnFilter = screen.getByTestId('column-filter')
      const comparisonFilter = screen.getByTestId('comparison-filter')
      const valueFilter = screen.getByTestId('value-filter');
      const btnFilter = screen.getByTestId('button-filter');
      const btnremoveFilter = screen.getByTestId('button-remove-filters')

      // 1º filtro
      userEvent.selectOptions(columnFilter,'rotation_period');
      userEvent.selectOptions(comparisonFilter,'menor que');
      userEvent.type(valueFilter, '25');
      userEvent.click(btnFilter);
      
      userEvent.click(btnremoveFilter);

    });
  });
});
