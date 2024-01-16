import React, { useEffect } from "react";

const path = "https://bookapi.cm.hmw.lol/";

const Books = () => {
  const [dataBook, setDataBook] = React.useState([]);
  const fectchData = async () => {
    const url = path + "api/books";
    const response = await fetch(url);
    const result = await response.json();
    console.log(dataBook);
    setDataBook(result.data);
  };

  useEffect(() => {
    fectchData();
  }, []);
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        {dataBook.map((book, index) => {
          return (
            <div key={index}>
              <p className="text-2xl">{book.title}</p>
              <img src={book.image_url} alt={book.title} />
              <br /> <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Books;
