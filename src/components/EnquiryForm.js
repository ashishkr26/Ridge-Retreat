import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const EnquiryForm = ({ isFormOpen, handleCloseForm }) => {
  // const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <>
      <div
        className={`flex justify-center ${
          isFormOpen ? "" : "mt-10"
        } z-50 dark:bg-gray-800`}
      >
        <form
          className={`${
            isFormOpen ? "w-full" : "w-2/3"
          } m-2 p-2 shadow-lg bg-gray-300 dark:bg-gray-500 dark:text-white `}
        >
          {isFormOpen && (
            <div className="flex justify-between m-2 p-2">
              <h1>Enquiry Form</h1>
              <span
                className="cursor-pointer"
                onClick={() => handleCloseForm()}
              >
                <CloseIcon />
              </span>
            </div>
          )}

          <label className="m-4 p-2 font-poppins text-gray-700 text-sm">
            Your Full Name
          </label>
          <p className="text-xs text-blue-500 mx-6">
            (Please enter your complete name in the provided field.)
          </p>
          <div className="mx-4">
            <input
              className="shadow-bottom-only border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full p-2 m-2"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <label className="m-4 p-2 font-poppins text-sm  text-gray-700">
            Contact Number
          </label>
          <p className="text-xs text-blue-500 mx-6">
            (Your preferred call back number)
          </p>
          <div className="mx-4">
            <input
              className="shadow-bottom-only border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full p-2 m-2"
              type="text"
              placeholder="Contact Number"
            />
          </div>
          <label className="m-4 p-2 font-poppins text-sm  text-gray-700">
            Email Id
          </label>
          <p className="text-xs text-blue-500 mx-6">(Enter Your Email Id)</p>

          <div className="mx-4">
            <input
              className="shadow-bottom-only border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full p-2 m-2"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="m-2 p-2 flex justify-center items-center">
            <button className="p-2 bg-amber-400 rounded-md">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EnquiryForm;
