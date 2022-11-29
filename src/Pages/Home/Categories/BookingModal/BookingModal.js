import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider";

const BookingModal = ({ bookingItem }) => {
  const { user } = useContext(AuthContext);
  console.log(bookingItem);
  const { name: productName, resalePrice, location } = bookingItem;
  console.log(productName, resalePrice);
  console.log(user.email);

  const navigate = useNavigate();

  const handleBookingItem = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const product = form.product.value;
    const price = form.price.value;
    const location = form.location.value;
    const phone = form.phone.value;

    const booking = {
      name,
      email,
      product,
      price,
      location,
      phone,
    };

    console.log(booking);

    fetch("https://aradun-book-resale-server.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          // setTreatment(null);
          toast.success("Booking confirmed");
          navigate("/");
          // refetch();
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Order Booking</h3>
          <form
            onSubmit={handleBookingItem}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              name="product"
              type="text"
              defaultValue={productName}
              disabled
              placeholder="Product Name"
              className="input w-full input-bordered"
            />
            <input
              name="price"
              type="text"
              defaultValue={resalePrice}
              disabled
              placeholder="Product Price"
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              defaultValue={location}
              placeholder="Location"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-primary w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
