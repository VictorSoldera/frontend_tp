import axios from "axios";

const api = axios.create({
  baseURL: "http://mybraryback.herokuapp.com",
});

export default api;
