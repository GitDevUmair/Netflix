import React from "react";
import Image from "next/image";
import Link from "next/link";
const Moviecard = (currElem) => {
  const { id, type, synopsis, title } = currElem.jawSummary;
  //console.log(currElem);
  return (
    <>
      <div className="w-56 my-4 border-2 shadow-md rounded-md inline">
        <Image
          src={currElem.jawSummary.backgroundImage.url}
          alt={title}
          height={200}
          width={250}
        />
        <h2 className="font-bold p-1">{title}</h2>

        <p className="text-sm p-2">{synopsis.substr(0, 70)}...</p>
        <Link href={`/Movie/${id}`}>
          <button className="bg-black text-white mx-2 my-1 px-1 py-1 rounded-xl text-sm font-semibold hover:text-white hover:bg-red-700">
            Read More
          </button>{" "}
        </Link>
      </div>
    </>
  );
};

export default Moviecard;
