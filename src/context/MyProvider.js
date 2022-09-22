import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(null);

  const fetchApi = async () => {
    setLoading(true);
    const response = await fetch('https://swapi.dev/api/planets');
    const data = await response.json();
    console.log(data);
    const onlyPlanets = data.results.filter((planet) => delete planet.residents);
    console.log(onlyPlanets);
    setPlanets(onlyPlanets);
    setLoading(false);
  };

  return (
    <MyContext.Provider value={ { planets, loading, fetchApi } }>
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
