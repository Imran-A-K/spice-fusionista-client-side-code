/* eslint-disable no-unused-vars */
import React from "react";
import Single from "../../assets/Homepage Images/single.png";
import Double from "../../assets/Homepage Images/double.png";
import Triple from "../../assets/Homepage Images/triple.png";

const PricingCards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <h2 className="text-5xl text-center mb-20">Pricing</h2>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Primary Bundle
          </h2>
          <p className="text-center text-4xl font-bold">$49</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Authentic Italian dishes</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Upto 200 recipes per month</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Mediocre</h2>
          <p className="text-center text-4xl font-bold">$109</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              Modern Italian cuisine + Primary Bundle
            </p>
            <p className="py-2 border-b mx-8">2 Granted Users</p>
            <p className="py-2 border-b mx-8">Upto 500 recipes per month</p>
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Meganite</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Everything you can handle</p>
            <p className="py-2 border-b mx-8">3 Granted Users</p>
            <p className="py-2 border-b mx-8">Upto 800 recipes per month</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
