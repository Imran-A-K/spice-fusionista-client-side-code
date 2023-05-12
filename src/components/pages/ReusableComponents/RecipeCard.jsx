/* eslint-disable no-unused-vars */
/* eslint react/prop-types: 0 */

import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { toast } from "react-hot-toast";
const RecipeCard = ({
  image,
  recipeName,
  ingredients,
  cookingMethod,
  rating,
}) => {
  const [buttonText, setButtonText] = useState("Add to Favorites");
  const [disable, setDisable] = useState(false);
  const click = () => {
    setButtonText("Favorites Added");
    toast.success("This recipe has been added to favorites");
    setDisable(true);
  };
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-col md:max-w-xl cursor-pointer hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-cover w-full rounded-t-lg h-full md:h-96 md:w-full md:rounded-none md:rounded-l-lg"
        src={image}
        alt=""
      />
      <div className="flex h-full flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {recipeName}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <span className="font-semibold">Ingredients :</span>{" "}
          {ingredients.join()}
        </p>
        <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
          <span className="font-semibold">Cooking Method :</span>{" "}
          {cookingMethod}
        </p>
        <div className="flex items-center gap-2">
          <Rating
            style={{ maxWidth: 150 }}
            value={Math.round(rating || 0)}
            readOnly
            // onChange={setRating}
          />
          <span className=" pt-2 text-lg">{rating}</span>
          <button
            onClick={click}
            type="button"
            disabled={disable}
            className="text-gray-900 ml-auto mt-1 bg-gradient-to-r from-teal-300 to-lime-300 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

{
  /* <div className=" max-w-md mb-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
    <img className="rounded-t-lg w-full h-[300px]" src={image} alt="" />

<div className="p-5">
<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{recipeName}</h5>
    
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='font-semibold'>Ingredients :</span> {ingredients.join()}</p>
<p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='font-semibold'>Cooking Method :</span> {cookingMethod}</p>
   <div className='mt-[200px]'>
   <div className='flex gap-2'>
    <Rating
        style={{ maxWidth: 150 }}
        value={Math.round(rating || 0)}
        readOnly
        // onChange={setRating}
      />
      <span className=" pt-2 text-lg">{rating}</span>
    </div>     
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    </button>
   </div>
</div>
</div> */
}

{
  /* <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl cursor-pointer hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-full md:h-full md:w-48 md:rounded-none md:rounded-l-lg" src={image} alt="" />
    <div className="flex flex-col justify-between p-4 leading-normal">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{recipeName}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='font-semibold'>Ingredients :</span> {ingredients.join()}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='font-semibold'>Cooking Method :</span> {cookingMethod}</p>
        <div className='flex items-center gap-2'>
        <Rating
            style={{ maxWidth: 150 }}
            value={Math.round(rating || 0)}
            readOnly
            // onChange={setRating}
          />
          <span className=" pt-2 text-lg">{rating}</span>
        </div>        
    </div>
    
</div> */
}
