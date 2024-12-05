import React from "react";
import { dayoutPackage } from "../utilities/mockPackages";

const Booking = () => {
  console.log(dayoutPackage || "package");

  return (
    <div className="m-4">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">
        Available Packages
      </h1>
      <table className="w-full border-collapse border border-gray-200 shadow-lg">
        <thead>
          <tr>
            <th className="border border-gray-200 p-2 shadow-lg w-3/5">
              Package Name
            </th>

            <th className="border border-gray-200 p-2 shadow-lg w-1/5">
              Price
            </th>

            <th className="border border-gray-200 p-2 shadow-lg w-1/5">
              Add To Cart
            </th>
          </tr>
        </thead>
        <tbody>
          {dayoutPackage.map((pkg, index) => (
            <tr key={pkg.id}>
              <td className="border border-gray-200 p-2 shadow-md ">
                <span className="text-blue-600 hover:text-blue-800 font-semibold">{pkg.name} </span>
                <p> {pkg.description}</p>
              </td>

              <td className="border border-gray-200 p-2 shadow-md text-center font-semibold">
                ₹ {pkg.price}
              </td>

              <td className="border border-gray-200 p-2 shadow-md text-center">
                <button className="bg-green-300  py-1 px-3 font-semibold rounded-md hover:scale-110 transition-all duration-500 ease-in-out hover:bg-green-600">
                  ADD
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Booking;
