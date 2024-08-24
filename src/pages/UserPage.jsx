import React from "react";
import { useAuthContext } from "../context/authContext";
import notAllowImg from "../assets/profile.png";

const UserPage = () => {
  const { user } = useAuthContext();

  if (!user) {
    return (
      <figure>
        <img src={notAllowImg} alt="Movie" />
      </figure>
    );
  }

  const maskingString = (str, start, end) => {
    if (
      !str ||
      start < 0 ||
      start > str.length ||
      end < 0 ||
      (end > str.length) | (start > end)
    ) {
      return str;
    }
    const maskedStr =
      str.substring(0, start) + "*".repeat(20) + str.substring(end);
    return maskedStr;
  };

  return (
    <div className="grid justify-center">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={notAllowImg} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">User Profile</h2>
          <p>
            <span>UserName : </span> {user.userName}
          </p>
          <p>
            <span>Email : </span> {user.email}
          </p>
          <p>
            <span>Roles : </span>
            {user.roles.join(",")}
          </p>
          <p>
            <span>Token : </span> {" "}
            {maskingString(user.accessToken,3,user.accessToken.length-3)}
          </p>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
