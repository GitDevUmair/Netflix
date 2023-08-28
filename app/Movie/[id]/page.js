import React from "react";
import Image from "next/image";
const page = async ({ params }) => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const id = params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "99dd9a2256mshba9f80305e539fdp13bd7fjsn83e5f40e135a",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  const mainData = data[0].details;
  return (
    <div className="container mx-auto min-h-screen mt-7 ">
      <h2 className="mb-3 font-bold">
        Netflix \{" "}
        <span className="text-red-700" style={{ textTransform: "capitalize" }}>
          {mainData.type}
        </span>
      </h2>
      <Image
        src={mainData.backgroundImage.url}
        alt={mainData.title}
        height={250}
        width={350}
      />
      <h1 className="font-bold mt-3 text-2xl mb-3">{mainData.title}</h1>

      <p className="text-sm">{mainData.synopsis}</p>
    </div>
  );
};

export default page;
