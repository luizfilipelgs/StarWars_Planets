const URL = 'https://swapi.dev/api/planets';

const fetchApi = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  const onlyPlants = data.results.filter((planet) => delete planet.residents);

  return onlyPlants;
};

export default fetchApi;
