import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import Advertised from "../Advertised/Advertised";
import AllBooks from "../AllBooks/AllBooks";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories/Categories";

const Home = () => {
  const { advertized } = useContext(AuthContext);

  return (
    <div>
      <Banner></Banner>
      {advertized && <Advertised advertized={advertized}></Advertised>}
      <Categories></Categories>
      <AllBooks></AllBooks>
    </div>
  );
};

export default Home;
