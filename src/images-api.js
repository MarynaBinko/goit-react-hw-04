import axios from "axios";
const ACCESS_KEY="s7-2OHlQ6b9zc1hiGytIsHigWHNrwQUF29UnGjOi69E";

axios.defaults.baseURL = "<https://api.unsplash.com/>";

export const fetchImagesApi = async topic => {
  
      const response = await axios.get(`/search/photos`, {
        params: { query: topic, client_id: ACCESS_KEY }
      });
  
    return response.data.results;
    
  };

