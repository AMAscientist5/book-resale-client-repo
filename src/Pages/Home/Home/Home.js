import React from "react";
import Advertised from "../Advertised/Advertised";
import AllBooks from "../AllBooks/AllBooks";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Advertised></Advertised>
      <AllBooks></AllBooks>
    </div>
  );
};

export default Home;
