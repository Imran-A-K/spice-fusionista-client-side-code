/* eslint-disable no-unused-vars */
/* eslint react/prop-types: 0 */
import React from "react";
import { useLoaderData } from "react-router-dom";
import carouselImage1 from "../../assets/CarouselImages/carouselImage1.jpeg";
import RecipeCard from "./ReusableComponents/RecipeCard";
import LazyLoad from "react-lazy-load";
const ChefRecipes = () => {
  const chefDetails = useLoaderData();
  const {
    id,
    picture,
    name,
    years_of_experience,
    numberOfRecipes,
    likes,
    bio,
    recipes,
  } = chefDetails;
  // console.log(chefDetails)
  return (
    <div>
      
        <div className="mx-auto px-4 py-16 md:px-24 lg:px-8 lg:py-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl flex lg:flex-row flex-col items-center justify-between ">
          <div className="relative lg:w-1/2 ">
            <LazyLoad threshold={0.25}>
            <img
              className="p-3 rounded-full h-[270px] w-[270px] ring-2 ring-green-300 dark:ring-lime-500 lg:w-4/5 lg:ml-auto  sm:h-[400px] sm:w-[400px] lg:hidden mb-3 "
              src={picture}
              alt=""
            />
            </LazyLoad>

            <div className="w-full hidden lg:block lg:w-full lg:ml-auto h-56  sm:h-96 ">
              <LazyLoad threshold={0.25}>
              <img
                className="rounded-full p-3 ring-2 h-[450px] w-[450px] ring-green-300 dark:ring-lime-500"
                src={picture}
                alt=""
              />
              </LazyLoad>
            </div>
          </div>
          <div className="lg:max-w-lg  lg:pr-5 lg:mb-0 mb-10 max-[600px]:pt-5 max-[600px]:pl-5">
            <div className="max-w-xl mb-6 lg:mt-8">
              <h2 className="max-w-lg mb-6 text-3xl font-sans font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-[70px]">
                <span className="inline-block bg-gradient-to-r from-blue-600 via-cyan-600 to-cyan-600 bg-clip-text text-transparent">
                  {name}
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">{bio}</p>
              <h4 className="mt-2 text-lg">Likes : {likes}</h4>
              <h4 className="mt-2 text-lg">
                Number of Recipes : {numberOfRecipes}
              </h4>
              <h4 className="mt-2 text-lg">
                Experience : {years_of_experience} years
              </h4>
            </div>
            {/* <div className="flex flex-col items-center md:flex-row">
            <Link to="/" className="button md:w-auto">
              <div className="inline-flex items-center justify-center w-full h-full">
                <p className="px-5 text-lg">Get Started</p>
              </div>
            </Link>
          </div> */}
          </div>
        </div>
      

      <div className="mx-auto px-4 py-16 md:px-24 lg:px-8 lg:py-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <h2 className="text-center text-4xl font-bold mb-14">
          Featured Recipe&apos;s
        </h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                id={recipe.id}
                image={recipe.recipeImage}
                recipeName={recipe.recipeName}
                ingredients={recipe.ingredients}
                rating={recipe.rating}
                cookingMethod={recipe.cookingMethod}
              ></RecipeCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipes;
