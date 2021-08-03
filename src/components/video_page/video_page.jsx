import React from "react";
import styles from "./video_page.module.css";

const VideoPage = ({ video }) => {
  const url = `https://www.youtube.com/embed/${video.id}`;
  return (
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h1 className={styles.title}>{video.snippet.title}</h1>
      <p className={styles.description}>{video.snippet.description}</p>
    </section>
  );
};

export default VideoPage;
