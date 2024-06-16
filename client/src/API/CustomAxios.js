import axios from "axios";

const CustomAxios = () => {
  return axios.create({
    baseURL: import.meta.env.VITE_API_BASEURL,
    timeout: 2000,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default CustomAxios;
