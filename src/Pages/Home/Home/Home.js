import React from "react";
import Advertised from "../Advertised/Advertised";
import AllBooks from "../AllBooks/AllBooks";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories/Categories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <Advertised></Advertised>
      <AllBooks></AllBooks>
    </div>
  );
};

export default Home;
