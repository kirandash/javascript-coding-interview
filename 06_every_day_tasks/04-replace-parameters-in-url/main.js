// Write a function to Replace parameters in url

const initialUrl = "/posts/:postId/comments/:commentId";

// Naive
const replaceParamsInUrlNaive = (url, values) => {
  values.forEach((val) => {
    url = url.replace(`:${val.from}`, val.to);
  });
  return url;
};

// Best
const replaceParamsInUrl = (url, values) =>
  values.reduce((acc, val) => acc.replace(`:${val.from}`, val.to), url);

const resultUrl = replaceParamsInUrl(initialUrl, [
  { from: "postId", to: "1" },
  { from: "commentId", to: "3" },
]);
console.log(resultUrl);
