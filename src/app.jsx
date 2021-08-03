import styles from "./app.module.css";
import React, { useEffect, useState } from "react";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";
import VideoPage from "./components/video_page/video_page";

function App({ youtube }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([]);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = (query) => {
    youtube
      .search(query) //
      .then((item) => setVideos(item));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((item) => setVideos(item));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      {selectedVideo && <VideoPage video={selectedVideo} />}
      <VideoList videos={videos} onVideoClick={selectVideo} />
    </div>
  );
}

export default App;
