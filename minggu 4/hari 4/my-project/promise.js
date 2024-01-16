const getTodo = (source) => {
  const request = new XMLHttpRequest();

  return new Promise((resolve, reject) => {
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = request.responseText;
        resolve(data);
      } else if (request.readyState === 4) {
        reject(new Error("Error woy"));
      }
    });
    request.open("GET", source);
    request.send();
  });
};

getTodo("./testtt/popol.json")
  .then((data) => {
    console.log(data);
    return getTodo("./testtt/kupa.json");
  })
  .then((data) => {
    console.log(data);
    return getTodo("./testtt/momo.json");
  })
  .then((data) => {
    console.log(data);
  })

  .catch((error) => console.log(error));
