import axios from "axios";

export const api = axios.create({
  baseURL: "https://ph-agro-pets.onrender.com/",
  timeout: 50000,
});
