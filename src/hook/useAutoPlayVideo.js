import { useEffect } from "react";

// This hook autoplays the video when it's at least 50% visible in the viewport,
// and pauses it when page is hidden or video is out of view.
export default function useAutoPlayVideo(videoRef) {
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Options for the IntersectionObserver
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // triggers when 50% of the video is visible
    };

    // Create an intersectionObserver to detect if the video is at least 50% visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Check whether video is at least 50% visible
        const isInViewport =
          entry.isIntersecting && entry.intersectionRatio >= 0.5;

        // Play video if it's in the viewport and the tab is visible
        if (isInViewport && document.visibilityState === "visible") {
          video.play().catch((error) => {
            console.warn("Play was prevented:", error);
          });
        }
        // Pause video if it's not in the viewport at least 50%
        else {
          if (!video.paused) {
            video.pause();
          }
        }
      });
    }, options);

    // Start observing the video element
    observer.observe(video);

    /**
     * Helper: Check if at least 50% of the video is visible
     * Used when page visibility changes and IntersectionObserver may not be triggered
     */
    function isVideoHalfVisible() {
      const rect = video.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const windowWidth =
        window.innerWidth || document.documentElement.clientWidth;

      const videoArea = rect.width * rect.height;
      if (videoArea === 0) return false;

      const visibleX = Math.max(
        0,
        Math.min(rect.right, windowWidth) - Math.max(rect.left, 0)
      );

      const visibleY = Math.max(
        0,
        Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)
      );
      const visibleArea = visibleX * visibleY;

      return visibleArea / videoArea >= 0.5;
    }

    // Handles visibility changes (when user switchs tab or minimize browser, etc.)
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        // pause the video when page not visible (switchs tab, etc.)
        if (!video.paused) {
          video.pause();
        }
      } else {
        // When tab becomes visible again, manually check if video is 50% in viewport
        if (isVideoHalfVisible()) {
          video.play().catch((error) => {
            console.warn("Play was prevented after visibility change:", error);
          });
        }
      }
    };

    // Event listener for page visibility change
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup function to stop observing the video element and remove event listener on unmount
    return () => {
      observer.unobserve(video);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [videoRef]);
}
