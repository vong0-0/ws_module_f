import { useRef } from "react";
import useAutoPlayVideo from "../../hook/useAutoPlayVideo";

export default function VideoPlayback() {
  const videoRef = useRef(null);

  useAutoPlayVideo(videoRef);

  return (
    <section aria-label="Video playback">
      <div className="w-full py-16">
        <video
          ref={videoRef}
          src="videos/lyon.mp4"
          muted
          playsInline
          loop
          aria-label="This video shows the locations of Lyon."
        ></video>
      </div>
    </section>
  );
}
