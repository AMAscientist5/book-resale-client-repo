import React, { useEffect, useState } from "react";
import Category from "../Category/Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://aradun-book-resale-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <div>
      <div className="text-center">
        <h3 className="mt-16 lg:mb-5 font-bold text-3xl  lg:text-5xl">
          All Books Categories
        </h3>
      </div>
      <div className="bg-neutral-300 shadow-white gap-8 pt-12 md:p-24 p-20 lg:p-48 lg:py-5 grid  md:grid-cols-2 lg:grid-cols-3 justify-center content-center justify-items-center">
        {categories.map((category) => (
          <Category key={category._id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
