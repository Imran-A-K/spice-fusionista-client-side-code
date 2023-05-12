/* eslint-disable no-unused-vars */ 
import React from "react";
import SocialIcons from "./FooterItems/SocialIcons";
import ItemsContainer from "./FooterItems/ItemsContainer";
import { Icons } from "./FooterItems/Menus";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2023. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;