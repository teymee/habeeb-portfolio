import React from "react";

export default function TagSection({ title, subtitle, listArr }) {
  const titleWords = title.split(" ");
  const isShort = titleWords.length <= 2;

  return (
    <section>
      <section className="border-b border-b-black-200 pb-10">
        <div className={`${isShort ? "w-fit" : "w-[50%]"}`}>
          <h1
            className={`text-[96px] leading-24 flex gap-x-4 ${
              isShort ? "flex-nowrap   " : "flex-wrap"
            } `}
          >
            {titleWords.map((word) => {
              const isConjuction = word.includes("and") || word.includes("or");
              return (
                <span className={`${isConjuction && "font-thin"}`}>{word}</span>
              );
            })}
          </h1>
        </div>
      </section>

      <div className="py-10 flex justify-between">
        <div className="w-[25%]">
          <p className="uppercase text-md w-[60%]">{subtitle}</p>
        </div>

        <div className="w-[75%]">
          <ul className="space-y-4 text-size24">
            {listArr.map((item, index) => {
              return (
                <li key={index} className="list-disc w-9/12">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
