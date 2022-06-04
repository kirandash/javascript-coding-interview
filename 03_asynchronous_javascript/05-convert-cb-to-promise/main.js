// Create a promise function to be able to use callback function via promise approach

const asyncFunc = (callback) => {
  setTimeout(() => {
    callback(1);
  }, 3000);
};

const promisifyAsyncFn = (asyncFn) => {
  return new Promise((resolve) => {
    asyncFn((data) => {
      resolve(data);
    })
  })
}

promisifyAsyncFn(asyncFunc).then(res => console.log(res))
