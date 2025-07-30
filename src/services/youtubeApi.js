// src/services/youtubeApi.js
import axios from "axios";

const API_KEY = "AIzaSyDAoq_ic3zTcYk9DqYerpUMdRTC4MKyUUY"; // 👈 yahan apna API key daalein

export const fetchYoutubeVideo = async (query) => {
  const res = await axios.get(
    `https://www.googleapis.com/youtube/v3/search`,
    {
      params: {
        part: "snippet",
        q: query,
        type: "video",
        key: API_KEY,
        maxResults: 1
      }
    }
  );

  const videoId = res.data.items[0]?.id?.videoId;
  return `https://www.youtube.com/embed/${videoId}`;
};
