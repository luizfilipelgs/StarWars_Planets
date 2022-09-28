import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(null);
  const [planetName, setPlanetName] = useState('');
  const [filtersSelected, setFiltersSelected] = useState([]);
  const [filters, setFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const fetchApi = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://swapi.dev/api/planets');
      const data = await response.json();
      /* console.log(data); */
      const onlyPlanets = data.results.filter((planet) => delete planet.residents);
      console.log(onlyPlanets);
      console.log('fetch'); // porque esta fazendo o fetch mais de uma vez ?
      setPlanets(onlyPlanets);
      setLoading(false);
    } catch (error) {
      console.log('erro');
    }
  };

  const context = {
    planetName,
    setPlanetName,
    planets,
    loading,
    fetchApi,
    setFilters,
    filters,
    setFiltersSelected,
    filtersSelected,
  };

  return (
    <MyContext.Provider value={ context }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
