import React from "react";
// import errorPic from "../../Asset/errorPic/error5.webp";
// import errorPic from "../../Asset/errorPic/error1.png";
import errorPic from "../../Asset/errorPic/error4.JPG";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
const ErrorPage = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex justify-center align-items-center">
        <img className="mt-10 h-96" src={errorPic} alt="" />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
