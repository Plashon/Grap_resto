import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RestaurantService from "../services/restaurant.service";
import Swal from "sweetalert2";

export const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [restaurant, setRestaurants] = useState({
    name: "",
    type: "",
    imageUrl: "",
  });
  useEffect(() => {
    RestaurantService.getRestaurantById(id).then((response)=>{
      if(response.status === 200){
        setRestaurants(response.data);
      }
    })
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurants({ ...restaurant, [name]: value });
  };
  const handleSubmit = async (e) => {
    try {
      const response = await RestaurantService.editRestaurant(id, restaurant);
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Update restaurant",
          text: "Updated successfully",
          timer: 1500,
        });
        navigate("/");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Restaurant Update",
        text: error?.response?.data?.message || error.message,
        timer: 1500,
      });
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-4 p-6 bg-white rounded-md shadow-md">
        <div className="font-bold text-3xl justify-items-start mt-5 ml-20">
          <span className="text-cyan-400">Edit</span> Restaurant
        </div>
        <label className="input input-bordered flex items-center gap-2 my-5">
          Restaurant ImageUrl
          <input
            type="text"
            className="grow"
            placeholder="https://food-cms.grab.com/"
            name="imageUrl"
            onChange={handleChange}
            value={restaurant.imageUrl}
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
            name="name"
            onChange={handleChange}
            value={restaurant.name}
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
          Edit Restaurant
        </button>
      </div>
    </>
  );
};
