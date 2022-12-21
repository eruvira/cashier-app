import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://orca-app-by29m.ondigitalocean.app/api/v1",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;