// Write an example of fetching data using fetch API.
fetch("https://catfact.ninja/fact")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch(err => console.error(err));
