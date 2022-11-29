import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../../Shared/Loading/Loading";

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageHostKey = process.env.REACT_APP_Imgbb_key;

  const navigate = useNavigate();

  const { data: categories, isLoading } = useQuery({
    queryKey: ["Name"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categoriesName");
      const data = await res.json();
      return data;
    },
  });

  const handleAddDoctor = (data) => {
    console.log(data.image[0]);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const sellerProduct = {
            name: data.name,
            price: data.price,
            condition: data.condition,
            location: data.location,
            phone: data.phone,
            description: data.description,
            purchased: data.purchased,
            category: data.category,
            productStatus: "available",
            image: imgData.data.url,
          };

          fetch("http://localhost:5000/sellerProducts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              // authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(sellerProduct),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
              navigate("/dashboard/myproducts");
            });
        }
      });
  };
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-4xl text-center mt-5">Add A Product</h2>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="lg:flex justify-center gap-5">
          <div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                {...register("name", {
                  required: "Name is Required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                {...register("price", {
                  required: "price is Required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.price && (
                <p className="text-red-500">{errors.price.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Condition</span>
              </label>
              <select
                className="select input-bordered w-full max-w-xs"
                {...register("condition")}
              >
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
              </select>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Year of Purchase</span>
              </label>
              <input
                type="text"
                {...register("purchased", {
                  required: "purchased is Required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.purchased && (
                <p className="text-red-500">{errors.purchased.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                {...register("description", {
                  required: "description is Required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.description && (
                <p className="text-red-500">{errors.description.message}</p>
              )}
            </div>
          </div>
          <div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                {...register("Phone", {
                  required: "Phone is Required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.Phone && (
                <p className="text-red-500">{errors.Phone.message}</p>
              )}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                {...register("location", {
                  required: "location is Required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.location && (
                <p className="text-red-500">{errors.location.message}</p>
              )}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                {...register("category")}
                className="select input-bordered w-full max-w-xs"
              >
                {categories.map((category) => (
                  <option key={category._id} value={category?.categoryName}>
                    {category?.categoryName}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="file"
                {...register("image", {
                  // required: "Photo is Required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.img && (
                <p className="text-red-500">{errors.img.message}</p>
              )}
            </div>
            <input
              className="btn btn-primary w-full mt-4"
              value="Add Product"
              type="submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
