import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.winebeer.io",
});
export default instance;
