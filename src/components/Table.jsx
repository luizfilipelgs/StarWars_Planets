import React, { useContext, useEffect } from 'react';
import MyContex from '../context/MyContext';

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

  const { planets, loading, fetchApi } = useContext(MyContex);

  useEffect(() => {
    const fetch = () => fetchApi();
    fetch();
  }, []);

  return (
    <main>
      {loading && <h2>Carregando ...</h2>}
      <table>
        <thead>
          <tr>
            {theader.map((head) => <th key={ head }>{ head }</th>)}
          </tr>
        </thead>
        <tbody>
          { planets && planets.map((planet) => (
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
              <td>
                {planet.films.map((film, index) => (
                  <p key={ index }>{film}</p>
                ))}
              </td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Table;
