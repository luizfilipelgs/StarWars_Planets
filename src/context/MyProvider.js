import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import comparator from '../utils/comparator';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(null);
  const [filters, setFilters] = useState({
    filterByName: {
      value: '',
    },
  });

  const filteredPlanets = planets.filter((planet) => {
    return Object.entries(filters).every(([colum, filter]) => {
      return comparator(planet[colum], filter.value, filter.operator);
    });
  });

  const fetchApi = async () => {
    setLoading(true);
    const response = await fetch('https://swapi.dev/api/planets');
    const data = await response.json();
    /* console.log(data); */
    const onlyPlanets = data.results.filter((planet) => delete planet.residents);
    console.log(onlyPlanets);
    console.log('fetch'); // porque esta fazendo o fetch mais de uma vez ?
    setPlanets(onlyPlanets);
    setLoading(false);
  };

  return (
    <MyContext.Provider value={ { planets: filteredPlanets, loading, fetchApi } }>
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
