import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";

import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider";
import ConfirmationModal from "../../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../../Shared/Loading/Loading";

const MyProducts = () => {
  const { adVertization } = useContext(AuthContext);
  const [deletingSellerProduct, setDeletingSellerProduct] = useState(null);
  console.log(deletingSellerProduct);

  // const navigate = useNavigate();

  const closeModal = () => {
    setDeletingSellerProduct(null);
  };

  const handleAdvertize = (sellerProduct) => {
    adVertization(sellerProduct);
    // navigate("/");
  };

  const {
    data: sellerProducts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["sellerProducts"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/sellerProducts");
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  const handleDeleteSellerProduct = (deletingSellerProduct) => {
    console.log(deletingSellerProduct);
    fetch(`http://localhost:5000/sellerProducts/${deletingSellerProduct._id}`, {
      method: "DELETE",
      // headers: {
      //   authorization: `bearer ${localStorage.getItem("accessToken")}`,
      // },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          refetch();
          toast.success(
            `Seller Product ${deletingSellerProduct.name} deleted successfully`
          );
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      {/* <h2 className="text-3xl">My Products: {sellerProducts?.length}</h2> */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Advertized</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {sellerProducts.map((sellerProduct, i) => (
              <tr key={sellerProduct._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={sellerProduct?.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{sellerProduct?.name}</td>
                <td>{sellerProduct?.price}</td>
                <td>{sellerProduct?.productStatus}</td>
                {sellerProduct?.productStatus && (
                  <td
                    className="text-primary"
                    onClick={() => handleAdvertize(sellerProduct)}
                  >
                    Add Run
                  </td>
                )}
                <td>
                  <label
                    onClick={() => setDeletingSellerProduct(sellerProduct)}
                    htmlFor="confirmation-modal"
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingSellerProduct && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deletingSellerProduct.name}. It cannot be undone.`}
          successAction={handleDeleteSellerProduct}
          successButtonName="Delete"
          modalData={deletingSellerProduct}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default MyProducts;
