import axios from "axios";
const ACCESS_KEY="s7-2OHlQ6b9zc1hiGytIsHigWHNrwQUF29UnGjOi69E";

axios.defaults.baseURL = "https://api.unsplash.com/";


   
  export const fetchImagesApi = async (topic, page = 1) => {
    const response = await axios.get("search/photos", {
      params: {
        query: topic,
        page: page,
        per_page: 10,
        client_id: ACCESS_KEY 
      }
    });
    console.log("API response:", response.data);
    
    return response.data.results; 
  };