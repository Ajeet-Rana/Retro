import React from "react";
import BlueBackground from "./img/blue_bg.jpeg";
import GreyBackground from "./img/grey_bg.jpeg";
import BurgerImage from "./img/burger.png";
import PizzaImage from "./img/pizza.png";

export default function Offers() {
  return (
    <section className="py-16 bg-gray-50">
      {/* Heading Section */}
      <div className="text-center mb-16">
        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
          OFFERS
        </h4>
        <h2 className="text-4xl font-bold text-gray-800">Our Offer Dishes</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Our chefs create melt-in-your-mouth dishes that'll satiate even the
          fussiest eaters. Now the dishes are in offers, use it based on hunger.
        </p>
      </div>

      {/* Offer Cards Section */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Chicken Burger Offer */}
        <div
          className="relative rounded-lg shadow-md overflow-hidden flex items-center p-8 bg-cover bg-center"
          style={{
            backgroundImage: `url(${BlueBackground})`,
          }}
        >
          <div className="flex-1 space-y-4">
            <div className="bg-white rounded-full px-6 py-2 text-center shadow-md inline-block text-blue-500 font-bold text-lg">
              Only $10
            </div>
            <p className="border-b-2 border-t-2 border-gray-800 text-gray-800  inline-block px-2 font-sans">
              50% OFFER GOING
            </p>
            <h3 className="text-2xl font-bold text-gray-800">Chicken Burger</h3>
            <p className="text-gray-600">
              Chicken burger with the tasty toppings and leaves.
            </p>
          </div>

          <div className="flex-1">
            <img
              src={BurgerImage}
              alt="Chicken Burger"
              className="w-full max-w-[300px] mx-auto object-contain"
            />
          </div>
        </div>

        {/* Chicken Pizza Offer */}
        <div
          className="relative rounded-lg shadow-md overflow-hidden flex items-center p-8 bg-cover bg-center"
          style={{
            backgroundImage: `url(${GreyBackground})`,
          }}
        >
          <div className="flex-1 space-y-4">
            <div className="bg-white rounded-full px-6 py-2 text-center shadow-md inline-block text-gray-500 font-bold text-lg">
              Only $9
            </div>
            <p className="border-b-2 border-t-2 border-gray-800 text-gray-800  inline-block px-2 font-sans">
              50% OFFER GOING
            </p>
            <h3 className="text-2xl font-bold text-gray-800">Chicken Pizza</h3>
            <p className="text-gray-600">
              Pizza with multiple flavors and the toppings are mixed.
            </p>
          </div>
          <div className="flex-1">
            <img
              src={PizzaImage}
              alt="Chicken Pizza"
              className="w-full max-w-[300px] mx-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
