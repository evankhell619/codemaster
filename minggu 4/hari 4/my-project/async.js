const fetchData = async () => {
  try {
    // const data = await getTodo("./testtt/momo.json");
    // console.log(data);
    const data = await fetch("https://api.randomuser.me/");
    const result = await data.json();
    console.log(result.results[0].name.first);

    const firstName = result.results[0].name.first;

    const h1 = document.getElementsByTagName("h1")[0];
    console.log(h1);
    h1.textContent = firstName;
  } catch (error) {
    console.log(error);
  }
};
fetchData();
