import React, { useEffect, useState } from "react";
import Category from "../Category/Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }, []);

  return (
    <div>
      <div className="text-center">
        <h3 className="mt-5 font-bold">All Books Categories</h3>
      </div>
      <div className="bg-neutral-300 shadow-white gap-8 md:p-24 p-20 lg:p-48 lg:py-5 grid  md:grid-cols-2 lg:grid-cols-3 justify-center content-center justify-items-center">
        {categories.map((category) => (
          <Category key={category._id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
