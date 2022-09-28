import React, { useContext } from 'react';
import '../style/Filters.css';
import MyContext from '../context/MyContext';

function Filters() {
  const {
    planetName,
    setPlanetName,
    // filtersFunc,
  } = useContext(MyContext);

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
    </form>
  );
}

export default Filters;
