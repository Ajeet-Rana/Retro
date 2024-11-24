import React from "react";

import cabin from "./img/cabin.jpeg";
import locate from "./img/locate_us.png";
import register from "./img/register.png";
import clock from "./img/clock-removebg-preview.png";

export default function Ans() {
  return (
    <section className="bg-[#FFF8F5] py-8 ">
      <div className="flex flex-col my-12 md:flex-row justify-around items-start md:items-center space-y-6 md:space-y-0 md:space-x-4 px-4">
        <div className="flex items-center space-x-4">
          <img
            src={locate}
            alt="Locate Us Icon"
            className="bg-gray-800 h-14 w-14 rounded-full p-2"
          />
          <div>
            <h4 className="text-lg font-semibold mb-1">Locate Us</h4>
            <p className="text-gray-700 text-sm">
              Riverside 25, San Diego, California
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <img
            src={clock}
            alt="Locate Us Icon"
            className="bg-gray-800 h-14 w-14 rounded-full p-2"
          />
          <div>
            <h4 className="text-lg font-semibold mb-1">Open Hours</h4>
            <p className="text-gray-700 text-sm">
              Mon to Fri 9:00 AM - 9:00 PM
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <img
            src={register}
            alt="Reservation Icon"
            className="bg-gray-800 h-14 w-14 rounded-full p-2"
          />
          <div>
            <h4 className="text-lg font-semibold mb-1">Reservation</h4>
            <p className="text-gray-700 text-sm">restaurantate@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Restaurant Story Section */}
      <div className="my-20 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 px-4 mb-5">
        <div className="w-full md:w-1/2">
          <img
            src={cabin}
            alt="Restaurant Interior"
            className="w-full rounded-lg"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 font-cormorant-infant">
            The Delicious Story
          </h2>
          <p className="text-gray-700 mb-6">
            The people, food, and the prime locations make the perfect place for
            friends & family to come together and have a great time.
          </p>

          <div className="flex flex-col md:flex-row justify-between md:space-x-8">
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-2 font-cormorant-infant">
                2018
              </h4>
              <p className="text-gray-700 text-sm mb-4">
                Plan for this restaurant to deliver healthy food.
              </p>
              <h4 className="text-lg font-cormorant-infant">JOSEFINE</h4>
              <img src="" alt="" />
            </div>

            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-2 font-cormorant-infant">
                2022
              </h4>
              <p className="text-gray-700 text-sm">
                Happily in the fourth year by fulfilling the motto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
