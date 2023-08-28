import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  let heading = "LET'S WATCH MOVIE  TOGETHER";
  let para =
    "From award-winning dramas to block buster action movies. We've got you covered. Browse our selection of the latest and the greatest movies and find your new favourite today.";
  let img = "/heroimage.webp";
  return (
    <>
      <div className="h-[100vh]">
        <Hero heading={heading} para={para} img={img} />
      </div>
    </>
  );
}
