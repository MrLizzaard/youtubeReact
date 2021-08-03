import React from "react";
import styles from "./video_page.module.css";

const VideoPage = ({ video }) => {
  return (
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        src={`https://www.youtube.com/embed/${video.id}`}
        type="text/html"
        width="100%"
        height="500px"
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h2 className={styles.title}>{video.snippet.title}</h2>
      <h3>{video.snippet.channelTitle}</h3>
      <pre className={styles.description}>{video.snippet.description}</pre>
    </section>
  );
};

export default VideoPage;
