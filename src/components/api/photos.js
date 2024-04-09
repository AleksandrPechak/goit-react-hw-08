import axios from "axios";

const API_KEY = 'b6ihIOWxJ69p3qmvPuAUogy-KcWgGq76meV05inXGAw';
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers["Authorization"] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  orientation: "landscape",
  per_page: 15,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(`search/photos?page=${page}&query=${query}`);

  return data;
};