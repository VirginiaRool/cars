import axios from "axios";

const searchImages = async () => {
  const response = await axios.get(`https://api.unsplash.com/search/`, {
    headers: {
      Authorization: `Client-ID hwI9GKSWNpuDbdK2svrNCJi3l_NY9xHKQvdNuc01Cbk`,
    },
    params: {
      query: `car`,
    },
  });

  console.log(response);

  const responseResults = response.data.results;
  return responseResults;
};

export default searchImages;
