import axios from "axios";

const Instance = axios.create({
  baseURL: "https://backendevangadi-gh9z.onrender.com/api",
});

export default Instance;
