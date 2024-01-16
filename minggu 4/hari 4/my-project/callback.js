// const getTodo = (source, poPol) => {
//   const request = new XMLHttpRequest();

//   request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4 && request.status === 200) {
//       const data = request.responseText;
//       poPol(undefined, data);
//     } else if (request.readyState === 4) {
//       poPol(error, undefined);
//     }
//   });

//   request.open("GET", source);
//   request.send();
// };

// getTodo("./testtt/popol.json", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });
