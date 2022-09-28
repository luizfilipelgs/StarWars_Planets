import React, { useContext } from 'react';
import '../style/Filters.css';
import MyContext from '../context/MyContext';

function Filters() {
  const {
    planetName,
    setPlanetName,
    setFilters,
    filters,
    setFiltersSelected,
    filtersSelected,
  } = useContext(MyContext);

  const selectColumn = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  return (
    <form id="form-filters">
      <input
        type="text"
        name="name"
        placeholder="Filtre por nome"
        value={ planetName }
        id="name-filter"
        data-testid="name-filter"
        onChange={ ({ target }) => setPlanetName(() => target.value) }
      />
      <label htmlFor="column-filter">
        Column:
        <select
          name="column-filter"
          id="column-filter"
          data-testid="column-filter"
          onChange={ ({ target }) => {
            setFilters((prevState) => ({ ...prevState, column: target.value }));
          } }
        >
          {
            selectColumn.filter((item) => (
              !filtersSelected.find((filter) => item === filter.column)
            )).map((item) => (
              <option key={ item } value={ item }>
                { item }
              </option>
            ))
          }
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Operador:
        <select
          name="comparison-filter"
          id="comparison-filter"
          data-testid="comparison-filter"
          onChange={ ({ target }) => {
            setFilters((prevState) => ({ ...prevState, comparison: target.value }));
          } }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          type="number"
          name="value-filter"
          value={ filters.value }
          data-testid="value-filter"
          onChange={ ({ target }) => {
            setFilters((prevState) => ({ ...prevState, value: target.value }));
          } }
        />
      </label>
      <button
        type="button"
        name="button-filter"
        data-testid="button-filter"
        onClick={ () => setFiltersSelected((prevState) => [...prevState, filters]) }
      >
        Adiciona filtros
      </button>
      {
        filtersSelected.map((filter, index) => (
          <div key={ index } data-testid="filter">
            <p>{ filter.column }</p>
            <p>{ filter.comparison }</p>
            <p>{ filter.value }</p>
            <button
              type="button"
              onClick={ () => {
                const removedFilter = [...filtersSelected];
                removedFilter.splice(index, 1);
                setFiltersSelected(removedFilter);
              } } // Aula Braddock
            >
              Delete
            </button>
          </div>
        ))
      }
      <button
        type="button"
        name="button-remove-filters"
        data-testid="button-remove-filters"
        onClick={ () => (setFiltersSelected(() => [])) }
      >
        Remover Filtros
      </button>
    </form>
  );
}

export default Filters;
