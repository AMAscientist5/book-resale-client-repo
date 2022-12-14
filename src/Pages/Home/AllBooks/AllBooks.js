import React, { useEffect, useState } from "react";
const AllBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("https://aradun-book-resale-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);
  return (
    <div>
      <div className="text-center lg:mt-12 lg:mb-8">
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
