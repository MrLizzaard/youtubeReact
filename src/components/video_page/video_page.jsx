import React from "react";
import styles from "./video_page.module.css";

const VideoPage = ({ video }) => <h1>{video.snippet.title}</h1>;

export default VideoPage;
