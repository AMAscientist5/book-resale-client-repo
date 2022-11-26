import React from "react";
import Advertised from "../Advertised/Advertised";
import AllBooks from "../AllBooks/AllBooks";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories/Categories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Advertised></Advertised>
      <Categories></Categories>
      <AllBooks></AllBooks>
    </div>
  );
};

export default Home;
