import React from "react";

function Hero({ book }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-max h-max relative">
        <div className="w-[1241px] h-[522px] relative mx-auto">
          <div className="w-[1241px] h-[522px] left-0 top-0 absolute bg-indigo-50 rounded-[15px]" />
          <div className="w-[408px] h-[390px] left-[760px] top-[66px] absolute">
            <img
              className="w-[196px] h-[272px] left-[212px] top-[58px] absolute rounded-[10px]"
              src={book.image_url}
            />
            <img
              className="w-[236px] h-[327px] left-[124px] top-[31px] absolute rounded-[10px]"
              src={book.image_url}
            />
            <img
              className="w-[280px] h-[390px] left-0 top-0 absolute rounded-[10px]"
              src={book.image_url}
            />
          </div>
          <div className="w-[525px] h-[390px] left-[71px] top-[66px] absolute">
            <div className="left-[3px] top-0 absolute text-violet-500 text-xl font-semibold font-['Poppins']">
              MUST READ
            </div>
            <div className="flex justify-center items-center h-screen">
              <div className="left-0 top-[38px] absolute text-stone-900 text-[62px] font-semibold font-['Poppins'] leading-[72px]">
                <h4 className=" ">{book.title}</h4>
              </div>
            </div>
            <div className="w-[446px] left-[3px] top-[252px] absolute text-black text-base font-normal font-['Poppins']">
              {book.synopsis}
            </div>
            <div className="left-[3px] top-[198px] absolute text-black text-base font-medium font-['Poppins']">
              <h1>{book.author.name}</h1>
            </div>
            <div className="w-[193px] h-[50px] left-[3px] top-[340px] absolute bg-violet-500 rounded-lg" />
            <div className="w-[314px] h-[50px] left-[211px] top-[340px] absolute rounded-lg border border-violet-500" />
            <div className="w-[146px] h-[30px] left-[26px] top-[350px] absolute">
              <div className="left-0 top-0 absolute text-white text-xl font-medium font-['Poppins']">
                Read Book &rarr;
                {/* <span className="inline-block"> */}
                {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                      clip-rule="evenodd"
                    />
                  </svg> */}
                {/* </span> */}
              </div>
            </div>
            <div className="left-[246px] top-[350px] absolute text-violet-500 text-xl font-medium font-['Poppins']">
              See All Recomendations
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
