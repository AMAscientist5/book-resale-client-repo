import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

import toast from "react-hot-toast";
import ConfirmationModal from "../../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../../Shared/Loading/Loading";

const AllBuyers = () => {
  const [deletingBuyerAccount, setDeletingBuyerAccount] = useState(null);
  const [veryfy, setVeryfy] = useState(false);
  console.log(deletingBuyerAccount);

  const closeModal = () => {
    setDeletingBuyerAccount(null);
  };

  const {
    data: buyers,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["buyer"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://aradun-book-resale-server.vercel.app/usersType?role=buyer`
        );
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  const handleDeleteBuyerAccount = (deletingBuyerAccount) => {
    console.log(deletingBuyerAccount);
    fetch(
      `https://aradun-book-resale-server.vercel.app/users/${deletingBuyerAccount._id}`,
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
            `Buyer User ${deletingBuyerAccount.name} deleted successfully`
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
            {buyers.map((buyer, i) => (
              <tr key={buyer._id}>
                <th>{i + 1}</th>
                <td>{buyer?.name}</td>
                <td>{buyer?.email}</td>
                <td>
                  {veryfy ? (
                    <button onClick={() => setVeryfy(!veryfy)}>Verify</button>
                  ) : (
                    <button onClick={() => setVeryfy(!veryfy)}>Verified</button>
                  )}
                </td>
                <td>
                  <label
                    onClick={() => setDeletingBuyerAccount(buyer)}
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
      {deletingBuyerAccount && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deletingBuyerAccount.name}. It cannot be undone.`}
          successAction={handleDeleteBuyerAccount}
          successButtonName="Delete"
          modalData={deletingBuyerAccount}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default AllBuyers;
