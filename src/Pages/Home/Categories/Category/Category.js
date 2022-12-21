import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  // console.log(category);
  return (
    <div className="bg-white text-center rounded border btn-position-container">
      <h4 className="font-bold text-2xl my-1">{category.categoryName}</h4>
      <img className=" text-center h-60" src={category.img} alt="" />
      <Link to={`/category/${category?.category_id}`}>
        <button className="bg-indigo-800 p-2 btn-position-child text-white font-bold w-full mb-0">
          Click To See
        </button>
      </Link>
    </div>
  );
};

export default Category;
