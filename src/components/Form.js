import React, { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reviewForm } from "../store/form/form-action";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const topicInputRef = useRef();
  const usernameInputRef = useRef();
  const reviewInputRef = useRef();

  /********  form submit function **************/
  const feedbackSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const feedbackBody = {
        username: usernameInputRef.current.value,
        topic: topicInputRef.current.value,
        review: reviewInputRef.current.value,
      };

      const worker = new Worker(new URL("./worker.js", import.meta.url), {
        type: "module",
      });

      const message = { sending: feedbackBody };
      worker.postMessage(message);

      dispatch(reviewForm(feedbackBody));
      navigate("/home");

      topicInputRef.current.value = "";
      usernameInputRef.current.value = "";
      reviewInputRef.current.value = "";
    },
    [dispatch, navigate]
  );

  return (
    <div className="feedback w-full bg-blue-200 h-screen">
      <form
        onSubmit={feedbackSubmit}
        className="grid place-items-center py-4 px-3 xs:px-4 mb-6"
      >
        {/******** form heading  ***********/}
        <div className="bg-white border-0 border-blue-700 border-t-4 shadow-sm w-full max-w-3xl px-4 xs:px-6 py-6 rounded-lg m-2 flex flex-col">
          <span className="text-3xl text-blue-700 font-medium">
            Tech review form
          </span>
          <p className="mt-4 font-medium text-base leading-6 mb-5 text-gray-500 font-Mulish">
            Give your review regarding the trending tech stacks of 2021-2022
          </p>
          <hr />
        </div>

        {/*********** name input field **************/}
        <div className="bg-white w-full boder border-gray-300 shadow-sm max-w-3xl px-6 py-3 rounded-lg m-1 flex flex-col font-Mulish font-bold">
          <span className="italic text-base  text-gray-600 mt-4">
            Your Name
          </span>
          <span className="w-full md:w-3/4 px-3 mb-8">
            <input
              type="text"
              ref={usernameInputRef}
              className=" appearance-none block w-full text-gray-700 text-base border-b-2 border-grey-500 py-3 px-4 leading-tight
                 focus:outline-none focus:bg-white focus:border-blue-700"
            />
          </span>

          {/*********** tech stack input field **************/}
          <span className="italic text-base  text-gray-600 mt-2">
            Tech Stack ?
          </span>
          <span className="w-full mt-3 md:w-3/4 px-3 mb-8">
            <input
              type="text"
              placeholder="e.g MERN stack"
              ref={topicInputRef}
              className=" appearance-none block w-full text-gray-700 text-base border-b-2 border-grey-500 py-3 px-4 leading-tight
                 focus:outline-none focus:bg-white focus:border-blue-700"
            />
          </span>

          {/*********** review textarea **************/}
          <span className="italic text-base  text-gray-600 mt-2">
            Your review?
          </span>
          <div className="w-full px-3 mt-4 mb-6">
            <textarea
              rows="2"
              className=" appearance-none block w-full text-gray-700 text-base border-b-2 border-grey-500 py-3 px-4 leading-tight
                 focus:outline-none focus:bg-white focus:border-blue-700"
              type="text"
              placeholder="type your message"
              ref={reviewInputRef}
            />
          </div>
        </div>

        {/*********** submit button **************/}
        <div className="flex justify-between items-center pt-6 max-w-3xl w-full mb-6">
          <span></span>{" "}
          <span className="space-x-3 rounded-sm">
            <button
              type="submit"
              className="cursor-pointer font-medium text-lg px-4 py-2 rounded-md bg-blue-700 text-white hover:bg-white hover:text-blue-700 "
            >
              Submit
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default React.memo(Form);
