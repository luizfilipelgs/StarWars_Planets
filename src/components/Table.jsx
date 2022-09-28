import React, { useContext, useEffect } from 'react';
import MyContex from '../context/MyContext';
import '../style/Table.css';

function Table() {
  const theader = ['Name ',
    'Rotation Period ',
    'Orbital Pediod ',
    'Diameter ',
    'Climate ',
    'Gravity ',
    'Terrain ',
    'Surface Water ',
    'Population ',
    'Films ',
    'Created',
    'Edited',
    'URL',
  ];

  const { loading,
    fetchApi,
    planets,
    planetName } = useContext(MyContex);

  useEffect(() => {
    fetchApi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const xomps = () => (planets.filter((pla) => (pla.name.toLowerCase()
    .includes(planetName.toLowerCase()))));

  if (loading) return <h2>Carregando ...</h2>;
  return (
    <div id="container-table">
      <table>
        <thead>
          <tr>
            {theader.map((head) => <th key={ head }>{ head }</th>)}
          </tr>
        </thead>
        <tbody>
          {xomps()
            .map((planet) => (
              <tr key={ planet.name }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films.map((film) => (<p key={ film }>{film}</p>))}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
