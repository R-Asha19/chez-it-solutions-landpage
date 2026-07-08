import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  headers: { "Content-Type": "application/json" },
});

export const submitLead = async (payload) => {
  const { data } = await api.post("/leads", payload);
  return data;
};
