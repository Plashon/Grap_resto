import React from "react";
import Restaurant from "./Restaurant";
import { useAuthContext } from "../context/authContext";
import RestaurantService from "../services/restaurant.service";

const Card = ({ id, imageUrl, name, type }) => {
  const { user } = useAuthContext();
  const handleDelete = async () => {
    try {
      const response = await RestaurantService.deleteRestaurant(id);
      if (response.status === 200) {
        alert("Restaurant has deleted");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="card bg-base-100 w-96 shadow-xl m-3 h-96 " id="card">
      <figure>
        <img src={imageUrl} alt={name} className="rounded-xl h- w-96 h-64" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{type}</p>
        {user &&
          (user.roles.includes("ROLES_MODERATOR") ||
            user.roles.includes("ROLES_ADMIN")) && (
            <div className="card-actions justify-end">
              {user.roles.includes("ROLES_ADMIN") && (
                <button
                  className="btn btn-error"
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </button>
              )}
              <a className="btn btn-primary" href={`edit/${id}`}>
                Edit
              </a>
            </div>
          )}
      </div>
    </div>
  );
};
export default Card;
