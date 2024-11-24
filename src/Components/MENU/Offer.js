import React from "react";

import calender from "./img/calender.png";
import bike from "./img/bike.png";
import menu from "./img/menu.png";

export default function Offer() {
  return (
    <section
      className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-gray-800 text-slate-50 mx-auto px-6 lg:px-16 py-10"
      style={{ maxWidth: "1440px", minHeight: "400px" }}
    >
      <div className="text-center lg:text-left lg:w-1/2 mb-8 lg:mb-0 flex flex-col gap-3">
        <span className="text-yellow-500 uppercase tracking-wide text-sm font-semibold inline-block relative">
          <span className="border-b-2 border-t-2 border-yellow-400 px-2 p-1">
            What we offer
          </span>
        </span>

        <h2 className="text-2xl lg:text-3xl font-bold">Our Great Services</h2>
        <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
          The atmosphere sets the stage. It’s about more than just a dining room
          away from your home. Food takes the spotlight as guests.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-1/2">
        <div className="flex flex-col items-center text-center bg-gray-900 p-6 rounded-lg shadow-md shadow-gray-700">
          <img src={calender} alt="Calendar Icon" className="w-12 h-12 mb-4" />
          <p className="text-base lg:text-lg font-semibold">Opened 24/7</p>
        </div>
        <div className="flex flex-col items-center text-center bg-gray-900 p-6 rounded-lg shadow-md shadow-gray-700">
          <img src={menu} alt="Menu Icon" className="w-12 h-12 mb-4" />
          <p className="text-base lg:text-lg font-semibold">Special Menus</p>
        </div>
        <div className="flex flex-col items-center text-center bg-gray-900 p-6 rounded-lg shadow-md shadow-gray-700">
          <img src={bike} alt="Bike Icon" className="w-12 h-12 mb-4" />
          <p className="text-base lg:text-lg font-semibold">Home Delivery</p>
        </div>
      </div>
    </section>
  );
}
