import api from "./api";
import TokenService from "./token.server";

const API_URL = "/api/v1/auth";

const register = async (userName, email, password) => {
  return await api.post(API_URL + "/signup", { userName, email, password });
};

const login = async (userName, password) => {
  const response = await api.post(API_URL + "/signin", { userName, password });
  if (response.data.accessToken) {
    localStorage.setItem(
      "accessToken",
      JSON.stringify(response.data.accessToken)
    );
    localStorage.setItem("user", JSON.stringify(response.data));
  }
 return response;
};

const AuthService = {
  register,
  login,
};
export default AuthService;
