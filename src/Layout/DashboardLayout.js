import React, { useContext } from "react";
// import React from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin/useAdmin";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import useSeller from "../hooks/useSeller/useSeller";
// import useBuyer from "../hooks/useBuyer/useBuyer";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  // const [isBuyer] = useBuyer(user?.email);

  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="bg-gray-500 drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* {isBuyer && ( */}
            <>
              <li className="custom-option">
                <Link to="/dashboard/myorders">My orders</Link>
              </li>
            </>
            {/* )} */}
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allsellers">All Sellers</Link>
                </li>
                <li>
                  <Link to="/dashboard/allbuyers">All Buyers</Link>
                </li>
                <li>
                  <Link to="/dashboard/reporteditem">Reported Items</Link>
                </li>
              </>
            )}
            {isSeller && (
              <>
                <li>
                  <Link to="/dashboard/addproducts">Add A product</Link>
                </li>
                <li>
                  <Link to="/dashboard/myproducts">My Products</Link>
                </li>
                <li>
                  <Link to="/dashboard/mybuyers">My buyers</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
