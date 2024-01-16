const path = "https://bookapi.cm.hmw.lol/api/books";

const fetchData = async () => {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching :", error);
    return null;
  }
};

fetchData()
  .then((data) => {
    console.log("Data from API:", data);
  })
  .catch((error) => {
    console.error("Error in API request:", error);
  });

/* ?
const path = "https://bookapi.cm.hmw.lol/";

async function logBook() {
  const response = await fetch(path);
  const books = await response.json();
  console.log(books);
}

fetch(path)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((rating) => {
    console.log("Rating :", rating);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
  */
