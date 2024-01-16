import React from "react";

function HeroSec({ book }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-max h-max relative">
        <div className="max-w-screen max-h-screen left-0 top-0 absolute bg-indigo-50 rounded-[15px]" />
        <div className="w-[408px] h-[390px] left-[760px] top-[66px] absolute">
          <img
            className="w-[196px] h-[272px] left-[212px] top-[58px] absolute rounded-[10px]"
            src={book.image_url}
          />
          <img
            className="w-[236.20px] h-[327.75px] left-[124.51px] top-[31.13px] absolute rounded-[10px]"
            src={book.image_url}
          />
          <img
            className="w-[280.14px] h-[390px] left-0 top-0 absolute rounded-[10px]"
            src={book.image_url}
          />
        </div>
        <div className="w-[525px] h-[390px] left-[71px] top-[66px] absolute">
          <div className="left-[3px] top-0 absolute text-violet-500 text-xl font-semibold font-['Poppins']">
            MUST READ
          </div>
          <div className="left-0 top-[38px] absolute text-stone-900 text-[62px] font-semibold font-['Poppins'] leading-[72px]">
            <h4>{book.title}</h4>
          </div>
          <div className="w-[446px] left-[3px] top-[252px] absolute text-black text-base font-normal font-['Poppins']">
            {book.synopsis}
          </div>
          <div className="left-[3px] top-[198px] absolute text-black text-base font-medium font-['Poppins']">
            <h1>{book.author.name}</h1>
          </div>
          <div className="w-[127.26px] h-[25.45px] left-[130px] top-[196px] absolute">
            <div className="w-[25.45px] h-[25.45px] left-[76.35px] top-0 absolute flex-col justify-start items-start inline-flex" />
            <div className="w-[25.45px] h-[25.45px] left-[101.81px] top-0 absolute flex-col justify-start items-start inline-flex" />
            <div className="w-[25.45px] h-[25.45px] left-[50.90px] top-0 absolute flex-col justify-start items-start inline-flex" />
            <div className="w-[25.45px] h-[25.45px] left-[25.45px] top-0 absolute flex-col justify-start items-start inline-flex" />
            <div className="w-[25.45px] h-[25.45px] left-0 top-0 absolute flex-col justify-start items-start inline-flex" />
          </div>
          <div className="w-[193px] h-[50px] left-[3px] top-[340px] absolute bg-violet-500 rounded-lg" />
          <div className="w-[314px] h-[50px] left-[211px] top-[340px] absolute rounded-lg border border-violet-500" />
          <div className="w-[146.63px] h-[30px] left-[26px] top-[350px] absolute">
            <div className="left-0 top-0 absolute text-white text-xl font-medium font-['Poppins']">
              Read Book
            </div>
          </div>
          <div className="left-[246px] top-[350px] absolute text-violet-500 text-xl font-medium font-['Poppins']">
            See All Recomendations
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSec;
