import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? `${import.meta.env.VITE_API_URL}/api` : "/api",
  headers: { "Content-Type": "application/json" },
});

export const submitLead = async (payload) => {
  const { data } = await api.post("/leads", payload);
  return data;
};
