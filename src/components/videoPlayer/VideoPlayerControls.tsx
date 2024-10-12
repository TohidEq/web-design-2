import React from "react";

import { FaPlay, FaPause } from "react-icons/fa";

interface VideoPlayerControlsProps {
  progress: number;
  size?: number | undefined;
  width?: number | undefined;
  isPaused: boolean;
  onPlayPause: () => void;
}

const VideoPlayerControls: React.FC<VideoPlayerControlsProps> = ({
  progress,
  size = 48,
  width = 3,
  isPaused,
  onPlayPause,
}) => {
  const center = size / 2;
  const radius = center - width;
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray * (1 - progress);

  return (
    <div className="video-controller">
      <svg
        className="progressbar"
        width={size}
        height={size}
        style={{ transform: "rotate(-90deg)" }}
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="#ffffff"
          strokeWidth={width}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke={"#FF5C00"}
          strokeWidth={isPaused ? width + 1 : width + 1.5}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        />
      </svg>

      <div className="button-container">
        <button onClick={onPlayPause}>
          <div className="svg-container">
            {isPaused ? <FaPlay /> : <FaPause />}
          </div>
        </button>
      </div>
    </div>
  );
};

export default VideoPlayerControls;
