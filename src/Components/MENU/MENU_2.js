import React from "react";

import one from "./img/one.jpeg";
import two from "./img/two.jpeg";
import three from "./img/three.jpeg";
import four from "./img/four.jpeg";

export default function Menu() {
  return (
    <section className="px-4 py-10">
      <div className="flex items-center justify-center space-x-4">
        <div className="h-px w-16 bg-gray-300"></div>
        <h5 className="text-sm tracking-widest text-gray-500">MENU</h5>
        <div className="h-px w-16 bg-gray-300"></div>
      </div>

      <div className="text-center mt-4 mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 md:text-3xl">
          Popular Dishes
        </h3>
        <p className="text-sm text-gray-500 mt-2 md:text-base">
          There is a game between the waiters in the restaurant to see who
          serves the food to each table fastest. That led to attempting the
          Guinness Record.
        </p>
      </div>

      {/* Dishes Section */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="text-center">
          <img
            src={one}
            alt="Chicken Manjoori"
            className="w-full sm:w-[250px] md:w-[300px] lg:w-[350px] h-auto object-contain rounded-md shadow-sm"
          />
          <article className="flex justify-between items-center mt-4 px-2 text-gray-700">
            <p className="font-medium">Chicken Manjoori</p>
            <p className="font-semibold">$15</p>
          </article>
          <p className="text-sm text-gray-500 mt-2">
            Dish relished by all age groups as a starter dish at parties.
          </p>
        </div>

        <div className="text-center">
          <img
            src={two}
            alt="Hot Dog"
            className="w-full sm:w-[250px] md:w-[300px] lg:w-[350px] h-auto object-contain rounded-md shadow-sm"
          />
          <article className="flex justify-between items-center mt-4 px-2 text-gray-700">
            <p className="font-medium">Hot Dog</p>
            <p className="font-semibold">$10</p>
          </article>
          <p className="text-sm text-gray-500 mt-2">
            Grilled sausage served in the slit of a partially sliced bun.
          </p>
        </div>

        <div className="text-center">
          <img
            src={three}
            alt="Fresh Salmon"
            className="w-full sm:w-[250px] md:w-[300px] lg:w-[350px] h-auto object-contain rounded-md shadow-sm"
          />
          <article className="flex justify-between items-center mt-4 px-2 text-gray-700">
            <p className="font-medium">Fresh Salmon</p>
            <p className="font-semibold">$5</p>
          </article>
          <p className="text-sm text-gray-500 mt-2">
            Beat the health blues with our Super Immune Blue Juice Recipe.
          </p>
        </div>

        <div className="text-center">
          <img
            src={four}
            alt="Veg Burger"
            className="w-full sm:w-[250px] md:w-[300px] lg:w-[350px] h-auto object-contain rounded-md shadow-sm"
          />
          <article className="flex justify-between items-center mt-4 px-2 text-gray-700">
            <p className="font-medium">Veg Burger</p>
            <p className="font-semibold">$10</p>
          </article>
          <p className="text-sm text-gray-500 mt-2">
            Burgers may be made from ingredients like beans.
          </p>
        </div>
      </div>

      <div className="text-center mt-8">
        <button className="px-6 py-2 border border-yellow-500 text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-white transition-colors">
          See all dishes
        </button>
      </div>
    </section>
  );
}
