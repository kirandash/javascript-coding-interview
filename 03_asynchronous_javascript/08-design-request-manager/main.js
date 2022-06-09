// Design a utility which takes URL and a value for attempts which will attempt to make a fetch request. If on failure it tries again with increasing delay for number of times which user has requested

const requestManager = (url, options = {}, attempts = 3) => {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      // on success just pass the data to resolve
      .then(resolve)
      .catch((error) => {
        if (attempts === 1) return reject(error);
        setTimeout(() => {
            // Note: Add then and catch methods here to bubble the error
            requestManager(url, options, attempts - 1).then(resolve).catch(reject)
        }, 3000)
      });
  });
};

requestManager("https://catfact.ninja/fact").then((response) => {
  console.log("response", response);
}).catch((error) => console.error("Error: ", error));
