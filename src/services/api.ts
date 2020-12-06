import axios from "axios";

const api = axios.create({
  baseURL: "https://mybraryback.herokuapp.com",
});

export default api;
