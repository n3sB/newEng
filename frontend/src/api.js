import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

export const fetchMarketData = () => API.get("/api/market-data");
export const fetchPositions = () => API.get("/api/positions");
export const executeTrade = (data) => API.post("/api/trade", data);
export const updateSettings = (settings) => API.post("/api/settings", settings);
