
import RestaurantService from "../services/restaurant.service";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useAuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";


export const Add = () => {

  const { user } = useAuthContext();
  useEffect(() => {
    if (
      !user ||
      (user &&
        !(
          user.roles.includes("ROLES_MODERATOR") ||
          user.roles.includes("ROLES_ADMIN")
        ))
    ) {
      navigate("/");
    }
  }, [user]);
  
  const navigate = useNavigate();
  const [restaurant, setRestaurants] = useState({
    name: "",
    type: "",
    imageUrl: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurants({ ...restaurant, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      const response = await RestaurantService.addRestaurant(restaurant);
      if (response.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Restaurant Insert`,
          text: response.data.message,
          timer: 1500,
        }).then(() => {
          setRestaurants({ name: "", type: "", imgUrl: "" });
          window.location.reload();
        });
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: `Restaurant Insert`,
        text: error?.response?.data?.message,
        timer: 1500,
      });
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
            name="imageUrl"
            onChange={handleChange}
            value={restaurant.imageUrl}
          />
        </label>
        {restaurant.img && (
          <div className="flex items-center ">
            <img src={restaurant.imageUrl} className="h-32" />
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
          Add Restaurant
        </button>
      </div>
    </>
  );
};
