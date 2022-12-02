import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://shark-app-939ev.ondigitalocean.app/api/v1",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;