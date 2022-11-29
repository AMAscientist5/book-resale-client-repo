import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

import toast from "react-hot-toast";
import ConfirmationModal from "../../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../../Shared/Loading/Loading";

const AllSellers = () => {
  const [deletingSellerAccount, setDeletingSellerAccount] = useState(null);
  console.log(deletingSellerAccount);

  const closeModal = () => {
    setDeletingSellerAccount(null);
  };

  const {
    data: sellers,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["seller"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://aradun-book-resale-server.vercel.app/usersType?role=seller`
        );
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  const handleDeleteSellerAccount = (deletingSellerAccount) => {
    console.log(deletingSellerAccount);
    fetch(
      `https://aradun-book-resale-server.vercel.app/users/${deletingSellerAccount._id}`,
      {
        method: "DELETE",
        // headers: {
        //   authorization: `bearer ${localStorage.getItem("accessToken")}`,
        // },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          refetch();
          toast.success(
            `Seller User ${deletingSellerAccount.name} deleted successfully`
          );
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Email</th>
              <th>User Type</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, i) => (
              <tr key={seller._id}>
                <th>{i + 1}</th>
                <td>{seller?.name}</td>
                <td>{seller?.email}</td>
                <td>Varified</td>
                <td>
                  <label
                    onClick={() => setDeletingSellerAccount(seller)}
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
      {deletingSellerAccount && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deletingSellerAccount.name}. It cannot be undone.`}
          successAction={handleDeleteSellerAccount}
          successButtonName="Delete"
          modalData={deletingSellerAccount}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default AllSellers;
