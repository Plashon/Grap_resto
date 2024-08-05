import React from "react";

const Login = () => {
    const [user, setUser] = useState({
        userName: " ",
        password: "",
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
      };
  return (
    <>
      <div className="max-w-md mx-auto mt-4 p-6 bg-white rounded-md shadow-md">
        <div className="font-bold text-3xl text-center mt-5">
          <span className="text-cyan-400 ">Login</span>
        </div>
        <label className="input input-bordered flex items-center gap-2 my-5">
          User Name
          <input
            type="text"
            className="grow"
            placeholder="ชื่อร้าน"
            name="userName"
            onChange={handleChange}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-5">
          Password
          <input
            type="text"
            className="grow"
            placeholder="********"
            name="password"
            onChange={handleChange}
          />
        </label>
        <div className="flex justify-center items-center gap-4 mt-6">
          <button className="btn btn-primary">Login</button>
          <button className="btn btn-error">Cancel</button>
        </div>
      </div>
    </>
  );
};

export default Login;
