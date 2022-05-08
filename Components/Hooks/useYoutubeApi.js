import { useState, useEffect } from "react";

const useYoutubeApi = (id) => {
  const [data, setData] = useState({});

  const fetchData = async () => {
    // youtube api key
    const youtubeApiKey = process.env.youtubeApiKey;
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${youtubeApiKey}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => setData(data.items[0].snippet.thumbnails));
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  return data;
};

export default useYoutubeApi;
