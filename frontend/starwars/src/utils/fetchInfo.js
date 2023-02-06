const getInfo = async (type) => {
  const response = await fetch(`https://swapi.dev/api/${type}`);
  const json = await response.json();
  const results = json.results;
  return results;
};

export default getInfo;
