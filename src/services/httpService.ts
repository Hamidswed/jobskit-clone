import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

interface ApiResponse {
  message: string;
}

const app = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL as string,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add response interceptor
app.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiResponse>) => {
    // Handle errors globally
    const message = error.response?.data?.message || "Something went wrong!";
    toast.error(message);
    return Promise.reject(error);
  }
);

const http = {
  get: (url: string) => app.get(url),
  post: (url: string, data: any) => app.post(url, data),
  delete: (url: string) => app.delete(url),
  put: (url: string, data: any) => app.put(url, data),
  patch: (url: string, data: any) => app.patch(url, data),
};

export default http;
