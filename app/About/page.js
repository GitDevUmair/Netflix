import React from "react";
import Hero from '@/components/Hero'
const about = () => {
  let heading = "OUR STORY";
  let para = "From award-winning dramas to block buster action movies. We\'ve got you covered. Browse our selection of the latest and the greatest movies and find your new favourite today."
  let img = '/netflix_about.jpg'
  return(
    <div className="h-[100vh]">
  <Hero heading={heading} para={para} img={img}/>
  </div>
  )
   
};

export default about;
