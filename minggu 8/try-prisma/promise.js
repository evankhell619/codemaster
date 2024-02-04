const response = fetch("https://bookapi.cm.hmw.lol/api/categories");

const promise = new Promise((resolve, reject) => {
  try {
    resolve("data");
  } catch (error) {
    reject(error);
  }
});

promise.then(
  (result) => console.log(result),
  (error) => console.log(error)
);
