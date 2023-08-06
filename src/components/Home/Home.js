import React from "react";
import Hero from "./Hero";
import FetchData from "./FetchData";
import Navbar from "./Navbar";

function Home(props) {
  return (
    <div>
      <Navbar username={props.name} />
      <Hero username={props.name} />
      <FetchData />
    </div>
  );
}

export default Home;
