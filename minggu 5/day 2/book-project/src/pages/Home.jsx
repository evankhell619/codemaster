import { useState, useEffect } from "react";
import Hero from "../components/Hero";

const path = "https://bookapi.cm.hmw.lol/";

function Home() {
  const [count, setCount] = useState(0);
  const [topPicks, setTopPicks] = useState([]);

  useEffect(() => {
    async function fetchTopPicks() {
      const url = path + "api/books";
      try {
        console.log("fetching");
        const response = await fetch(url);
        const json = await response.json();
        const filteredTopPicks = json.data.filter(
          (book) => book.is_top_pick === true
        );
        const randomTopPicks = chooseRandomBooks(filteredTopPicks, 5);
        setTopPicks(randomTopPicks);
        console.log(randomTopPicks);

        console.log("fetched");
      } catch {
        console.log("fetch errors");
      }
    }
    fetchTopPicks();
  }, []);

  //console.log(chooseRandomBooks(topPicks, 1));

  function chooseRandomBooks(bookArray, numberOfBooksToChoose) {
    return Array.from({ length: numberOfBooksToChoose }, () => {
      const randomIndex = Math.floor(Math.random() * bookArray.length);
      return bookArray.splice(randomIndex, 1)[0];
    });
  }

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        {topPicks.length > 0 && (
          <Hero book={chooseRandomBooks(topPicks, 1)[0]} />
        )}
      </div>
    </div>
  );
}

export default Home;
