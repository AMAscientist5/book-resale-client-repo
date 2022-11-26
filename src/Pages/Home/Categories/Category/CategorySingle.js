import React from "react";
import { useLoaderData } from "react-router-dom";

const CategorySingle = () => {
  const categoryType = useLoaderData();
  console.log(categoryType);

  return (
    <div>
      <h2>I am single Category</h2>
      {categoryType.map((category) => {
        return <h3>{category.name}</h3>;
      })}
      {categoryType.length}
    </div>
  );
};

export default CategorySingle;
