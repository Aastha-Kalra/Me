import React from "react";

const Footer = () => {
  return (
    <div className="w-full  bg-slate-400 lg:text-xl flex lg:flex-row flex-col justify-around items-center py-7 mb-1 text-green-900">
      <div>@2023 Aastha Kalra</div>

      <div>All Rights Reserved</div>
      <div>
        Made with <span className="text-red-700"> &#x2764; </span>by Aastha
        Kalra
      </div>
    </div>
  );
};

export default Footer;
