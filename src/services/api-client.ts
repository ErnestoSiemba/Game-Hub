import axios from "axios";

export default axios.create({
  // The Vite proxy prevents browser-level network/CORS issues during local development.
  baseURL: import.meta.env.DEV ? "/rawg-api/" : "https://api.rawg.io/api/",
  params: {
    key: import.meta.env.VITE_RAWG_API_KEY,
  },
});
