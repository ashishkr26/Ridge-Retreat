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
        <thead className="text-blue-500">
          <tr>
            <th className="border border-gray-200 p-2 shadow-lg w-2/5">
              Package Name
            </th>

            <th className="border border-gray-200 p-2 shadow-lg w-1/5">
              Price
            </th>
            <th className="border border-gray-200 p-2 shadow-lg w-1/5">
              Add to Cart
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
              <td className="border border-gray-200">
                <span className=" flex justify-center">
                <button className="w-10 m-1 p-1 bg-gray-100 hover:bg-gray-200 text-2xl font-semibold text-center ">+</button>
                <input className="w-10  m-1 border border-gray-300 text-center  " type="text" placeholder="0"/>
                <button className="w-10 m-1 p-1 bg-gray-100 hover:bg-gray-200 text-2xl font-semibold text-center ">-</button>
                </span>
                

              </td>

              <td className="border border-gray-200 p-2 shadow-md text-center">
                <button className="bg-blue-300  py-1 px-3 font-semibold rounded-sm hover:scale-110 transition-all duration-500 ease-in-out hover:bg-blue-600">
                Book Now 🛒
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
