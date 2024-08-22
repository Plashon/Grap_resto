import React, { useEffect } from "react";
import notAllowImg from "../assets/profile.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NotAllowed = () => {
  const [counter, setCounter] = useState(5);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setInterval(() => {
      navigate("/");
    }, 5000);
    const countdown = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter <= 1) {
          clearInterval(countdown);
          return 0;
        }
        return prevCounter - 1;
      });
    }, 1000);
    return () => {
      clearTimeout(timer), clearInterval(countdown);
    };
  }, [navigate]);
  return (
    <div className="grid justify-center">
      <div className="card bg-base-100 w-96 shadow-xl ">
        <div className="card-body">
          <h2 className="card-title">Page Not Allowed</h2>
          <p>
            You are not allowed to view this page. <br />
            you will redirect in{" "}
            <span className="countdown font-mono text-6xl">
              <span style={{ "--value": counter }}></span>
            </span>{" "}
            second.
          </p>
        </div>
        <figure>
          <img src={notAllowImg} alt="Shoes" />
        </figure>
      </div>
    </div>
  );
};

export default NotAllowed;
