import axios from "axios";

//console.log(process.env.VITE_REACT_APP_API_KEY);
const searchImages = async (term) => {
  const API_KEY = "-YW49R8VQWcURa9Lj0zAPoRP1vqEeP7MfqLwofyFYjo";
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${API_KEY}`,
    },
    params: {
      query: term,
      // per_page: 10
    },
  });
  console.log(response);
  return response.data.results;
};
export default searchImages;
