import React, { useEffect } from "react";
import Button from "./Button";

const path = "https://bookapi.cm.hmw.lol/";

const ListBookHome = () => {
  const [dataListBook, setDataBook] = React.useState([]);
  const fectchData = async () => {
    const url = path + "api/books?direction={desc}";
    const response = await fetch(url);
    const result = await response.json();
    console.log(dataListBook);
    setDataBook(result.data);
  };

  useEffect(() => {
    fectchData();
  }, []);
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-full grid grid-cols-2 gap-10 p-[96px] ">
          {dataListBook.map((book, index) => {
            return (
              <div className=" flex " key={index}>
                <div className="max-h-[377px] max-w-[273px] object-center ">
                  <img
                    className=" rounded-lg max-h-[377px] max-w-[273px] object-center "
                    src={book.image_url}
                    alt={book.title}
                  />
                </div>
                <div className="pl-[17px] pr-[114px]">
                  <p className="text-2xl font-bold">{book.title}</p>
                  <br />
                  <p className="text-2xl">by {book.author.name}</p>
                  <br />
                  <p>Author</p>
                  <br />
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aut, sed.
                  </p>
                  <br />
                  <Button />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ListBookHome;
