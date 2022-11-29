import React from "react";
import { CheckmarkIcon } from "react-hot-toast";

const Advertised = ({ advertized }) => {
  console.log(advertized);

  return (
    <div className="mt-12">
      <div className="text-center mt-5">
        <h2 className="text-3xl font-bold">New Collection</h2>
      </div>

      <div className="md:flex lg:flex mx-6 mb-5 justify-center align-items-center ">
        <div className="lg:w-64 text-center ml-4">
          <img className="w-75" src={advertized?.image} alt="" />
        </div>
        <div className="mt-12 ml-10">
          <p className="lg:flex">
            verified :{" "}
            <CheckmarkIcon className=" ml-8" size="20px" color="blue" />
          </p>
          <p className="mb-1">
            Category:{" "}
            <span className="ml-1 text-1xl font-bold">
              {advertized?.category}
            </span>
          </p>
          <p className="mb-1">
            Resale Price: <span className="ml-1">{advertized?.price}</span>
          </p>
          <p className="mb-1">
            Used Time: <span className="ml-1">{advertized?.purchased}</span>
          </p>
          <p className="mb-1">
            Posted Time:{" "}
            <span className="ml-1">{advertized?.productStatus}</span>
          </p>
          <p className="mb-1">
            Location: <span className="ml-1">{advertized?.location}</span>
          </p>
          <div className="flex ">
            <p className="mb-1 mr-4">
              {" "}
              Product: <span className="ml-1">{advertized?.name}</span>
            </p>
          </div>
          <p className="mb-1">
            Description: <span className="ml-1">{advertized?.description}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advertised;
