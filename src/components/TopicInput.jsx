// src/components/TopicInput.jsx
import React, { useState } from "react";
import { fetchYoutubeVideo } from "../services/youtubeApi";
import VideoPlayer from "./VideoPlayer";

export default function TopicInput() {
  const [topic, setTopic] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = await fetchYoutubeVideo(topic);
    setVideoUrl(url);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a topic..."
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <button type="submit">Search Video</button>
      </form>

      {videoUrl && <VideoPlayer url={videoUrl} />}
    </div>
  );
}
