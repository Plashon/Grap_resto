import React from "react";
import Restaurant from "./Restaurant";

const Card = ({ id, imageUrl, name, type }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch("http://localhost:3000/restaurants/"+ id, {
        method: "DELETE",
      });
      if(response.ok){
        alert("Restaurant has deleted")
        window.location.reload();
      }
     } catch(error){
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
        <div className="card-actions justify-end">
          <a className="btn btn-primary" href={`edit/${id}`}>Edit</a>
          <button className="btn btn-error" onClick={()=>handleDelete(id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};
export default Card;
