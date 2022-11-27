import React, { useEffect, useState } from "react";
const AllBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);
  return (
    <div className="py-24 ">
      <div className="text-center mb-4">
        <h2 className="text-5xl font-bold">All Book Cover</h2>
      </div>
      <div className="relative w-full lg:flex justify-center lg:gap-4 overflow-x-auto">
        {allBooks.map((book) => (
          <img className=" mx-auto my-5" src={book.picture} alt="" />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
