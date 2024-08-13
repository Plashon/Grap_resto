import React from "react";
import { useState } from "react";

export const Add = () => {
  const [restaurant, setRestaurants] = useState({
    title: "",
    type: "",
    img: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurants({ ...restaurant, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/restaurants", {
        method: "POST",
        body: JSON.stringify(restaurant),
      });
      if (response.ok) {
        alert("restaurant added success");
        setRestaurants({
          title: "",
          type: "",
          img: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="max-w-md mx-auto mt-4 p-6 bg-white rounded-md shadow-md">
        <div className="font-bold text-3xl justify-items-start mt-5 ml-20">
          <span className="text-cyan-400">Add</span> Restaurant
        </div>
        <label className="input input-bordered flex items-center gap-2 my-5">
          Restaurant ImageUrl
          <input
            type="text"
            className="grow"
            placeholder="https://food-cms.grab.com/"
            name="img"
            onChange={handleChange}
            value={restaurant.img}
          />
        </label>
        {restaurant.img && (
          <div className="flex items-center ">
            <img src={restaurant.img} className="h-32" />
          </div>
        )}
        <label className="input input-bordered flex items-center gap-2 my-5">
          Restaurant Name
          <input
            type="text"
            className="grow"
            placeholder="ชื่อร้าน"
            name="title"
            onChange={handleChange}
            value={restaurant.title}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-5">
          Restaurant Type
          <input
            type="text"
            className="grow"
            placeholder="Restaurant Type"
            name="type"
            onChange={handleChange}
            value={restaurant.type}
          />
        </label>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-5"
        >
          Add Restaurant
        </button>
      </div>
    </>
  );
};
