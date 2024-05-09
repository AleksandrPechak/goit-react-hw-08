import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://662f8d3943b6a7dce30fe1da.mockapi.io',
});

export const setAuthHeader = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = "";
};