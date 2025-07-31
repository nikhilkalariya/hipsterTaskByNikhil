import axiosInstance from "./axiosInstance";

export async function fetchFromAPI<T>(endpoint: string): Promise<T> {
  const response = await axiosInstance.get<T>(endpoint);
  return response.data;
}
