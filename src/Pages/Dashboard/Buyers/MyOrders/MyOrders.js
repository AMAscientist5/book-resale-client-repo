import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider";

// import toast from "react-hot-toast";
import ConfirmationModal from "../../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../../Shared/Loading/Loading";

const MyOrders = () => {
  const [paymentBuyerOrder, setPaymentBuyerOrder] = useState(null);
  const { user } = useContext(AuthContext);
  console.log(paymentBuyerOrder);

  const closeModal = () => {
    setPaymentBuyerOrder(null);
  };

  const {
    data: buyerOrders,
    isLoading,
    // refetch,
  } = useQuery({
    queryKey: ["email"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/bookingsOrder?email=${user?.email}`
        );
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  const handlePaymentUserOrder = (parameter) => {
    console.log(parameter);
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-3xl mt-60">My Orders: {buyerOrders?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {buyerOrders.map((buyerOrder, i) => (
              <tr key={buyerOrder._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={buyerOrder?.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{buyerOrder?.name}</td>
                <td>{buyerOrder?.price}</td>
                {/* <td>Available</td> */}

                <td>
                  <label
                    onClick={() => setPaymentBuyerOrder(buyerOrder)}
                    htmlFor="confirmation-modal"
                    className="btn btn-sm btn-error"
                  >
                    Pay
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {paymentBuyerOrder && (
        <ConfirmationModal
          title={`Are you Ready to Payment?`}
          message={`Payment is processing It will take a litle bit.`}
          successAction={handlePaymentUserOrder}
          successButtonName="Pay"
          modalData={paymentBuyerOrder}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default MyOrders;
