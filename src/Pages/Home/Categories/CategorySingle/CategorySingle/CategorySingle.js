import React, { useState } from "react";

import { useLoaderData } from "react-router-dom";
import { Checkmark } from "react-checkmark";
import BookingModal from "../../BookingModal/BookingModal";

const CategorySingle = () => {
  const categoryType = useLoaderData();
  const [bookingItem, setBookingItem] = useState([]);

  console.log(bookingItem);

  return (
    <div>
      <div className="text-center mt-5">
        <h2 className="text-3xl font-bold">Category Collection</h2>
      </div>
      <div className="lg:flex-wrap lg:flex justify-center align-items-center p-10 lg:p-10">
        {categoryType.map((category) => (
          <div key={category._Id} className="md:flex lg:flex mx-6 mb-20">
            <div className="lg:w-64 text-center ml-4">
              <img className="w-75" src={category?.picture} alt="" />
            </div>
            <div className="mt-5 ml-10">
              <p className="mb-1">
                Book Name:{" "}
                <span className="ml-1 text-1xl font-bold">
                  {category?.name}
                </span>
              </p>
              <p className="mb-1">
                Resale Price:{" "}
                <span className="ml-1">{category?.resalePrice}</span>
              </p>
              <p className="mb-1">
                Origin Price:
                <span className="ml-1">{category?.originPrice}</span>
              </p>
              <p className="mb-1">
                Used Time: <span className="ml-1">{category?.purchased}</span>
              </p>
              <p className="mb-1">
                Posted Time:{" "}
                <span className="ml-1">{category?.postedDate}</span>
              </p>
              <p className="mb-1">
                Location: <span className="ml-1">{category?.location}</span>
              </p>
              <div className="flex ">
                <p className="mb-1 mr-4">
                  {" "}
                  Seller: <span className="ml-1">{category?.seller}</span>
                </p>
                <p>
                  <Checkmark className="mt-4 ml-8" size="20px" color="blue" />
                </p>
              </div>

              <label
                htmlFor="my-modal-3"
                className="btn btn-outline btn-primary"
                onClick={() => setBookingItem(category)}
              >
                Book Now
              </label>
            </div>
          </div>
        ))}
      </div>
      <BookingModal bookingItem={bookingItem}></BookingModal>
    </div>
  );
};

export default CategorySingle;
