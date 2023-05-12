/* eslint-disable no-unused-vars */
import { Carousel } from "flowbite-react";
import carouselImage1 from "../../assets/CarouselImages/carouselImage1.jpeg";
import carouselImage2 from "../../assets/CarouselImages/carouselImage2.jpeg";
import carouselImage3 from "../../assets/CarouselImages/carouselImage3.jpeg";
import carouselImage4 from "../../assets/CarouselImages/carouselImage4.jpeg";
import carouselImage5 from "../../assets/CarouselImages/carouselImage5.jpeg";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ChefCard from "./ReusableComponents/ChefCard";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Newsletter from "./NewsLetter";
import PricingCards from "./PricingCard";
import LazyLoad from "react-lazy-load";

const Home = () => {
  const { loading } = useContext(AuthContext);
  const chefData = useLoaderData();

  if (loading) {
    return (
      <div className="flex mt-64 justify-center">
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  // console.log(chefData)
  return (
    <div className="">
      <div className="mx-auto px-4 py-16 md:px-24 lg:px-8 lg:py-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl flex lg:flex-row flex-col items-center justify-between ">
        <div className="relative lg:w-1/2 ">
          <img
            className="w-full p-3 rounded-full ring-2 ring-green-300 dark:ring-lime-500 lg:w-4/5 lg:ml-auto h-56  sm:h-96 lg:hidden mb-3 "
            src={carouselImage1}
            alt=""
          />

          <div className="w-full hidden lg:block lg:w-full lg:ml-auto h-56  sm:h-96 ">
            <img
              className="rounded-full p-3 ring-2 ring-green-300 dark:ring-lime-500"
              src={carouselImage1}
              alt=""
            />
          </div>
        </div>
        <div className="lg:max-w-lg  lg:pr-5 lg:mb-0 mb-10 max-[600px]:pt-5 max-[600px]:pl-5">
          <div className="max-w-xl mb-6 lg:mt-8">
            <h2 className="max-w-lg mb-6 text-3xl font-sans font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-[70px]">
              One Step Solution
              <br className="hidden md:block" /> For Classic{" "}
              <br className="hidden md:block" />
              <span className="inline-block custom-text-animation">
                Italian Cuisine
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              If you are looking for classic Italian dishes you came to the
              right place. Here you can find authentic dishes from Italian
              cuisine with modern innovative touch from famous chef across the
              globe. Scroll down to know more.
            </p>
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
          <h2 className="text-center text-4xl font-bold mb-8">
            Featured Chef&apos;s
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {chefData.map((chef) => (
              <ChefCard
                key={chef.id}
                id={chef.id}
                image={chef.picture}
                name={chef.name}
                experience={chef.years_of_experience}
                numberOfRecipes={chef.numberOfRecipes}
                likes={chef.likes}
                bio={chef.bio}
                recipes={chef.recipes}
              ></ChefCard>
            ))}
          </div>
        </div>
      

      <PricingCards></PricingCards>

      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
