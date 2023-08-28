import React from "react";
import Link from "next/link";
import Moviecard from "@/components/Moviecard";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const movie = async ({ searchParams }) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "99dd9a2256mshba9f80305e539fdp13bd7fjsn83e5f40e135a",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const totalData = 150;
  const dataPerPage = 8;
  const totalPages = Math.ceil(totalData / dataPerPage);
  let currentPage = 1;
  if (Number(searchParams.page) >= 1) {
    currentPage = Number(searchParams.page);
  }
  let offset = (currentPage - 1) * dataPerPage;
  const response = await fetch(
    `https://netflix54.p.rapidapi.com/search/?query=stranger&offset=${offset}&limit_titles=${dataPerPage}&limit_suggestions=20&lang=en`,
    options
  );
  const data = await response.json();
  const mainData = data.titles;
  let pages = [];
  for (let i = currentPage - 3; i < currentPage + 3; i++) {
    if (i < 1) continue;
    if (i > totalPages) break;
    pages.push(i);
  }
  let iconStyles = { color: "red" };
  return (
    <div className="min-h-screen">
      <h1 className="text-center font-bold text-3xl mt-7 mb-3">
        Series <span className="text-red-600">&</span> Movies
      </h1>
      <div className="container mx-auto flex flex-wrap justify-between">
        {mainData.map((currElem) => {
          return <Moviecard key={currElem.summary.id} {...currElem} />;
        })}
      </div>
      <div className="container mx-auto flex justify-center space-x-2 my-3">
        {currentPage - 1 > 0 && (
          <Link href={`/Movie?page=${currentPage - 1}`}>
            <GrFormPrevious className="font-bold text-xl " />
          </Link>
        )}

        {pages.map((page) => {
          return (
            <div key={page}>
              <Link href={`/Movie?page=${page}`}>
                {" "}
                <h3
                  className={`${
                    page === currentPage
                      ? "text-red-600 font-bold"
                      : "font-semibold"
                  }`}
                >
                  {page}
                </h3>{" "}
              </Link>
            </div>
          );
        })}
        {currentPage + 1 < totalPages && (
          <Link href={`/Movie?page=${currentPage + 1}`}>
            <GrFormNext className="font-bold text-xl" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default movie;
