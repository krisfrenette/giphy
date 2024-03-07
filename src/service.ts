import axios from "axios";

const BASE_URL = "https://api.giphy.com";
const IMAGE_END_POINT = "/v1/gifs/search";
const API_KEY = "1bkG7ky5cmw5SLyvNfElcR1iYVzs38Zq";

const service = axios.create({
  baseURL: BASE_URL,
});

export const fetchImages = async (q: string) => {
  try {
    const response = await service.get(IMAGE_END_POINT, {
      params: {
        api_key: API_KEY,
        q,
        limit: 3,
        rating: "g",
      },
    });
    return response.data;
  } catch (error) {
    // Add logging to here for tracking purposes
    console.log(error);
    throw error;
  }
};
