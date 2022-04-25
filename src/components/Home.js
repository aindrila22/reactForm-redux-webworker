import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const details = useSelector((state) => state.form);

  return (
    <div className="w-full grid place-items-center bg-green-100 h-screen ">
      <div className="bg-white border-0 border-green-600 border-t-4 shadow-sm w-full max-w-3xl px-4 py-6 rounded-lg m-2 flex flex-col">
        <span className="text-3xl text-green-600 font-medium">
          Your submitted form
        </span>
      </div>

      <div className="bg-white w-full boder border-gray-300 shadow-sm max-w-3xl px-6 py-3 rounded-lg m-1 flex flex-col font-Mulish">
        <span className="italic text-base font-medium text-gray-500 mt-4">
          Your Name
        </span>
        <span className="w-full md:w-3/4 text-lg px-3 mb-8 mt-4">
          {details.username}
        </span>
        <hr />
        <span className="italic text-base font-medium text-gray-500 mt-2">
          Tech Stack
        </span>
        <span className="w-full mt-3 text-lg md:w-3/4 px-3 mb-8">
          {details.topic}
        </span>
        <hr />

        <span className="italic text-base font-medium text-gray-500 mt-2">
          Your review
        </span>
        <div className="w-full px-3 mt-4 text-lg mb-6">{details.review}</div>
      </div>
      <div className="flex justify-center items-center pt-6 max-w-3xl w-full mb-6">
        <span className="space-x-3 rounded-sm">
          <Link
            to="/"
            type="submit"
            className="cursor-pointer font-medium text-lg px-4 py-2 rounded-md bg-green-600 text-white "
          >
            Back
          </Link>
        </span>
      </div>
    </div>
  );
};

export default React.memo(Home);
