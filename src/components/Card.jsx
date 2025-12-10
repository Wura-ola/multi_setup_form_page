import React from "react";

function Card({ src, alt, title, price, subtext }) {
  return (
    <div className="w-full">
      <div className="flex md:block items-center gap-4 rounded-xl border border-coolGray/60 hover:border-PrimaryPurplishBlue hover:bg-PrimaryLightBlue/10 transition-colors px-4 py-4 md:px-5 md:py-6 w-full">
        <img src={src} alt={alt} className="md:w-[30%] w-[18%]" />
        <div className="flex flex-col gap-1 md:mt-16 ">
          <h1 className="text-primaryMarineBlue font-semibold text-lg lg:text-xl tracking-normal">
            {title}
          </h1>
          <p className="text-coolGray text-base">{price}</p>
          {subtext ? (
            <span className="text-primaryMarineBlue text-sm">{subtext}</span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Card;
