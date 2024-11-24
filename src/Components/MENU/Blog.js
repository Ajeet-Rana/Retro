import React from "react";

import pizza from "./img/pizza.jpg";
import salad from "./img/salad.jpg";

export default function Blog() {
  return (
    <section className="px-4 py-12 md:px-8 lg:px-16">
      {/* Header Section */}
      <div className="flex items-center justify-center space-x-4">
        <div className="h-px w-16 bg-gray-300"></div>
        <h5 className="text-sm tracking-widest text-gray-500">BLOG</h5>
        <div className="h-px w-16 bg-gray-300"></div>
      </div>

      {/* Title and Description */}
      <div className="text-center mt-4 mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 md:text-3xl">
          Be First Who Read News
        </h3>
        <p className="text-sm text-gray-500 mt-2 md:text-base">
          Explore the latest stories about our dishes, offers, events, and
          future plans here.
        </p>
      </div>

      {/* Blog Cards Section */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Card 1 */}
        <div className="relative bg-white shadow-md rounded-md overflow-hidden border border-gray-500">
          {/* Image with Overlay */}
          <div className="relative">
            <img
              src={salad}
              alt="Salad"
              className="w-full h-[384px] object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            {/* Centered Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-orange-500 text-white px-4 py-2 text-sm font-medium rounded hover:bg-orange-600">
                View More
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center justify-start space-x-4 mb-2">
              <span className="text-xs text-gray-500 border-b-2 border-t-2 border-yellow-400 p-1">
                DELICIOUS
              </span>
              <span className="text-xs text-gray-400 border-b-2 border-t-2 border-yellow-400 p-1">
                March 19, 2022
              </span>
            </div>
            <h4 className="text-lg font-semibold text-gray-800">
              The Legend Of US Cuisine: The Story Of Hungry People
            </h4>
            <p className="text-sm text-gray-500 mt-2">
              Capitalize on low-hanging fruit to identify a ballpark value added
              matrix economically and the creative activity to beta test
              override the food quality.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative bg-white shadow-md rounded-md overflow-hidden border border-gray-500">
          {/* Image with Overlay */}
          <div className="relative">
            <img
              src={pizza}
              alt="Dish 2"
              className="w-full h-[384px] object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            {/* Centered Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-orange-500 text-white px-4 py-2 text-sm font-medium rounded hover:bg-orange-600">
                View More
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center justify-start space-x-4 mb-2">
              <span className="text-xs text-gray-500 border-b-2 border-t-2 border-yellow-400 p-1">
                COOKING
              </span>
              <span className="text-xs text-gray-400 border-b-2 border-t-2 border-yellow-400 p-1">
                March 19, 2022
              </span>
            </div>
            <h4 className="text-lg font-semibold text-gray-800">
              The Most Popular Delicious Food Of Mediterranean Cuisine
            </h4>
            <p className="text-sm text-gray-500 mt-2">
              Strategies on low-hanging fruit to identify a ballpark value added
              matrix economically and the creative activity to beta test
              override the food quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
