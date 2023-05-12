/* eslint-disable no-unused-vars */
/* eslint react/prop-types: 0 */
import React from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const ChefCard = ({ id, image, name, experience, numberOfRecipes, likes }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <LazyLoad threshold={0.65}>
      <img className="rounded-t-lg h-[320px] w-full" src={image} alt="" />
      </LazyLoad>

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <h3 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
          Years of experience : {experience}
        </h3>
        <h3 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
          Number of recipes : {numberOfRecipes}
        </h3>
        <h3 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
          Likes : {likes}
        </h3>

        <Link
          to={`chefRecipe/${id}`}
          className="inline-flex items-center px-3 py-2 mt-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          View Recipes
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ChefCard;
