// src/components/VideoPlayer.jsx
import React from "react";

export default function VideoPlayer({ url }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <iframe
        width="560"
        height="315"
        src={url}
        title="YouTube Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
        allowFullScreen
      ></iframe>
    </div>
  );
}
