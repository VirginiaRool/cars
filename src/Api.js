import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get(`https://api.unsplash.com/search/`, {
    headers: {
      Authorization: `Client-ID hwI9GKSWNpuDbdK2svrNCJi3l_NY9xHKQvdNuc01Cbk`,
    },
    params: {
      query: term,
    },
  });

  const responseResults = response.data.photos.results;
  return responseResults;
};

export default searchImages;
