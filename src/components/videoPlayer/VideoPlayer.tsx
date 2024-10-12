"use client";
import React, { useEffect, useRef, useState } from "react";

import VideoPlayerControls from "./VideoPlayerControls";

type Props = { trailerVideo: LangsDict["trailer_video"] };

function VideoPlayer({ trailerVideo }: Props) {
  const [videoProgress, setVideoProgress] = useState<number>(0);
  const [videoDuration, setVideoDuration] = useState<number>();
  const [isPaused, setIsPaused] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      setVideoDuration(video.duration);
    }
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const currentTime = videoRef.current?.currentTime;
    if (videoDuration != null && currentTime != null) {
      let loadingTimeout = setTimeout(() => {
        if (videoProgress == 1) {
          setVideoProgress(-0.000001);
          setVideoDuration(0);
          setIsPaused(true);
          videoRef.current?.pause();
        }
        if (videoProgress == currentTime / videoDuration) {
          setVideoProgress((prev) => prev + 0.000001);
        } else {
          setVideoProgress(currentTime / videoDuration);
        }
      }, 10);

      return () => {
        clearTimeout(loadingTimeout);
      };
    }
  }, [videoProgress, videoDuration, isPaused]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      setIsPaused(!video.paused);
      video.paused ? video.play() : video.pause();
    }
  };

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  return (
    <div className="video-player">
      <div className={`video-player-container `}>
        <div
          className={`controller-container ${!isPaused && "run"} ${
            videoProgress > 0.03 && "played"
          }`}
        >
          <div className="title title-left">{trailerVideo.title.left}</div>
          <VideoPlayerControls
            size={50}
            width={2}
            progress={videoProgress}
            isPaused={isPaused}
            onPlayPause={togglePlayPause}
          />
          <div className="title title-right">{trailerVideo.title.right}</div>
        </div>

        <video
          className="video"
          ref={videoRef}
          src={trailerVideo.url}
          poster={trailerVideo.thumbnail}
          onClick={() => togglePlayPause()}
        ></video>
      </div>
    </div>
  );
}

export default VideoPlayer;
